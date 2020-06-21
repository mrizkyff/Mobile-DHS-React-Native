import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, RegisterScreen, LoginScreen, MainScreen, ShoppingScreen, CartScreen,ProfileScreen} from "../../screens";
import detail from '../../screens/shoppingScreen/detail'

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen } options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Shopping" component={ShoppingScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Details" component={detail} options={{headerShown: true}}/>
            <Stack.Screen name="Cart" component={CartScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default Router;