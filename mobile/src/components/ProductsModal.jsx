import { COLORS } from "../global/theme"
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native"
import { deleteData } from "../service/firebase.service"

const ProductsModal = ({ setShowModal, modalProductData, updateDBHandler }) => {
    const deleteProductHandler = async () => {
        setShowModal(false)
        const dbRequest = deleteData("products", modalProductData.uid)
        dbRequest && updateDBHandler()
    }

	return (
        <View style={styles.background}>
            <Modal onRequestClose={() => setShowModal(false)} transparent={true}>
                <View style={styles.centerView}>
                    <View style={styles.container}>
                        <View style={styles.productDataContainer}>
                            <Text style={styles.productDataTitle}>Producto:</Text>
                            <Text style={styles.productDataName}>{modalProductData.name}</Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={deleteProductHandler}>
                            <Text>Borrar producto</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text>Modificar producto</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setShowModal(false)}>
                            <Text>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
	)
}

export default ProductsModal

const styles = StyleSheet.create({
    background: {
		position: 'absolute',
		backgroundColor: '#ddd',
		height: '100%',
		width: '100%',
		opacity: 0.8,
	},
	centerView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
        gap: 10,
        padding: 10,
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
    cancelButton: {
		borderColor: '#e0cecc',
		backgroundColor: '#f5e4e4',
	},
    productDataContainer:{ 
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#f5f3f0',
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
