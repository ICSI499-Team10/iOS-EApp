import React, { useEffect, useState } from 'react'; 
import {StyleSheet, View, Text, Button, ActivityIndicator, FlatList} from 'react-native';

const mainfunction = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            /*
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            console.log(json);
            setData(json.movies);
            */

            const response = await fetch('http://eapp-test.arcc.albany.edu/publish/Incident', {
                method: 'GET',
                headers: {
                    "AuthToken": "br22&@uJbpFyH2UayJwG*rfvFKjye7m!",
                    "RecentDate": null
                }
            });
            const json = await response.json();
            console.log(json);
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <Text>{item.title}, {item.timeOfEvent}</Text>
                //<Text>{item.title}, {item.releaseYear}</Text>
            )}
            />
            )}
        </View>
    );
};

/*
const mainfunction = () => {
    return fetch('http://eapp-test.arcc.albany.edu/publish/Incident', {
        method: 'GET',
        headers: {
            AuthToken: 'br22&@uJbpFyH2UayJwG*rfvFKjye7m!',
            RecentDate: 'null'
        }
    })
    .then((response) => response.json())
    .then((jsondata) => {
        console.log(jsondata);
        return jsondata;
    })
    .catch((error) => {
        console.error(error);
    });
};

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})
*/

export {mainfunction}