import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image } from 'react-native'
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


const ShoppingScreen = ({ navigation }) => {


    const [banner, setbanner] = useState([]);

    useEffect(() => {
        getDataUsingSimpleGetCall();
    }, [])

    const getDataUsingSimpleGetCall = () => {
        axios
            .get('http://192.168.8.101/restApi-dietHouseSemarang/api/banner/banner')
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
                                    uri: `http://192.168.8.101/restApi-dietHouseSemarang/asset/img/banner/${item.picture}`,
                                }}
                            />
                        )}
                    />
                </View>
                {/* akhir komponen banner */}

                {/* awal komponen menu icon */}
                <View style={styles.containerMenuIcon}>
                    <Text style={styles.judulMenu}>Kategori untuk anda</Text>
                    <View style={styles.viewMenuIcon}>
                        <View style={{ flex: 1, flexDirection: 'column', marginTop: 20 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => alert('pregnancy')}>
                                    <Image source={require('./pregnancy.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('diabetes')}>
                                    <Image source={require('./diabetes.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('muscle_building')}>
                                    <Image source={require('./muscle_building.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('hipertensi')}>
                                    <Image source={require('./hipertensi.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => alert('kolesterol')}>
                                    <Image source={require('./kolesterol.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('stroke')}>
                                    <Image source={require('./stroke.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('weight_gain')}>
                                    <Image source={require('./weight_gain.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('weight_loss')}>
                                    <Image source={require('./weight_loss.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                {/* akhir komponen menu icon */}

                {/* awal all menu */}
                {/* <View>
                    <View style={styles.viewMenuAllMenu}>
                    </View>
                </View> */}
                {/* akhir all menu */}

            </ScrollView>



            {/* bagian bottom navigator */}
            <View style={styles.viewBottomNav}>
                <View style={styles.viewTombolBottomNav}>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                        <Icon type="MaterialIcons" name="explore" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Explore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon type="MaterialIcons" name="store" style={{ color: '#FFBF57', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#FFBF57', fontSize: 15, alignSelf: 'center' }}>Belanja</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon type="MaterialIcons" name="shopping-basket" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Keranjang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
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
    containerMenuIcon: {
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
    },
    imageIcon: {
        width: 85,
        height: 85,
        resizeMode: 'contain',
    },
    viewMenuAllMenu: {
        width: '100%',
        height: 221,
        backgroundColor: 'white',
        top: -105,
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
