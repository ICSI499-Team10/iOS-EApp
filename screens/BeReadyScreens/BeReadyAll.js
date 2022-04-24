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
import {init, insertIncident, fetchIncidents} from '../../utils/dbFunctions'

const BeReadyAllScreen = props => { 
    const description = "dummy description"
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [beReady, setBeReady] = useState([])
    const beReadyList = []
    const getBeReady = async () => { 
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
        for(let i = 0; i < data.length; i++){ 
          if(data[i]["category"] === "BeReady"){ 
            beReadyList.push(data[i])
          }
        }
        console.log(beReadyList.length)
        setBeReady(beReadyList)
      } catch (error){ 
        console.log(error)
      } finally { 
        setLoading(false)
      }
    }

    const onRefresh = () => { 
      setBeReady([])
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
      init()
        .then(() => { 
          console.log("initialized database")
        })
        .catch(err => { 
          console.log("intializing database failed")
          console.log(err)
        })
      /*insertIncident(description)
          .then((dbResult) => { 
            console.log(dbResult)
          })
          .catch(err => { 
            console.log(err)
          })*/
      fetchIncidents()
          .then((dbResult) => { 
            console.log(dbResult)
          })
          .catch(err => { 
            console.log(err)
          })
    },[])

    return (
      <SafeAreaView>
        <Button title="Go Back" onPress={() => props.navigation.goBack()}/>
        {isLoading ? <ActivityIndicator/> : (
          <SafeAreaView >
            <Text>BeReadyAll Screen</Text>
            <FlatList 
              style={{paddingBottom: 50}}
              data={beReady}
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