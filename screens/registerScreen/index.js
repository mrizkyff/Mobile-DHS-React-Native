import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Image, Alert } from 'react-native'
import { Input, Item, Icon, Button, Label } from "native-base"
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from "axios";

// KOMPONEN
// logo
const Logo = () => {
    return (
        <View style={styles.viewLogo}>
            <Image source={require('./logo_dhs.png')} style={styles.pictLogo} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginLeft: 10, fontSize: 25, color: 'white' }}>Diet House Semarang</Text>
                <Text style={{ marginLeft: 10, fontSize: 20, color: 'white' }}>Artisan Food</Text>
            </View>
        </View>
    )
}

// form
const FormRegister = () => {

    // buat initial state
    const initialState = {
        fname: '',
        lname: '',
        username: '',
        password: '',
        email: '',
        telp: '',
        alamat: '',
    }

    // buat state
    const [newUser, setnewUser] = useState(initialState)


    // fungsi post untuk ke REST API
    const postNewUser = (newUser) => {
        axios
            .post('http://192.168.8.104/restApi-dietHouseSemarang/api/registrasi', {
                firstname: newUser.fname,
                lastname: newUser.lname,
                username: newUser.username,
                password: newUser.password,
                email: newUser.email,
                telp: newUser.telp,
                alamat: newUser.alamat,
            })
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
                alert('Registrasi berhasil, silahkan login!');
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
                setnewUser(initialState);

                // getDataUsingSimpleGetCall();
            });
    };


    return (
        <View style={styles.FormRegister}>
            {/* <Text>Form Login</Text> */}
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Nama Depan</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} onChangeText={(text) => setnewUser({ ...newUser, fname: text })} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Nama Belakang</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} onChangeText={(text) => setnewUser({ ...newUser, lname: text })} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Username</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} onChangeText={(text) => setnewUser({ ...newUser, username: text })} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Password</Label>
                <Input secureTextEntry={true} style={{ color: '#eeeeee', fontSize: 20 }} onChangeText={(text) => setnewUser({ ...newUser, password: text })} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Email</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} onChangeText={(text) => setnewUser({ ...newUser, email: text })} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Telp.</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} onChangeText={(text) => setnewUser({ ...newUser, telp: text })} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Alamat</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} onChangeText={(text) => setnewUser({ ...newUser, alamat: text })} />
            </Item>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#FFBF57', padding: 15, borderRadius: 5 }} onPress={() => postNewUser(newUser)}>
                <Text style={{ color: '#EEEEEE', fontSize: 20, fontWeight: '600', alignSelf: 'center', textAlign: 'center' }}>DAFTAR</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
                <Text style={{ fontSize: 20, color: '#EEEEEE' }}>Sudah punya akun?</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, color: '#FFBF57' }}> Login</Text>
                </TouchableOpacity>
            </View>
            <Text>{'input user:' + newUser.fname + newUser.lname + newUser.username + newUser.password + newUser.email + newUser.telp + newUser.alamat}</Text>

        </View >
    )
}

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <FormRegister />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#696969',
        flex: 1,

    },
    pictLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    viewLogo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    FormRegister: {
        width: '90%',
        alignSelf: 'center',
    }
})
export default RegisterScreen
