import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native"
import { COLORS } from "../global/theme"

const ProductsModal = ({ setShowModal, modalProductName }) => {
	return (
		<Modal onRequestClose={() => setShowModal(false)} transparent={true}>
			<View style={styles.centerView}>
				<View style={styles.container}>
                    <View style={styles.productDataContainer}>
                        <Text style={styles.productDataTitle}>Producto:</Text>
                        <Text style={styles.productDataName}>{modalProductName}</Text>
                    </View>

					<TouchableOpacity style={styles.button}>
                        <Text>Borrar producto</Text>
                    </TouchableOpacity>

					<TouchableOpacity style={styles.button}>
                        <Text>Modificar producto</Text>
                    </TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => setShowModal(false)}>
                        <Text>Cerrar</Text>
                    </TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
}

export default ProductsModal

const styles = StyleSheet.create({
	centerView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
        gap: 10,
        padding: 20,
        width: '70%',
		elevation: 8,
        shadowColor: "#444",
		backgroundColor: "white",
        alignItems: 'center',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#eee',
	},
    button: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#eee',
        width: '100%'
    },
    productDataContainer:{ 
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
    },
    productDataTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.accents,
        textTransform: 'uppercase',
    },
    productDataName: {
        maxWidth: '100%',
    },
})
