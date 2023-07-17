import { useEffect, useState } from "react"
import { getData } from "../service/firebase.service"
import { FlatList, StyleSheet, View } from "react-native"

import ProductsModal from "../components/ProductsModal"
import ProductsItemRow from "../components/ProductsItemRow"
import ProductsFilterBar from "../components/ProductsFilterBar"

const Products = () => {
	const [productData, setProductData] = useState([])
	const [categoriesList, setCategoriesList] = useState([])

	const [genderSelected, setGenderSelected] = useState('all')
	const [categorySelected, setCategorySelected] = useState('all')

	const [showModal, setShowModal] = useState(false)
	const [modalProductName, setModalProductName] = useState('')

	useEffect(() => {
		getData("products").then((res) => setProductData(res))
	}, [])

	useEffect(() => {
		console.log('Genero seleccionado:', genderSelected);
	}, [genderSelected])
	
	useEffect(() => {
		console.log('Categoría seleccionada:', categorySelected);
	}, [categorySelected])

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
			<ProductsFilterBar genderSelected={genderSelected} setGenderSelected={setGenderSelected} categorySelected={categorySelected} setCategorySelected={setCategorySelected} categoriesList={categoriesList} />
			<View style={styles.productsList}>
				<FlatList
					data={productData}
					keyExtractor={(product) => product.name}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => <ProductsItemRow item={item} setShowModal={setShowModal} setModalProductName={setModalProductName} />}
				/>
				{
					showModal == true && <ProductsModal setShowModal={setShowModal} modalProductName={modalProductName} />
				}
			</View>
		</View>
	)
}

export default Products

const styles = StyleSheet.create({
	productsList: {
		backgroundColor: 'white',
		height: '100%'
	},
	container: {
		width: '100%',
		height: '100%',
		flex: 1
	},
})
