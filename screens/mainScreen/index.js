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


const mainScreen = () => {


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
                }}>Apa yang baru?</Text>
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
            <Text>Bottom Nav</Text>
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
        width: '95%',
        top: -160,
        alignSelf: 'center',
    },
    scrollviewContent: {
        width: '100%',
        // height: '100%',
    }
})

export default mainScreen
