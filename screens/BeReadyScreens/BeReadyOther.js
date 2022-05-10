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
import {fetchBeReadyOther} from '../../utils/dbFunctions'

/**
 * Fetches all Be Ready information relating to Other from local database and displays in a list.
 * @param {*} props Navigation for Be Ready
 * @returns Log of all Other Be Ready information.
 */
const BeReadyOtherScreen = props => { 
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    const getBeReadyOther = async () => { 
      fetchBeReadyOther()
        .then((dbResult) => { 
          console.log(dbResult["rows"]["_array"][0])
          setData(dbResult["rows"]["_array"])
          setLoading(false)
        })
        .catch(err => { 
          console.log(err)
        })
    }

    const onRefresh = () => { 
      setData([])
      getBeReadyOther()
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
      getBeReadyOther()
    },[])

    return (
      <SafeAreaView styles={globalStyles.screen}>
        {isLoading ? <ActivityIndicator/> : (
          <SafeAreaView >
            <FlatList 
              style={{paddingBottom: 50}}
              data={data}
              keyExtractor={item => item.incidentId}
              renderItem={({item}) => (
                <View>
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

export {BeReadyOtherScreen}