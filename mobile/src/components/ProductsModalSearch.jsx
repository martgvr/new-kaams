import { StyleSheet, Text, View, Modal } from "react-native"

const ProductsModalSearch = ({ setShowSearchModal }) => {
	return (
		<Modal onRequestClose={() => setShowSearchModal(false)} transparent={true}>
			<View style={styles.centerView}>
				<View style={styles.container}>
					<Text>Buscar</Text>
				</View>
			</View>
		</Modal>
	)
}

export default ProductsModalSearch

const styles = StyleSheet.create({
	centerView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
    container: {
        gap: 10,
        padding: 20,
        width: '70%',
		elevation: 8,
        shadowColor: "#444",
		backgroundColor: "white",
        alignItems: 'center',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#eee',
	},
})
