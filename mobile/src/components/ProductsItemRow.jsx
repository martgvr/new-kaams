import { COLORS } from "../global/theme"
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native"

const ProductsItemRow = ({ item, setShowModal, setModalProductName }) => {
	const openOptions = () => {
		setShowModal(true)
		setModalProductName(item.name)
	}

	return (
		<TouchableOpacity style={styles.container} onLongPress={openOptions}>
			<Image source={{ uri: item.image }} resizeMode="contain" style={styles.image} />

			<View style={styles.view}>
				<Text style={styles.text}>{item.name}</Text>
				<Text style={styles.text}>{item.stock}</Text>
				<Text style={styles.text}>$ {item.price}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default ProductsItemRow

const styles = StyleSheet.create({
	container: {
        backgroundColor: COLORS.primary,
        borderColor: '#eee',
		padding: 10,
        width: '100%',
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	text: {
		color: "black",
	},
	view: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	image: {
		width: 35,
		height: 35,
		borderRadius: 20
	},
})
