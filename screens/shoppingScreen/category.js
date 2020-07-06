import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image, Alert } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3 } from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import axios from "axios";


const CardMenu = (props) => {
    return (
        <View>
            <View
                style={{
                    width: 360,
                    height: 113,
                    borderRadius: 5,
                    borderColor: '#c4c4c4',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 5,
                }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{
                            uri: `http://192.168.8.101/restApi-dietHouseSemarang/asset/img/food/${props.foto_item}`,
                        }}
                        style={{
                            width: 111,
                            height: 111,
                            resizeMode: 'contain',
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                        }}
                    />
                    <View
                        style={{
                            marginLeft: 5,
                            height: 108,
                            justifyContent: 'space-around',
                            flexWrap: 'wrap',
                            width: '65%',
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{ fontWeight: '600', color: '#454545', fontSize: 16, flex: 1, flexWrap: 'wrap' }}>
                                {props.nama_item}
                            </Text>
                        </View>
                        <Text style={{ fontWeight: '500', color: '#979797', fontSize: 14 }}>
                            {props.kalori + ' Kalori'}
                        </Text>
                        <Text style={{ fontWeight: '400', color: '#979797', fontSize: 14 }}>
                            {props.kategori}
                        </Text>
                        <Text style={{ fontWeight: '500', color: '#979797', fontSize: 15 }}>
                            {'Rp ' + props.harga}
                        </Text>
                        <Image
                            source={{
                                uri: `http://192.168.8.101/restApi-dietHouseSemarang/asset/img/other/${props.rating}`
                            }}
                            style={{ width: 55, height: 12 }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}


const category = ({ route,navigation }) => {


    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getAllMenuGetCall();
    }, [])

    const getAllMenuGetCall = () => {
        axios
            .get('http://192.168.8.101/restApi-dietHouseSemarang/api/menu')
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
                setMenu(response.data.data)
                // console.log(JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            .finally(function () {
                // always executed
                // alert('Finally called');
                // alert(data);
                // alert(JSON.stringify(menu))
                console.log(menu);
            });
    };

    return (
        <View style={styles.container}>

            <StatusBar barStyle='light-content' backgroundColor='#FFBF57' />


            <ScrollView style={styles.scrollviewContent}>


                {/* awal kategori menu */}
                <View style={styles.containerMenu}>
                    <Text style={styles.judulMenu}>Semua menu kami</Text>
                    <View style={styles.viewMenuAllMenu} >
                        <FlatList
                            data={menu}
                            keyExtractor={({ id_produk }, index) => id_produk}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Details', {
                                        itemId: 86,
                                        otherParams: 'halaolaho',
                                        data_detail: item,
                                    });
                                }}>
                                    <CardMenu
                                        foto_item={item.gambar}
                                        nama_item={item.nmbrg}
                                        kalori='250'
                                        harga={item.harga}
                                        kategori={item.kategori}
                                        rating='fiveStar.png'
                                    />
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
                {/* akhir kategori menu */}

            </ScrollView>

            



            {/* bagian bottom navigator */}
            <View style={styles.viewBottomNav}>
                <View style={styles.viewTombolBottomNav}>
                    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                        <Icon type="MaterialIcons" name="explore" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Explore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Shopping')}>
                        <Icon type="MaterialIcons" name="store" style={{ color: '#FFBF57', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#FFBF57', fontSize: 15, alignSelf: 'center' }}>Belanja</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Icon type="MaterialIcons" name="shopping-basket" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Keranjang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <Icon type="MaterialIcons" name="account-circle" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Profil</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* akhir bagian bottom navigator */}

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
        backgroundColor: '#FFBF57',
    },
    searchCard: {
        top: 4,
        width: '95%',
        alignSelf: 'center',
    },
    judulExplore: {
        marginLeft: 8,
        marginTop: 30,
        color: 'white',
        fontSize: 50,
    },
    bannerTop: {
        width: '100%',
        top: 5,
        alignSelf: 'center',
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
    containerMenu: {
        width: '100%',
        flexDirection: 'column',
        top: 10,
    },
    viewMenuIcon: {
        width: '100%',
        height: 221,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 5,
    },
    imageIcon: {
        width: 85,
        height: 85,
        resizeMode: 'contain',
    },
    viewMenuAllMenu: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
    },
    judulMenu: {
        fontSize: 17,
        marginLeft: 7,
        fontFamily: 'nunito-bold',
        marginBottom: 5,
        color: '#696969',
    }
})

export default category
