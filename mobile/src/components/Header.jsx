import { COLORS } from "../global/theme"
import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View, Pressable } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = () => {
    const route = useRoute();

	return (
		<View style={styles.container}>
            <Pressable style={styles.pressable}>
                <MaterialCommunityIcons name="text-box-search-outline" color={COLORS.accents} size={24} />
                <Text style={styles.iconText}>Buscar</Text>
            </Pressable>

			<Text style={styles.headerText}>{route.name}</Text>

            <Pressable style={styles.pressable}>
                <MaterialCommunityIcons name="plus-thick" color={COLORS.accents} size={24} />
                <Text style={styles.iconText}>Agregar</Text>
            </Pressable>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		zIndex: 1,
		fontSize: 25,
		paddingVertical: 6,
        paddingHorizontal: 16,
		alignItems: "center",
        flexDirection: 'row',
		justifyContent: "space-between",
		backgroundColor: COLORS.primary,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 24,
	},
    headerText: {
		fontSize: 18,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: '#444',
	},
    pressable: {
        alignItems: 'center',
    },
    iconText: {
        textTransform: 'uppercase',
        fontSize: 9,
        fontWeight: 'bold',
        color: '#777',
    },
})
