import { StyleSheet, Text, View } from "react-native"
import Header from "../components/Header"

const Orders = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Text>Orders</Text>
		</View>
	)
}

export default Orders

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
})
