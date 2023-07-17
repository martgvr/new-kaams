import { COLORS } from "../global/theme"
import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({ leftIcon, leftText, leftAction, rightIcon, rightText, rightAction }) => {
    const route = useRoute()

	return (
		<View style={styles.container}>
            <TouchableOpacity style={styles.pressable} onPress={leftAction}>
                <MaterialCommunityIcons name={leftIcon} color={COLORS.accents} size={24} />
                <Text style={styles.iconText}>{leftText}</Text>
            </TouchableOpacity>

			<Text style={styles.headerText}>{route.name}</Text>

            <TouchableOpacity style={styles.pressable} onPress={rightAction}>
                <MaterialCommunityIcons name={rightIcon} color={COLORS.accents} size={24} />
                <Text style={styles.iconText}>{rightText}</Text>
            </TouchableOpacity>
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
