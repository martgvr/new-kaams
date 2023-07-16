import { Picker } from "@react-native-picker/picker"
import { StyleSheet, Text, View } from "react-native"
import { COLORS } from "../global/theme"

const ProductsFilterBar = ({ gender, setGender, categorySelected, setCategorySelected, categoriesList }) => {
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
					<Picker selectedValue={categorySelected} onValueChange={(itemValue, itemIndex) => setCategorySelected(itemValue)}>
						<Picker.Item label="Todos" value="all" />
						{categoriesList !== "" && categoriesList.map((item) => <Picker.Item label={item} value={item} key={item} />)}
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
		backgroundColor: COLORS.tertiary,
		justifyContent: "space-between",
        gap: 16,
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	filterCell: {
		gap: 10,
        flex: 1,
		alignItems: "center",
		flexDirection: "row",
	},
	pickerContainer: {
		height: 30,
        flexGrow: 1,
		backgroundColor: "#eee",
		justifyContent: "center",
        borderWidth: 1,
		borderRadius: 10,
        borderColor: COLORS.accents,
	},
})
