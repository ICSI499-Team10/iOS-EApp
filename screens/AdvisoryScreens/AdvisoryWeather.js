import React, {useState, useEffect} from 'react'; 
import { 
  Text, 
  SafeAreaView,  
  FlatList, 
  RefreshControl, 
  ActivityIndicator,
  View,
  TouchableOpacity  
} from 'react-native'; 
import {globalStyles} from '../../styles/globalStyles';
import {fetchAdvisoryWeather} from '../../utils/dbFunctions';

const AdvisoryWeatherScreen = props => { 
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const getAdvisoryWeather = async () => { 
    fetchAdvisoryWeather()
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
    getAdvisoryWeather()
  }

  const getItem = (item) => { 
    alert('Description: ' + item.description)
  }

  const ItemSeparatorView = () => { 
    return (
      <View 
        style={{
          height: 1, 
          width: '100%',
          backgroundColor: "#607D8B"
        }}
      />
    )
  }

  useEffect(() => {
    getAdvisoryWeather()
  },[])

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
                    <Text style={{fontSize:20}}>{item.category}</Text>
                    <Text style={{fontSize:20}}>{item.title + "..."}</Text>
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

export {AdvisoryWeatherScreen}