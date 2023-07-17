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

	const [genderSelected, setGenderSelected] = useState('all')
	const [categorySelected, setCategorySelected] = useState('all')

	const [modalProductName, setModalProductName] = useState('')
	
	const [showModal, setShowModal] = useState(false)
	const [showAddModal, setShowAddModal] = useState(false)
	const [showSearchModal, setShowSearchModal] = useState(false)

	useEffect(() => {
		getData("products").then((res) => setProductData(res))
	}, [])

	useEffect(() => {
		// console.log('Genero seleccionado:', genderSelected);
	}, [genderSelected])
	
	useEffect(() => {
		// console.log('Categoría seleccionada:', categorySelected);
	}, [categorySelected])

	useEffect(() => {
		const mappedCategories = []

		productData.map((item) => {
			const categoryExistence = mappedCategories.find((category) => category == item.subcategory)
			categoryExistence === undefined && mappedCategories.push(item.subcategory)
		})

		setCategoriesList(mappedCategories)
	}, [productData])

	const searchProductHandler = () => {
		console.log('Buscar item');
		setShowSearchModal(true)
	}
	
	const addProductHandler = () => {
		console.log('Agregar producto');
		setShowAddModal(true)
	}

	return (
		<View style={styles.container}>
			<Header leftAction={searchProductHandler} leftText={"Buscar"} leftIcon={"text-box-search-outline"} rightIcon={"plus-thick"} rightText={"Agregar"} rightAction={addProductHandler} />
			<ProductsFilterBar genderSelected={genderSelected} setGenderSelected={setGenderSelected} categorySelected={categorySelected} setCategorySelected={setCategorySelected} categoriesList={categoriesList} />
			<View style={styles.productsList}>
				<FlatList
					data={productData}
					keyExtractor={(product) => product.name}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => <ProductsItemRow item={item} setShowModal={setShowModal} setModalProductName={setModalProductName} />}
				/>
				{
					showModal && <ProductsModal setShowModal={setShowModal} modalProductName={modalProductName} />
				}
				{
					showAddModal && <ProductsModalAdd setShowAddModal={setShowAddModal} />
				}
				{
					showSearchModal && <ProductsModalSearch setShowSearchModal={setShowSearchModal} />
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
