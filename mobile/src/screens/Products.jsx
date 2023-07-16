import { useEffect } from "react"
import { getData } from "../service/firebase.service"
import { StyleSheet, Text, View } from "react-native"

const Products = () => {
	useEffect(() => {
		// getData("products").then((res) => console.log(res))
	}, [])

	return (
		<View style={styles.container}>
			<Text>Products</Text>
		</View>
	)
}

export default Products

const styles = StyleSheet.create({
	container: {},
})
