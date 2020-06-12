import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3 } from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import axios from "axios";

const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <Text style={styles.judulExplore}>Stay Health!</Text>
        </View>
    )
}


const mainScreen = ({navigation}) => {


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
                    <Text style={{
                        color: '#696969', fontSize: 17, marginLeft: 5, marginTop: 165, fontWeight
                            : '600'
                    }}>HEADLINE OR ADVERTISEMENT</Text>
                    <FlatList
                        horizontal
                        data={banner}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <Card>
                                    <CardItem>
                                        <Body>
                                            {/* <Text>{item.captions}</Text> */}
                                            <Image
                                                style={{ width: 299, height: 130, resizeMode: 'cover' }}
                                                source={{
                                                    uri: `http://192.168.8.101/restApi-dietHouseSemarang/asset/img/banner/${item.picture}`,
                                                }}
                                            />
                                            <Text style={{ color: '#696969', marginTop: 2 }}>{item.captions}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </View>
                        )}
                    />
                </View>
                {/* akhir komponen banner */}


            </ScrollView>



            {/* bagian bottom navigator */}
            <View style={styles.viewBottomNav}>
                <View style={styles.viewTombolBottomNav}>
                    <TouchableOpacity>
                        <Icon type="MaterialIcons" name="explore" style={{ color: '#FFBF57', fontSize: 28, alignSelf: 'center' }}/>
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
        backgroundColor: '#aaaaaa',
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
        width: '95%',
        top: -160,
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
    }
})

export default mainScreen
