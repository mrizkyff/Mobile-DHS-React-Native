import React, { useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, ActivityIndicator } from 'react-native'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Require cycle:']); // Metro warning, Specific for Sentry

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000);  
    },[])

    return (
        <View style={{ backgroundColor: '#696969', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar hidden />
            {/* <Image source={{ uri: 'http://192.168.8.104/restApi-dietHouseSemarang/asset/img/logo1.png' }}
                style={{ height: 125, width: 125, marginTop: -20, borderColor: 'white', borderWidth: 3 }} /> */}
            {/* <Image source={require('../assets/images/logo1.png')} />; */}
            <Image source={ require('./logo_dhs.png')} style={{height:125, width: 125, marginTop: -20, resizeMode: 'contain'}}/>
            <Text style={{ color: 'white', fontSize: 18, marginTop: 10 }}>Versi 0.9.5 Beta</Text>
            <View style={{ bottom: -100 }}>
                <ActivityIndicator size="large" color="#ffff" />
                <Text style={{ color: 'white', fontSize: 15 }}>Memuat</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 18, bottom: -220, fontWeight: '500' }}>DHS by Potato Team 2020</Text>

        </View >
    )
}

export default SplashScreen

const styles = StyleSheet.create({})
