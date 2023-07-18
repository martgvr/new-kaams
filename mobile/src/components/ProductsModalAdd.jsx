import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native"
import { COLORS } from "../global/theme"

const ProductsModalAdd = ({ setShowAddModal }) => {
	return (
		<Modal onRequestClose={() => setShowAddModal(false)} transparent={true}>
			<View style={styles.centerView}>
				<View style={styles.container}>
					<View style={styles.modalTitleContainer}>
						<Text style={styles.modalTitleText}>Agregar producto</Text>
					</View>

					<Text>ProductsModalAdd</Text>

					<View style={styles.buttonsContainer}>
						<TouchableOpacity style={styles.button} onPress={() => setShowAddModal(false)}>
							<Text>Cerrar</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button} onPress={() => setShowAddModal(false)}>
							<Text>Agregar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default ProductsModalAdd

const styles = StyleSheet.create({
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
		flexDirection: 'row',
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
    modalTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#f5f3f0',
    },
    modalTitleText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.accents,
        textTransform: 'uppercase',
    },
})
