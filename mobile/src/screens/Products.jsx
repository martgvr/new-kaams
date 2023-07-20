import { useEffect, useState } from "react"
import { getData } from "../service/firebase.service"
import { FlatList, StyleSheet, View } from "react-native"

import Header from "../components/Header"

import ProductsModal from "../components/ProductsModal"
import ProductsItemRow from "../components/ProductsItemRow"
import ProductsModalAdd from "../components/ProductsModalAdd"
import ProductsFilterBar from "../components/ProductsFilterBar"
import ProductsModalSearch from "../components/ProductsModalSearch"

const Products = () => {
	const [productData, setProductData] = useState([])
	const [categoriesList, setCategoriesList] = useState([])
	const [subcategoriesList, setSubcategoriesList] = useState([])

	const [genderSelected, setGenderSelected] = useState('all')
	const [categorySelected, setCategorySelected] = useState('all')

	const [modalProductData, setModalProductData] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [showAddModal, setShowAddModal] = useState(false)
	const [showSearchModal, setShowSearchModal] = useState(false)

	useEffect(() => {
		updateDBHandler()
	}, [])

	useEffect(() => {
		// console.log('Genero seleccionado:', genderSelected);
	}, [genderSelected])
	
	useEffect(() => {
		// console.log('Categoría seleccionada:', categorySelected);
	}, [categorySelected])

	useEffect(() => {
		const mappedCategories = []
		const mappedSubcategories = []

		productData.map((item) => {
			const categoryExistence = mappedCategories.find((category) => category == item.category.charAt(0).toUpperCase() + item.category.slice(1))
			categoryExistence === undefined && mappedCategories.push(item.category.charAt(0).toUpperCase() + item.category.slice(1))
		})

		productData.map((item) => {
			const subcategoryExistence = mappedSubcategories.find((category) => category == item.subcategory.charAt(0).toUpperCase() + item.subcategory.slice(1))
			subcategoryExistence === undefined && mappedSubcategories.push(item.subcategory.charAt(0).toUpperCase() + item.subcategory.slice(1))
		})

		setCategoriesList(mappedCategories)
		setSubcategoriesList(mappedSubcategories)
	}, [productData])

	const addProductHandler = () => setShowAddModal(true)
	const searchProductHandler = () => setShowSearchModal(true)
	const updateDBHandler = () => getData("products").then((res) => setProductData(res))

	return (
		<View style={styles.container}>
			<Header leftAction={searchProductHandler} leftText={"Buscar"} leftIcon={"text-box-search-outline"} rightIcon={"plus-thick"} rightText={"Agregar"} rightAction={addProductHandler} />
			<ProductsFilterBar genderSelected={genderSelected} setGenderSelected={setGenderSelected} categorySelected={categorySelected} setCategorySelected={setCategorySelected} categoriesList={categoriesList} />
			<View style={styles.productsList}>
				<FlatList
					data={productData}
					keyExtractor={(product) => product.name}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => <ProductsItemRow item={item} setShowModal={setShowModal} setModalProductData={setModalProductData} />}
				/>
				{ showAddModal && <ProductsModalAdd setShowAddModal={setShowAddModal} categoriesList={categoriesList} subcategoriesList={subcategoriesList} updateDBHandler={updateDBHandler} /> }
				{ showSearchModal && <ProductsModalSearch setShowSearchModal={setShowSearchModal} /> }
				{ showModal && <ProductsModal setShowModal={setShowModal} modalProductData={modalProductData} updateDBHandler={updateDBHandler} /> }
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
