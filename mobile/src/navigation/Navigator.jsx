import { NavigationContainer } from "@react-navigation/native"
import { Platform, StyleSheet, View, StatusBar } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Orders from "../screens/Orders"
import Config from "../screens/Config"
import Banners from "../screens/Banners"
import Products from "../screens/Products"

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Products" component={Products} />
                    <Stack.Screen name="Banners" component={Banners} />
                    <Stack.Screen name="Orders" component={Orders} />
                    <Stack.Screen name="Config" component={Config} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
       	flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})