import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image,ImageBackground, TextInput } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3 } from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import axios from "axios";




const ProfileScreen = ({ navigation }) => {



    return (
        <View style={styles.container}>

            <StatusBar barStyle='dark-content' backgroundColor='#FFBF57' />


            <ScrollView style={styles.scrollviewContent}>
                <View style={styles.container}>
                    <ImageBackground
                        style={{
                            width: '100%',
                            height: 220,
                            backgroundColor: '#ffa500',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        source={require('./background_img.jpeg')}>
                        <Image
                            source={require('./profile_example.png')}
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: 'white',
                                borderRadius: 50,
                                marginTop: -50,
                            }}></Image>
                    </ImageBackground>

                    <View style={styles.cardProfileTop}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.profileText}>
                                Muhamad Rizky Fajar Febrian
              </Text>
                            <Text style={styles.profileLabel}>Full Name</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <Text style={styles.profileText}>muhamadrizkyff@gmail.com</Text>
                            <Text style={styles.profileLabel}>Email</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <Text style={styles.profileText}>mrizkyff</Text>
                            <Text style={styles.profileLabel}>Username</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <Text style={styles.profileText}>+6281228474747</Text>
                            <Text style={styles.profileLabel}>Telephone</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <Text style={styles.profileText}>
                                Jl. Puspanjolo Tengah 4 No 9
              </Text>
                            <Text style={styles.profileLabel}>Alamat</Text>
                        </View>
                    </View>

                    <View style={styles.cardProfileMiddle}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.profileText}>2020-05-06 05:48:22</Text>
                            <Text style={styles.profileLabel}>Registered on</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <Text style={styles.profileText}>Active</Text>
                            <Text style={styles.profileLabel}>User Status</Text>
                        </View>
                    </View>

                    <View style={styles.cardProfileBottom}>
                        <View style={styles.dataContainer}>
                            <TextInput value="jangkrik123" secureTextEntry={true} />
                            <Text style={styles.profileLabel}>Password</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#ffbf57',
                                width: 90,
                                height: 30,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>
                                Change
              </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#696969',
                            width: 340,
                            height: 40,
                            marginTop: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            marginBottom: 30,
                        }}>
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>
                            LOGOUT
            </Text>
                    </TouchableOpacity>
                </View>



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
                        <Icon type="MaterialIcons" name="shopping-basket" style={{ color: '#BEBEBE', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#BEBEBE', fontSize: 15, alignSelf: 'center' }}>Keranjang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <Icon type="MaterialIcons" name="account-circle" style={{ color: '#FFBF57', fontSize: 28, alignSelf: 'center' }} />
                        <Text style={{ color: '#FFBF57', fontSize: 15, alignSelf: 'center' }}>Profil</Text>
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
    cardProfileTop: {
        width: '90%',
        height: 270,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: -70,
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    profileText: {
        fontSize: 14,
    },
    profileLabel: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    dataContainer: {},
    cardProfileMiddle: {
        width: '90%',
        height: 120,
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    cardProfileBottom: {
        width: '90%',
        height: 60,
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default ProfileScreen
