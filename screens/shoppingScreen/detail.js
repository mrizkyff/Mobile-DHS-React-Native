import React, { useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, } from 'react-native'
import axios from "axios";
import { connect } from "react-redux";

const detail = ({ route, navigation, sessionIdUser }) => {
    // const { itemId } = route.params;
    // const { otherParams } = route.params;
    const { data_detail } = route.params;
    const [jumlahBeli, setJumlahBeli] = React.useState(0)

    useEffect(() => {
    }, [])

    const getBeli = () => {
        axios
            .get('http://192.168.8.102/restApi-dietHouseSemarang/api/Menu/beli', {
                params: {
                    id_user: sessionIdUser,
                    id_produk: data_detail.id_produk,
                    quantity: jumlahBeli,
                }
            })
            .then(function (response) {
                // handle success
                alert(JSON.stringify(response.data));
                // setMyOrder(response.data.data)
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
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle='dark-content' />
            <View
                style={{
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Image
                    source={{ uri: `http://192.168.8.102/restApi-dietHouseSemarang/asset/img/food/${data_detail.gambar}`, }}
                    style={{
                        width: '100%',
                        height: 350,
                        resizeMode: 'stretch',
                    }}
                />

                <View style={{ width: '95%', marginTop: 5 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#454545' }}>
                        {data_detail.nmbrg}
                    </Text>
                    <Text style={{ fontSize: 17, color: 'red', fontWeight: 'bold' }}>
                        {'Rp ' + data_detail.harga}
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#979797',
                            textAlign: 'justify',
                            marginTop: 5,
                        }}>
                        {data_detail.deskripsi}
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: '#979797',
                            marginTop: 5,
                        }}>
                        {data_detail.kalori}
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#979797' }}>
                        {'Purpose : '}
                        {data_detail.kategori == '1'
                            ? 'Weight Loss' : data_detail.kategori == '2'
                                ? 'Weight Gain' : data_detail.kategori == '3'
                                    ? 'Muscle Building' : data_detail.kategori == '4'
                                        ? 'Pregnancy' : data_detail.kategori == '5'
                                            ? 'Stroke' : data_detail.kategori == '6'
                                                ? 'Diabetes' : data_detail.kategori == '7'
                                                    ? 'Cholesterol' : data_detail.kategori == '8'
                                                        ? 'Hipertensi' : 'NaN'
                        }
                    </Text>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '700',
                                color: '#454545',
                                marginTop: 5,
                            }}>
                            {data_detail.kdbrg}
                        </Text>
                        <Text>{'(stok ' + data_detail.stok + ')'}</Text>
                    </View>
                    <Image
                        source={require('./fiveStar.png')}
                        style={{ width: 90, height: 20 }}
                    />
                </View>

                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 10,
                    }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#ffbf57',
                            width: 30,
                            height: 30,
                            borderBottomLeftRadius: 5,
                            borderTopLeftRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => setJumlahBeli(jumlahBeli - 1)}>
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: '900' }}>
                            -
            </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            width: 100,
                            height: 30,
                            textAlign: 'center',
                            marginTop: 5,
                            fontSize: 15,
                        }}>
                        {jumlahBeli}
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#ffbf57',
                            width: 30,
                            height: 30,
                            borderBottomRightRadius: 5,
                            borderTopRightRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => setJumlahBeli(jumlahBeli + 1)}>
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: '900' }}>
                            +
            </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                    <TouchableOpacity
                        style={{
                            width: '95%',
                            height: 40,
                            backgroundColor: '#696969',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => getBeli()}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = state => ({
    sessionIdUser: state.id_user
})

export default connect(mapStateToProps)(detail)

const styles = StyleSheet.create({})
