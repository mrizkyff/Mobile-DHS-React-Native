import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, RegisterScreen, LoginScreen, MainScreen} from "../../screens";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen } options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default Router;