import { COLORS } from "../global/theme"
import { Pressable, StyleSheet, Text, View } from "react-native"

const ProductsItemRow = ({ item }) => {
	const openOptions = () => {
		console.log('hola');
	}

	return (
		<Pressable style={styles.container} onLongPress={openOptions}>
			<Text style={styles.text}>{item.name}</Text>
		</Pressable>
	)
}

export default ProductsItemRow

const styles = StyleSheet.create({
	container: {
        backgroundColor: COLORS.primary,
        borderColor: '#888',
		padding: 10,
        width: '100%',
		borderBottomWidth: 1,
        alignSelf: 'center'
	},
	text: {
		color: "black",
	},
})
