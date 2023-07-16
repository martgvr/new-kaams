import { StyleSheet, Text, View } from 'react-native'

const ProductsItemRow = ({ item }) => {
   return (
       <View style={styles.container}>
           <Text>{item.name}</Text>
       </View>
   )
}

export default ProductsItemRow

const styles = StyleSheet.create({
   container: {
       
   }
})