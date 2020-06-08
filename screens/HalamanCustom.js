//To Make HTTP API call in React Native using Axios https://aboutreact.com
import React, { useState, useEffect } from 'react';
//import React in our code.
import { StyleSheet, View, Text, FlatList, Button, Alert, TextInput, Image } from 'react-native';
//import all the components we are going to use.
import axios from 'axios';
// import { Button } from 'native-base';

const HalamanCustom = () => {

    const initialState = {
        nama: '',
        email: '',
        password: ''
    }

    const [user, setUser] = useState(initialState)

    // const [nama, setNama] = useState('initialState');
    // const [email, setEmail] = useState('initialState');
    // const [password, setPassword] = useState('initialState')

    const [data, setdata] = useState([]);


    useEffect(() => {
        // axios
        //     .get('http://192.168.8.104/restapi/index.php/api/pengguna/users')
        //     .then(function (response) {
        //         // handle success
        //         // alert(JSON.stringify(response.data));
        //         setdata(response.data.data)
        //         // console.log(JSON.stringify(response.data))
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         alert(error.message);
        //     })
        //     .finally(function () {
        //         // always executed
        //         alert('Finally called');
        //         // alert(data);
        //         console.log(data);

        //     });
        getDataUsingSimpleGetCall();
    }, [])

    const beli = (id_user) => {
        Alert.alert(id_user)
    }

    const getDataUsingSimpleGetCall = () => {
        axios
            .get('http://192.168.8.104/restapi/index.php/api/pengguna/users')
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
                setdata(response.data.data)
                // console.log(JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            .finally(function () {
                // always executed
                alert('Finally called');
                // alert(data);
                console.log(data);

            });
    };

    const getUserById = (id_user) => {
        axios
            .get('http://192.168.8.104/restapi/index.php/api/pengguna/users', {
                params: {
                    id: id_user
                }
            })
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
                setdata(response.data.data)
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

                getDataUsingSimpleGetCall();
            });
    };

    const postNewUser = (nama_user, email_user, password_user) => {
        axios
            .post('http://192.168.8.104/restapi/index.php/api/pengguna/users', {
                nama: nama_user,
                email: email_user,
                password: password_user
            })
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
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
                setUser(initialState);

                getDataUsingSimpleGetCall();
            });
    };

    const getDataUsingAsyncAwaitGetCall = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts/'
            );
            console.log(JSON.stringify(response.data));
            setdata({ data: response.data.data })
            // alert(JSON.stringify(response.data));
        } catch (error) {
            // handle error
            alert(error.message);
        }
    };

    const postDataUsingSimplePostCall = () => {
        axios
            .post('http://192.168.8.104/restapi/index.php/api/pengguna/users', {
                nama: 'api',
                email: 'api@gmail.com',
                password: 'userapi',
            })
            .then(function (response) {
                // handle success
                alert(JSON.stringify(response.data));
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            });
    };

    const multipleRequestsInSingleCall = () => {
        axios
            .all([
                axios
                    .get('https://jsonplaceholder.typicode.com/posts/1')
                    .then(function (response) {
                        // handle success
                        alert('Post 1 : ' + JSON.stringify(response.data));
                    }),
                axios
                    .get('https://jsonplaceholder.typicode.com/posts/2')
                    .then(function (response) {
                        // handle success
                        alert('Post 2 : ' + JSON.stringify(response.data));
                    }),
            ])
            .then(
                axios.spread(function (acct, perms) {
                    // Both requests are now complete
                    alert('Both requests are now complete');
                })
            );
    };

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => setUser({ ...user, nama: text })}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => setUser({ ...user, email: text })}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => setUser({ ...user, password: text })}
            />
            <Text>{'user input: ' + user.nama + user.email + user.password}</Text>
            <Button style={{ backgroundColor: 'green' }} title='Save' onPress={() => postNewUser(user.nama, user.email, user.password)} />
            <View style={{ flex: 1, padding: 24 }}>
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.nama}, {item.email}, {item.password}, {item.id}</Text>
                            <Button color='blue' title='Submit' onPress={() => getUserById(item.id)} />
                            <Image
                                style={{width: 100, height: 100}}
                                source={{
                                    uri: `http://192.168.8.104/restapi/asset/img/${item.img}`,
                                }}
                            />
                        </View>
                    )}
                />
            </View>
        </View>
        //     <View style={styles.MainContainer}>
        //         <Text style={{ fontSize: 30, textAlign: 'center' }}>
        //             Example of Axios Networking in React Native
        //   </Text>
        //         {/*Running GET Request*/}
        //         <TouchableOpacity
        //             style={styles.button}
        //             onPress={getDataUsingSimpleGetCall}>
        //             <Text>Simple Get Call</Text>
        //         </TouchableOpacity>

        //         <FlatList
        //             data={data}
        //             keyExtractor={item => item.id}
        //             renderItem={({ item }) => (
        //                 <Text>{item.nama}, {item.email}</Text>
        //             )}
        //         />

        //         <TouchableOpacity
        //             style={styles.button}
        //             onPress={getDataUsingAsyncAwaitGetCall}>
        //             <Text>Get Data Using Async Await GET</Text>
        //         </TouchableOpacity>

        //         <TouchableOpacity
        //             style={styles.button}
        //             onPress={postDataUsingSimplePostCall}>
        //             <Text>Post Data Using POST</Text>
        //         </TouchableOpacity>

        //         <TouchableOpacity
        //             style={styles.button}
        //             onPress={multipleRequestsInSingleCall}>
        //             <Text>Multiple Concurrent Requests In Single Call</Text>
        //         </TouchableOpacity>

        //         <Text style={{ textAlign: 'center', marginTop: 18 }}>
        //             www.aboutreact.com
        //   </Text>
        //     </View>
    );
};

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        padding: 16,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: '100%',
        marginTop: 16,
    },
});

export default HalamanCustom;