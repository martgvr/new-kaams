import { NavigationContainer } from "@react-navigation/native"
import { Platform, StyleSheet, View, StatusBar } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Orders from "../screens/Orders"
import Config from "../screens/Config"
import Banners from "../screens/Banners"
import Products from "../screens/Products"

const Tab = createBottomTabNavigator()

const Navigator = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>   
                <Tab.Navigator initialRouteName="Products">
                    <Tab.Screen name="Productos" component={Products} />
                    <Tab.Screen name="Ordenes" component={Orders} />
                    <Tab.Screen name="Banners" component={Banners} />
                    <Tab.Screen name="Config" component={Config} />
                </Tab.Navigator>
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