import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

// import screen
import {SplashScreen, RegisterScreen, MainScreen, LoginScreen} from './screens'

// import router
import Router from './src/router';

export default function App() {
  return (
    // <View style={{flex:1}}>
    //   <SplashScreen />
    //   {/* <LoginScreen /> */}
    // </View>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
