import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image, Alert } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3 } from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import axios from "axios";

const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <Text style={styles.judulExplore}>Explore</Text>
            <Card style={styles.searchCard}>
                <CardItem >
                    <Body>
                        <Item regular style={{ height: 25, borderColor: 'white' }}>
                            <Input placeholder='Cari menu kesukaan anda ...' placeholderTextColor='#D6D6D6' style={{ color: '#696969', fontSize: 17 }} />
                            <TouchableOpacity>
                                <Icon type="FontAwesome" name="search" style={{ color: '#D6D6D6', fontSize: 20 }} />
                            </TouchableOpacity>
                        </Item>
                    </Body>
                </CardItem>
            </Card>
        </View>
    )
}

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
                            uri: `http://192.168.8.102/restApi-dietHouseSemarang/asset/img/food/${props.foto_item}`,
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
                            {/* {props.kategori} */}
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
                        <Text style={{ fontWeight: '500', color: '#979797', fontSize: 15 }}>
                            {'Rp ' + props.harga}
                        </Text>
                        <Image
                            source={{
                                uri: `http://192.168.8.102/restApi-dietHouseSemarang/asset/img/other/${props.rating}`
                            }}
                            style={{ width: 55, height: 12 }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}


const ShoppingScreen = ({ navigation }) => {


    const [banner, setbanner] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getAllMenuGetCall();
        getDataUsingSimpleGetCall();
    }, [])

    const getDataUsingSimpleGetCall = () => {
        axios
            .get('http://192.168.8.102/restApi-dietHouseSemarang/api/banner/banner')
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
                setbanner(response.data.data)
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
                console.log(banner);
            });
    };
    const getAllMenuGetCall = () => {
        axios
            .get('http://192.168.8.102/restApi-dietHouseSemarang/api/menu')
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
    const getSomeMenuGetCall = (cat) => {
        axios
            .get('http://192.168.8.102/restApi-dietHouseSemarang/api/menu/category', {
                params: {
                    category: cat,
                }
            })
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data.data));
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


                {/* awal searchbar */}
                <SearchBar />
                {/* akhir searchbar */}

                {/* awal komponen banner */}
                <View style={styles.bannerTop}>
                    <Text style={styles.judulMenu}>Apa yang baru?</Text>
                    <FlatList
                        horizontal
                        data={banner}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Image
                                style={{ width: 326, height: 113, resizeMode: 'contain', marginRight: -6 }}
                                source={{
                                    uri: `http://192.168.8.102/restApi-dietHouseSemarang/asset/img/banner/${item.picture}`,
                                }}
                            />
                        )}
                    />
                </View>
                {/* akhir komponen banner */}

                {/* awal komponen menu icon */}
                <View style={styles.containerMenu}>
                    <Text style={styles.judulMenu}>Kategori untuk anda</Text>
                    <View style={styles.viewMenuIcon}>
                        <View style={{ flex: 1, flexDirection: 'column', marginTop: 20 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => getSomeMenuGetCall('4')}>
                                    <Image source={require('./pregnancy.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => getSomeMenuGetCall('6')}>
                                    <Image source={require('./diabetes.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => getSomeMenuGetCall('3')}>
                                    <Image source={require('./muscle_building.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => getSomeMenuGetCall('8')}>
                                    <Image source={require('./hipertensi.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => getSomeMenuGetCall('7')}>
                                    <Image source={require('./kolesterol.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => getSomeMenuGetCall('5')}>
                                    <Image source={require('./stroke.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => getSomeMenuGetCall('2')}>
                                    <Image source={require('./weight_gain.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => getSomeMenuGetCall('1')}>
                                    <Image source={require('./weight_loss.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                {/* akhir komponen menu icon */}

                {/* awal all menu */}
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
                                        kalori={item.kalori}
                                        harga={item.harga}
                                        kategori={item.kategori}
                                        rating='fiveStar.png'
                                    />
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
                {/* akhir all menu */}

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

export default ShoppingScreen
