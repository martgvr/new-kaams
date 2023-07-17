import { COLORS } from "../global/theme"
import { Picker } from "@react-native-picker/picker"
import { StyleSheet, Text, View } from "react-native"

const ProductsFilterBar = ({ genderSelected, setGenderSelected, categorySelected, setCategorySelected, categoriesList }) => {
	return (
		<View style={styles.container}>
			<View style={styles.filterCell}>
				<Text style={styles.text}>Genero:</Text>

				<View style={styles.pickerContainer}>
					<Picker selectedValue={genderSelected} onValueChange={(itemValue, itemIndex) => setGenderSelected(itemValue)}>
						<Picker.Item label="Todos" value="all" />
						<Picker.Item label="Hombre" value="hombre" />
						<Picker.Item label="Mujer" value="mujer" />
					</Picker>
				</View>
			</View>

			<View style={styles.filterCell}>
				<Text style={styles.text}>Categoría:</Text>

				<View style={styles.pickerContainer}>
					<Picker selectedValue={categorySelected} onValueChange={(itemValue, itemIndex) => setCategorySelected(itemValue)}>
						<Picker.Item label="Todos" value="all" />
						{categoriesList !== "" && categoriesList.map((item) => <Picker.Item label={item} value={item} key={item} />)}
					</Picker>
				</View>
			</View>
		</View>
	)
}

export default ProductsFilterBar

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: '#f5f3f0',
		justifyContent: "space-between",
        gap: 16,
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderColor: '#eee',
		borderBottomWidth: 1,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 24,
	},
	text:{ 
		color: 'black'
	},
	filterCell: {
		gap: 10,
        flex: 1,
		alignItems: "center",
		flexDirection: "row",
	},
	pickerContainer: {
		height: 30,
        flexGrow: 1,
		backgroundColor: "white",
		justifyContent: "center",
        borderWidth: 1,
		borderRadius: 10,
        borderColor: COLORS.accents,
	},
})
