import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3 } from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import axios from "axios";

const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <Text style={styles.judulExplore}>Home</Text>
        </View>
    )
}


const mainScreen = ({ navigation }) => {



    return (
        <View style={styles.container}>

            <StatusBar barStyle='dark-content' backgroundColor='#FFBF57' />


            <ScrollView style={styles.scrollviewContent}>


                <SearchBar />

                <View style={styles.bannerTop}>
                    <Image source={require('./topBanner.png')}
                        style={styles.pictureTopBanner} />

                    <Text style={styles.textSehatBersamaKami}>Tetap sehat bersama kami!</Text>

                    <View style={styles.thumbnailBannerColumn}>
                        {/* 1 */}
                        <View style={styles.thumbnailBannerRow}>
                            <Image source={require('./gym.png')} style={styles.thumbnailBanner} />
                            <Image source={require('./gejalaCovid.png')} style={styles.thumbnailBanner} />
                        </View>

                        {/* 2 */}
                        <View style={styles.thumbnailBannerRow}>
                            <Image source={require('./cegahCovid.png')} style={styles.thumbnailBanner} />
                            <Image source={require('./junkfood.png')} style={styles.thumbnailBanner} />
                        </View>

                        {/* 3 */}
                        <View style={styles.thumbnailBannerRow}>
                            <Image source={require('./salad.png')} style={styles.thumbnailBanner} />
                        </View>
                    </View>
                </View>


            </ScrollView>



            <View style={styles.viewBottomNav}>
                <View style={styles.viewTombolBottomNav}>
                    <TouchableOpacity>
                        <Icon type="MaterialIcons" name="explore" style={{ color: '#FFBF57', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#FFBF57', fontSize: 15, alignSelf: 'center' }}>Explore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Shopping')}>
                        <Icon type="MaterialIcons" name="store" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Belanja</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon type="MaterialIcons" name="shopping-basket" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Keranjang</Text>
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
    pictureTopBanner: {
        width: 370,
        height: 250,
        resizeMode: 'contain'
    },
    thumbnailBanner: {
        width: 180,
        height: 240,
        resizeMode: 'contain',
    },
    thumbnailBannerColumn: {
        flexDirection: 'column',
        alignSelf: 'center',
        width: '100%',
    },
    thumbnailBannerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    textSehatBersamaKami: {
        textAlign: 'left',
        left: -80,
        marginTop: 10,
        marginBottom: 5,
        fontFamily: 'nunito-bold',
        fontSize: 20,
    }
})

export default mainScreen
