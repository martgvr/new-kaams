import { useEffect, useState } from "react"
import { getData } from "../service/firebase.service"
import { StyleSheet, Text, View } from "react-native"
import ProductsFilterBar from "../navigation/ProductsFilterBar"

const Products = () => {
	const [gender, setGender] = useState('')
	const [category, setCategory] = useState('')
	const [productData, setProductData] = useState([])

	useEffect(() => {
		getData("products").then((res) =>{
			setProductData(res)
		})
	}, [])

	useEffect(() => {
		const mappedCategories = []

		productData.map(item => {
			const categoryExistence = mappedCategories.find(category => category == item.subcategory)
			categoryExistence === undefined && mappedCategories.push(item.subcategory)
		})

		setCategory(mappedCategories)
	}, [productData])
	

	return (
		<View style={styles.container}>
			<ProductsFilterBar gender={gender} setGender={setGender} category={category} setCategory={setCategory} />
			<Text>Products</Text>
		</View>
	)
}

export default Products

const styles = StyleSheet.create({
	container: {},
})
