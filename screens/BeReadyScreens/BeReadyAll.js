import React, {useState, useEffect} from 'react'; 
import { 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  Button, 
  FlatList, 
  RefreshControl, 
  ActivityIndicator,
  View,  
} from 'react-native'; 
import {fetchBeReady} from '../../utils/dbFunctions'

const BeReadyAllScreen = props => { 
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const getBeReady = async () => { 
      /*try { 
        /*const URI = "http://eapp-test.arcc.albany.edu/publish/Incident"
        const response = await fetch(URI, {
            headers: {
                AuthToken: '4xm7HKg@SY$Q@2BeA3&9X4Ck^8EX$@mM', 
                RecentDate: null
            },
        })
        const dataJSON = await response.json() 
        setData(dataJSON["incidents"])
        fetchBeReady()
          .then((dbResult) => { 
            console.log(dbResult["rows"]["_array"][0])
          })
          .catch(err => { 
            console.log(err)
          })
      } catch (error){ 
        console.log(error)
      } finally { 
        setLoading(false)
      }*/
      fetchBeReady()
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
      getBeReady()
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
      getBeReady()
    },[])

    return (
      <SafeAreaView>
        <Button title="Go Back" onPress={() => props.navigation.goBack()}/>
        {isLoading ? <ActivityIndicator/> : (
          <SafeAreaView >
            <Text>BeReadyAll Screen</Text>
            <FlatList 
              style={{paddingBottom: 50}}
              data={data}
              keyExtractor={item => item.incidentId}
              renderItem={({item}) => (
                <Text onPress={() => getItem(item)}>{item.category + " " + item.title}</Text>
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

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {BeReadyAllScreen}