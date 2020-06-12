import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';



// import screen
import { SplashScreen, RegisterScreen, MainScreen, LoginScreen } from './screens'

// import router
import Router from './src/router';

// fungsi untuk fetch font
const fetchFonts = () => {
  return Font.loadAsync({
    'space-mono-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-black': require('./assets/fonts/Nunito-Black.ttf'),
    'nunito-regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
    'droid-sans-regular': require('./assets/fonts/DroidSans.ttf'),
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),

  });
};

export default function App() {

  const [dataLoaded, setDataLoaded] = React.useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)} />
    )
  }

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
