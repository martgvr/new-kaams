import { StyleSheet, Text, View } from "react-native"
import Header from "../components/Header"

const Config = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Text>Config</Text>
		</View>
	)
}

export default Config

const styles = StyleSheet.create({
	container: {},
})
