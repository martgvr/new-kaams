import { useEffect } from "react"
import { getData } from "../service/firebase.service"
import { StyleSheet, Text, View } from "react-native"

import Header from "../components/Header"

const Banners = () => {
	useEffect(() => {
		// getData("market").then((res) => console.log(res))
		// getData("season").then((res) => console.log(res))
	}, [])

	return (
		<View style={styles.container}>
			<Header />
			<Text>Banners</Text>
		</View>
	)
}

export default Banners

const styles = StyleSheet.create({
	container: {

    },
})
