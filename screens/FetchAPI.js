import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View , TouchableOpacity, StyleSheet} from 'react-native';

export default FetchAPI = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        console.log(data)
        return () => {
            console.log(data)
            
        }
    }, [data]);

    const getContent = () => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                />
            )}
            {/* <TouchableOpacity
                style={styles.button}
                onPress={getContent()}>
                <Text>Pull</Text>
            </TouchableOpacity> */}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    contentContainer: {
      paddingTop: 15,
    },
    optionIconContainer: {
      marginRight: 12,
    },
    option: {
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: 0,
      borderColor: '#ededed',
    },
    lastOption: {
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
      fontSize: 15,
      alignSelf: 'flex-start',
      marginTop: 1,
    },
  });