import React, {useState, useEffect} from 'react'; 
import { 
  Text, 
  SafeAreaView,  
  FlatList, 
  RefreshControl, 
  ActivityIndicator,
  View,
  TouchableOpacity,
  Alert  
} from 'react-native'; 
import {globalStyles} from '../../styles/globalStyles';
import {fetchAdvisoryOther} from '../../utils/dbFunctions';

/**
 * Fetches all Advisory information relating to Other from local database and displays in a list.
 * @param {*} props Navigation for Advisory
 * @returns Log of all Other Advisory information.
 */
const AdvisoryOtherScreen = props => { 
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getAdvisoryOther = async () => { 
      fetchAdvisoryOther()
        .then((dbResult) => { 
          console.log(dbResult["rows"]["_array"])
          setData(dbResult["rows"]["_array"])
          setLoading(false)
        })
        .catch(err => { 
          console.log(err)
        })
    }

    const onRefresh = () => { 
      setData([])
      getAdvisoryOther()
    }

    const getItem = (item) => { 
      Alert.alert(
        item.category,
        item.description
      )
    }

    const ItemSeparatorView = () => { 
      return (
        <View/>
      )
    }

    useEffect(() => {
      getAdvisoryOther()
    },[])

    // Return of list of information with touchable opacity to view descriptions
    return (
      <SafeAreaView style={globalStyles.screen}>
        {isLoading ? <ActivityIndicator/> : (
          <SafeAreaView >
            <FlatList 
              style={{paddingBottom: 50}}
              data={data}
              keyExtractor={item => item.incidentId}
              renderItem={({item}) => (
                <View >
                  <TouchableOpacity style={globalStyles.item} onPress={() => getItem(item)}>
                    <Text style={{fontSize:20}}>{item.title}</Text>
                    <Text style={{fontSize:15}}>{item.timeOfEvent}</Text>
                  </TouchableOpacity>
                </View>
              )}
              ItemSeparatorComponent={ItemSeparatorView}
              scrollEnabled={true}
              refreshControl={ 
                <RefreshControl 
                  refreshing={isLoading}
                  onRefresh={onRefresh}
                />
              }
            />
          </SafeAreaView>
        )}
      </SafeAreaView>
    )
}

export {AdvisoryOtherScreen}