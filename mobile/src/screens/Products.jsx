import { useEffect, useState } from "react"
import { getData } from "../service/firebase.service"
import { FlatList, StyleSheet, Text, View } from "react-native"

import ProductsItemRow from "../components/ProductsItemRow"
import ProductsFilterBar from "../components/ProductsFilterBar"

const Products = () => {
	const [gender, setGender] = useState("")
	const [productData, setProductData] = useState([])
	const [categoriesList, setCategoriesList] = useState([])
	const [categorySelected, setCategorySelected] = useState("")

	useEffect(() => {
		getData("products").then((res) => setProductData(res))
	}, [])

	useEffect(() => {
		const mappedCategories = []

		productData.map((item) => {
			const categoryExistence = mappedCategories.find((category) => category == item.subcategory)
			categoryExistence === undefined && mappedCategories.push(item.subcategory)
		})

		setCategoriesList(mappedCategories)
	}, [productData])

	return (
		<View style={styles.container}>
			<ProductsFilterBar gender={gender} setGender={setGender} categorySelected={categorySelected} setCategorySelected={setCategorySelected} categoriesList={categoriesList} />
			<FlatList
				data={productData}
				keyExtractor={(product) => product.name}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <ProductsItemRow item={item} />}
			/>
		</View>
	)
}

export default Products

const styles = StyleSheet.create({
	container: {},
})
