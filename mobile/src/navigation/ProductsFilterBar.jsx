import { Picker } from "@react-native-picker/picker"
import { StyleSheet, Text, View } from "react-native"

const ProductsFilterBar = ({ gender, setGender, category, setCategory }) => {
	return (
		<View style={styles.container}>

			<View style={styles.filterCell}>
				<Text style={styles.text}>Genero:</Text>

				<View style={styles.pickerContainer}>
					<Picker selectedValue={gender} onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
						<Picker.Item label="Todos" value="all" />
						<Picker.Item label="Hombre" value="hombre" />
						<Picker.Item label="Mujer" value="mujer" />
					</Picker>
				</View>
			</View>

			<View style={styles.filterCell}>
				<Text style={styles.text}>Categoría:</Text>

				<View style={styles.pickerContainer}>
					<Picker selectedValue={category} onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
						<Picker.Item label="Todos" value="all" />
                        {   category !== '' &&
                            category.map(item => <Picker.Item label={item} value={item} key={item} />)
                        }
					</Picker>
				</View>
			</View>
		</View>
	)
}

export default ProductsFilterBar

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: "#888",
		justifyContent: "space-between",
		paddingHorizontal: 10,
        paddingVertical: 10,
	},
	text: {
        color: "white",
	},
    filterCell: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    pickerContainer: {
		width: 110,
        height: 30,
		borderRadius: 10,
		backgroundColor: "#eee",
        justifyContent: 'center'
	},
})
