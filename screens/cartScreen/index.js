import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3 } from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import axios from "axios";

import { connect } from 'react-redux';


const MyCard = (props) => {
    return (
        <View style={styles.mainCardContainer}>
            {/* <View style={styles.cardImageContainer}>
                        </View> */}
            <Image source={{ uri: `http://192.168.8.101/restApi-dietHouseSemarang/asset/img/food/${props.gambar}`, }} style={styles.cardImageContainer} />
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', width: 280, paddingHorizontal: 7 }}>
                <View style={{ justifyContent: 'space-around', width: 190 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#454545' }}>{props.nama}</Text>
                    <Text style={{ color: '#454545' }}>
                        {props.kategori == '1'
                            ? 'Weight Loss' : props.kategori == '2'
                                ? 'Weight Gain' : props.kategori == '3'
                                    ? 'Muscle Building' : props.kategori == '4'
                                        ? 'Pregnancy' : props.kategori == '5'
                                            ? 'Stroke' : props.kategori == '6'
                                                ? 'Diabetes' : props.kategori == '7'
                                                    ? 'Cholesterol' : props.kategori == '8'
                                                        ? 'Hipertensi' : 'NaN'
                        }
                    </Text>
                    <Text style={{ color: '#454545', fontSize: 10, fontStyle: 'italic' }}>{props.tgl_transaksi}</Text>
                </View>
                <View style={{ justifyContent: 'space-around', width: 70 }}>
                    <Text style={{ textAlign: 'right', color: '#454545' }}>{'Rp ' + props.harga}</Text>
                    <Text style={{ textAlign: 'right', color: '#454545' }}>{props.quantity + ' pcs'}</Text>
                    <Text style={{ textAlign: 'right', color: '#454545' }}>{'Rp ' + props.quantity * props.harga}</Text>
                </View>
            </View>
        </View>
    )
}

const cartScreen = ({ sessionIdUser, navigation }) => {

    const [myOrder, setMyOrder] = useState([]);

    let total = 0;
    let shipping = 0;
    let grandTotal = 0;
    {
        myOrder != undefined ?
            myOrder.forEach(item => {
                total = total + (item.harga * item.jmlJual)
                console.log(total);
            })
            :
            total = 0
    }

    {
        total == 0
            ?
            shipping = 0
            :
            shipping = 20000
    }

    useEffect(() => {
        getMyOrderCall(sessionIdUser);
    }, [])

    const getMyOrderCall = (sessionIdUser) => {
        axios
            .get('http://192.168.8.101/restApi-dietHouseSemarang/api/transaksi/transaction', {
                params: {
                    id: sessionIdUser,
                }
            })
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
                setMyOrder(response.data.data)
                // console.log(JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                alert(JSON.stringify(error.message));
            })
            .finally(function () {
                // always executed
                // alert('Finally called');
                // alert(data);
                // alert(JSON.stringify(menu))
                console.log(myOrder);

            });
    };




    return (
        <View style={styles.container}>

            <StatusBar barStyle='dark-content' backgroundColor='#FFBF57' />

            <View style={styles.container2}>
                <ScrollView style={styles.scrollviewContent}>
                    <Text style={styles.judul}>My Order</Text>
                    <Text>{'id session : ' + sessionIdUser}</Text>
                    <FlatList
                        data={myOrder}
                        keyExtractor={({ id_transaksi }, index) => id_transaksi}
                        renderItem={({ item }) => (
                            <MyCard
                                nama={item.nmbrg}
                                kategori={item.kategori}
                                harga={item.harga}
                                quantity={item.jmlJual}
                                gambar={item.gambar}
                                tgl_transaksi={item.tgl_transaksi}
                            />
                        )}
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
                        TOTAL</Text>
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
                                {'Rp ' + total}
                            </Text>
                        </View>

                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 15 }}>{'Biaya Antar'}</Text>
                            <Text style={{ fontSize: 15, color: '#ffbf57' }}>
                                {'Rp ' + shipping}
                            </Text>
                        </View>

                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 15 }}>{'TOTAL'}</Text>
                            <Text style={{ fontSize: 15, color: '#ffbf57' }}>
                                {'Rp ' + (total + shipping)}
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
        marginBottom: 3
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

const mapStateToProps = state => ({
    sessionIdUser: state.id_user
})

export default connect(mapStateToProps)(cartScreen)
