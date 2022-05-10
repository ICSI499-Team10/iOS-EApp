import React, { useEffect, useState } from 'react';
import {FlatList, Text, StyleSheet, ScrollView} from 'react-native';

const fetchData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const getData = async () => { 
        try { 
            const URI = "http://eapp-test.arcc.albany.edu/publish/Incident"
            const response = await fetch(URI, {
                headers: {
                    AuthToken: '4xm7HKg@SY$Q@2BeA3&9X4Ck^8EX$@mM', 
                    RecentDate: null
                },
            })
            const dataJSON = await response.json() 
            setData(dataJSON["incidents"])
            console.log(data[0]["category"])
        } catch (error){ 
            console.log(error)
        } finally { 
            setLoading(false)
        }
    }
    useEffect(() => { 
        getData()
    },[])

    return (
        <ScrollView>
            {isLoading ? <Text>Loading....</Text> : (
                <ScrollView >
                    <FlatList 
                        data={data}
                        keyExtractor={item => item.incidentId}
                        renderItem={({item}) => (
                            <Text>{item.category + " " + item.source}</Text>
                        )}
                    />
                </ScrollView>
            )}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    screen: { 
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export {fetchData}