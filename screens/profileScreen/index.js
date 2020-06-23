import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image, ImageBackground, TextInput } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3 } from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import axios from "axios";
import { connect } from "react-redux";


const ProfileScreen = ({ sessionIdUser,navigation }) => {

    const initialState = {
        fname: '',
        lname: '',
        username: '',
        password: '',
        email: '',
        telp: '',
        alamat: '',
        id_user: '',
        level: '',
        status: '',
        tgl_registrasi: '',
    }

    const [myProfile, setMyProfile] = useState([]);


    useEffect(() => {
        getProfileCall();
    }, [])

    const postUpdateUser = (updateUser) => {
        axios
            .put('http://192.168.8.101/restApi-dietHouseSemarang/api/profile/profile', {
                email: updateUser.email,
                username: updateUser.username,
                telp: updateUser.telp,
                alamat: updateUser.alamat,
                password: updateUser.password,
                id_user: updateUser.id_user,
            })
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
                alert('Data berhasil di update!');
                // setdata(response.data.data)
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
                // console.log(data);
                // getDataUsingSimpleGetCall();
            });
    };

    const getProfileCall = () => {
        axios
            .get('http://192.168.8.101/restApi-dietHouseSemarang/api/profile/profile', {
                params: {
                    id: '12'
                }
            })
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
                setMyProfile(response.data.data)
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
                console.log(myProfile);

            });
    };


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
                        <View>
                            <Image
                                source={{
                                    uri: `http://192.168.8.101/restApi-dietHouseSemarang/asset/img/user/${myProfile.foto}`,
                                }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: 'white',
                                    borderRadius: 50,
                                    marginTop: -50,
                                    resizeMode: 'center'
                                }}></Image>
                            <View style={{ backgroundColor: 'white', width: 28, height: 28, position: 'absolute', justifyContent: 'center', alignItems: 'center', borderRadius: 14, right: 0, bottom: 0 }}>
                                <Icon type="FontAwesome" name="camera" style={{ color: 'gray', fontSize: 15 }} />
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={styles.cardProfileTop}>
                        <View style={styles.dataContainer}>
                            <Text>{myProfile.f_name + ' ' + myProfile.l_name}</Text>
                            <Text style={styles.profileLabel}>Full Name</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <TextInput value={myProfile.email} onChangeText={(text) => setMyProfile({ ...myProfile, email: text })}></TextInput>
                            <Text style={styles.profileLabel}>Email</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <TextInput value={myProfile.username} onChangeText={(text) => setMyProfile({ ...myProfile, username: text })}></TextInput>
                            <Text style={styles.profileLabel}>Username</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <TextInput value={myProfile.telp} onChangeText={(text) => setMyProfile({ ...myProfile, telp: text })}></TextInput>
                            <Text style={styles.profileLabel}>Telephone</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <TextInput value={myProfile.alamat} onChangeText={(text) => setMyProfile({ ...myProfile, alamat: text })}></TextInput>
                            <Text style={styles.profileLabel}>Alamat</Text>
                        </View>
                    </View>

                    <View style={styles.cardProfileMiddle}>
                        <View style={styles.dataContainer}>
                            <Text>{myProfile.tgl_registrasi}</Text>
                            <Text style={styles.profileLabel}>Registered on</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            {/* belum dinamis ok */}
                            {/* eh sekarang sudah dinamis, tapi kurang 1 kondisinya */}
                            {myProfile.status == '1' ? <Text style={styles.profileText}>Active</Text> : <Text style={styles.profileText}>Deactive</Text>}
                            <Text style={styles.profileLabel}>User Status</Text>
                        </View>
                    </View>

                    <View style={styles.cardProfileBottom}>
                        <View style={styles.dataContainer}>
                            <TextInput value={myProfile.password} secureTextEntry={true} onChangeText={(text) => setMyProfile({ ...myProfile, password: text })} />
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
                            }}
                            onPress={() => postUpdateUser(myProfile)}>
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }} >Change</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#696969',
                            width: 340,
                            height: 40,
                            marginTop: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            marginBottom: 10,
                        }}>
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>LOGOUT</Text>
                    </TouchableOpacity>
                    <Text>{'email = ' + myProfile.email}</Text>
                    <Text>{'username = ' + myProfile.username}</Text>
                    <Text>{'telp = ' + myProfile.telp}</Text>
                    <Text>{'alamat = ' + myProfile.alamat}</Text>
                    <Text>{'password = ' + myProfile.password}</Text>
                    <Text>{'id = ' + myProfile.id_user}</Text>
                    <Text>{'session id user = ' + sessionIdUser}</Text>
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
        height: 240,
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
        height: 100,
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
        height: 55,
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

const mapStateToProps = state => ({
    sessionIdUser : state.id_user
})


export default connect(mapStateToProps)(ProfileScreen)
