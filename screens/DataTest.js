import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const fetchData = () => {
    const [data, setData] = useState([]);

    const getData = async () => { 
        try { 
            console.log("get data function")
            const URI = "http://eapp-test.arcc.albany.edu/publish/Incident"
            const response = await fetch(URI, {
                headers: {
                    AuthToken: '4xm7HKg@SY$Q@2BeA3&9X4Ck^8EX$@mM', 
                    RecentDate: null
                },
            })
            const dataJSON = await response.json() 
            console.log(dataJSON["incidents"][1]["category"])
            setData(dataJSON["incidents"])
        } catch (error){ 
            console.log(error)
        } finally { 
            //setLoading(false)
        }
    }

    useEffect(() => { 
        console.log("Use effect")
        getData()
    },[])

    return (
        <View>
            <Text>Test Screen for Data</Text>
        </View>
    )
}

export {fetchData}

/* .then((response) => response.json()).then((responseJSON) => 
        console.log(responseJSON)
    ); */