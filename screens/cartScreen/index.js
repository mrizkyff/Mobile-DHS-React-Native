import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3 } from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import axios from "axios";


const MyCard = (props) => {
    return (
        <View style={styles.mainCardContainer}>
            {/* <View style={styles.cardImageContainer}>
                        </View> */}
            <Image source={require('./menu_2.png')} style={styles.cardImageContainer} />
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', width: 280, paddingHorizontal: 7 }}>
                <View style={{ justifyContent: 'space-around', width: 190 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#454545' }}>{props.nama}</Text>
                    <Text style={{ color: '#454545' }}>{props.kategori}</Text>
                </View>
                <View style={{ justifyContent: 'space-around', width: 70 }}>
                    <Text style={{ textAlign: 'right', color: '#454545' }}>{'Rp ' + props.harga}</Text>
                    <Text style={{ textAlign: 'right', color: '#454545' }}>{props.quantity}</Text>
                </View>
            </View>
        </View>
    )
}

const cartScreen = ({ navigation }) => {



    return (
        <View style={styles.container}>

            <StatusBar barStyle='dark-content' backgroundColor='#FFBF57' />

            <View style={styles.container2}>
                <ScrollView style={styles.scrollviewContent}>
                    <Text style={styles.judul}>My Order</Text>

                    <MyCard
                        nama='Miago miayam goreng tinggi kalori'
                        kategori='Weight Gain'
                        harga='50000'
                        quantity='12'
                    />

                </ScrollView>
                <View>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: '#ffbf57',
                            marginBottom: 5,
                        }}>
                        TOTAL
        </Text>
                    <View
                        style={{
                            width: 360,
                            height: 70,
                            backgroundColor: 'white',
                            marginBottom: 10,
                            justifyContent: 'space-around',
                            paddingHorizontal: 10,
                        }}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 15 }}>{'Total Belanja (tax inc)'}</Text>
                            <Text style={{ fontSize: 15, color: '#ffbf57' }}>
                                {'Rp 550.000'}
                            </Text>
                        </View>

                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 15 }}>{'Biaya Antar'}</Text>
                            <Text style={{ fontSize: 15, color: '#ffbf57' }}>
                                {'Rp 20.000'}
                            </Text>
                        </View>

                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 15 }}>{'TOTAL'}</Text>
                            <Text style={{ fontSize: 15, color: '#ffbf57' }}>
                                {'Rp 570.000'}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: 40,
                            backgroundColor: '#ffbf57',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: '700',
                                marginBottom: 5,
                            }}>
                            Checkout
          </Text>
                    </TouchableOpacity>
                </View>
            </View>


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
        backgroundColor: '#EEEEEE'
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
    container2: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        padding: 8,
        justifyContent: 'space-between',
    },
    judul: {
        margin: 0,
        fontSize: 40,
        marginTop: 15,
        marginBottom: 10
    },
    mainCardContainer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    cardImageContainer: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        backgroundColor: 'gray',
    },
    cardTextTitleContainer: {
        backgroundColor: 'green',
        width: 100,
        height: 10,
    },
    itemName: {
        fontSize: 20,
        fontWeight: '800',
        color: '#454545',
    },
    topTextContainer: {
        marginLeft: 10,
        backgroundColor: 'yellow',
        marginBottom: 20,
    }
})

export default cartScreen
