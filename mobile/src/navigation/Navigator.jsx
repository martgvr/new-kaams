import { NavigationContainer } from "@react-navigation/native"
import { Platform, StyleSheet, View, StatusBar } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Orders from "../screens/Orders"
import Config from "../screens/Config"
import Banners from "../screens/Banners"
import Header from "../components/Header"
import Products from "../screens/Products"

const Tab = createBottomTabNavigator()

const Navigator = () => {
    const screenOption = {
        headerStyle: { backgroundColor: '#333' }, 
        headerTintColor: 'white', 
        tabBarLabelStyle: styles.tabLabelStyle, 
        tabBarStyle: styles.tabStyle,
        animation: "slide_from_right",
        header: () => <Header />,
    }

    return (
        <View style={styles.container}>
            <NavigationContainer>   
                <Tab.Navigator initialRouteName="Products" screenOptions={screenOption}>
                    <Tab.Screen name="Productos" component={Products} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />) }} />
                    <Tab.Screen name="Ordenes" component={Orders} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="cart" color={color} size={size} />) }} />
                    <Tab.Screen name="Banners" component={Banners} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="image" color={color} size={size} />) }} />
                    <Tab.Screen name="Config" component={Config} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="cog" color={color} size={size} />) }} />
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
    },
    tabLabelStyle: {
        fontSize: 14,
    },
})