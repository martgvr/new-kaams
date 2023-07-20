import { COLORS } from "../global/theme"
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native"

const ProductsModalSearch = ({ setShowSearchModal }) => {
	return (
		<View style={styles.background}>
			<Modal onRequestClose={() => setShowSearchModal(false)} transparent={true}>
				<View style={styles.centerView}>
					<View style={styles.container}>
						<View style={styles.modalTitleContainer}>
							<Text style={styles.modalTitleText}>Buscar producto</Text>
						</View>

						<Text>Buscar</Text>
						<View style={styles.buttonsContainer}>
							<TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setShowSearchModal(false)}>
								<Text>Cerrar</Text>
							</TouchableOpacity>

							<TouchableOpacity style={[styles.button, styles.addButton]} onPress={() => setShowSearchModal(false)}>
								<Text>Buscar</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	)
}

export default ProductsModalSearch

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
	addButton: {
		borderColor: '#ccded1',
		backgroundColor: '#ddf0e5',
	},
	cancelButton: {
		borderColor: '#e0cecc',
		backgroundColor: '#f5e4e4',
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
