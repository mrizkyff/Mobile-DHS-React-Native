import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3 } from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import axios from "axios";




const cartScreen = ({ navigation }) => {



    return (
        <View style={styles.container}>

            <StatusBar barStyle='dark-content' backgroundColor='#FFBF57' />


            <ScrollView style={styles.scrollviewContent}>


                

            </ScrollView>



            <View style={styles.viewBottomNav}>
                <View style={styles.viewTombolBottomNav}>
                    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                        <Icon type="MaterialIcons" name="explore" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Explore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Shopping')}>
                        <Icon type="MaterialIcons" name="store" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Belanja</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Icon type="MaterialIcons" name="shopping-basket" style={{ color: '#FFBF57', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#FFBF57', fontSize: 15, alignSelf: 'center' }}>Keranjang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <Icon type="MaterialIcons" name="account-circle" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Profil</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EEEEEE'
    },
    searchBar: {
        width: '100%',
        top: 0,
        height: 150,
        // backgroundColor: '#aaaaaa',
    },
    searchCard: {
        top: 4,
        width: '95%',
        alignSelf: 'center',
    },
    judulExplore: {
        marginLeft: 8,
        marginTop: 35,
        color: '#43464b',
        fontSize: 50,
    },
    bannerTop: {
        width: '97%',
        top: -65,
        alignSelf: 'center',
        alignItems: 'center',
    },
    scrollviewContent: {
        width: '100%',
        // h,eight: '100%',
    },
    viewBottomNav: {
        width: '105%',
        backgroundColor: 'white',
        height: 50,
    },
    viewTombolBottomNav: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 3,
    },
})

export default cartScreen
