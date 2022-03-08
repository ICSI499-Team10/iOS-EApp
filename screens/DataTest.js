import React, { useEffect, useState } from 'react'; 
import {StyleSheet, View, Text, Button, ActivityIndicator, FlatList} from 'react-native';

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

/*
const mainfunction = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://eapp-test.arcc.albany.edu/publish/Incident', {
                method: 'GET',
                headers: {
                    AuthToken: 'br22&@uJbpFyH2UayJwG*rfvFKjye7m!',
                    RecentDate: 'null'
                }
            })
            const jsondata = await response.json();
            setData(jsonData);
            console.log(jsondata);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

        useEffect(() => {
            getData();
        }, []);

        return (
            <View style={styles.screen}>
                {isLoading ? <ActivityIndiciator /> : (
                    <FlatList data={data} />
                )}
                <Text>Test Text</Text>
            </View>
        )
    }
}
*/

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {mainfunction}