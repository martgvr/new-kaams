import { useState } from "react"
import { COLORS } from "../global/theme"
import { Picker } from "@react-native-picker/picker"
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from "react-native"

import { addToDatabase } from "../service/firebase.service"

const ProductsModalAdd = ({ setShowAddModal, categoriesList, subcategoriesList, updateDBHandler }) => {
	const [productName, setProductName] = useState("")
	const [productPrice, setProductPrice] = useState("")
	const [productPhoto, setProductPhoto] = useState("")
	const [productGender, setProductGender] = useState("Hombre")
	const [productCategory, setProductCategory] = useState(categoriesList[0])
	const [productSubcategory, setProductSubcategory] = useState(subcategoriesList[0])

	const addProductHandler = async () => {
		setShowAddModal(false)
		const dbRequest = await addToDatabase("products", { 
			name: productName, 
			price: productPrice, 
			image: productPhoto, 
			gender: productGender,
			category: productCategory,
			subcategory: productSubcategory,
		})

		dbRequest && updateDBHandler()
	}

	return (
		<View style={styles.background}>
			<Modal onRequestClose={() => setShowAddModal(false)} transparent={true}>
				<View style={styles.centerView}>
					<View style={styles.container}>
						<View style={styles.modalTitleContainer}>
							<Text style={styles.modalTitleText}>Agregar producto</Text>
						</View>

						<TextInput style={styles.input} value={productName} onChangeText={setProductName} placeholder="Nombre del producto" />
						<TextInput style={styles.input} value={productPrice} onChangeText={setProductPrice} placeholder="Precio del producto" keyboardType="numeric" />
						<TextInput style={styles.input} value={productPhoto} onChangeText={setProductPhoto} placeholder="URL de la foto" />

						<View style={styles.pickerRow}>
							<View style={styles.pickerContainer}>
								<Picker selectedValue={productGender} onValueChange={(itemValue, itemIndex) => setProductGender(itemValue)}>
									<Picker.Item label="Hombre" value="hombre" />
									<Picker.Item label="Mujer" value="mujer" />
								</Picker>
							</View>
						</View>

						<View style={styles.pickerRow}>
							<View style={styles.pickerContainer}>
								<Picker selectedValue={productCategory} onValueChange={(itemValue, itemIndex) => setProductCategory(itemValue)}>
									{categoriesList.map((category) => (
										<Picker.Item label={category} value={category} key={category} />
									))}
								</Picker>
							</View>

							<TouchableOpacity style={styles.newButton}>
								<Text style={styles.newButtonText}>+</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.pickerRow}>
							<View style={styles.pickerContainer}>
								<Picker selectedValue={productSubcategory} onValueChange={(itemValue, itemIndex) => setProductSubcategory(itemValue)}>
									{subcategoriesList.map((subcategory) => (
										<Picker.Item label={subcategory} value={subcategory} key={subcategory} />
									))}
								</Picker>
							</View>

							<TouchableOpacity style={styles.newButton}>
								<Text style={styles.newButtonText}>+</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.buttonsContainer}>
							<TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setShowAddModal(false)}>
								<Text>Cerrar</Text>
							</TouchableOpacity>

							<TouchableOpacity style={[styles.button, styles.addButton]} onPress={addProductHandler}>
								<Text>Agregar</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	)
}

export default ProductsModalAdd

const styles = StyleSheet.create({
	background: {
		position: 'absolute',
		backgroundColor: '#ddd',
		height: '100%',
		width: '100%',
		opacity: 0.8,
	},
	centerView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		gap: 10,
		padding: 10,
		width: "80%",
		elevation: 8,
		shadowColor: "#444",
		backgroundColor: "white",
		alignItems: "center",
		borderRadius: 14,
		borderWidth: 1,
		borderColor: "#eee",
	},
	buttonsContainer: {
		gap: 20,
		flexDirection: "row",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		flex: 1,
		padding: 10,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#eee",
	},
	addButton: {
		borderColor: "#ccded1",
		backgroundColor: "#ddf0e5",
	},
	cancelButton: {
		borderColor: "#e0cecc",
		backgroundColor: "#f5e4e4",
	},
	modalTitleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
		marginBottom: 6,
		padding: 10,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		backgroundColor: "#f5f3f0",
	},
	modalTitleText: {
		fontSize: 12,
		fontWeight: "bold",
		color: COLORS.accents,
		textTransform: "uppercase",
	},
	input: {
		borderWidth: 1,
		paddingHorizontal: 16,
		paddingVertical: 6,
		width: "100%",
		borderRadius: 8,
		borderColor: "#bbb",
		fontSize: 16,
	},
	pickerRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		justifyContent: "space-between",
		width: "100%",
	},
	pickerContainer: {
		height: 40,
		flexGrow: 1,
		justifyContent: "center",
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#bbb",
	},
	newButton: {
		borderWidth: 1,
		borderColor: "#72db9e",
		height: 40,
		width: 40,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	newButtonText: {
		fontSize: 20,
		color: "#72db9e",
	},
})
