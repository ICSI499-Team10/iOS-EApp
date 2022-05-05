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

const AdvisoryAllScreen = props => { 
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [advisory, setAdvisory] = useState([])
    const advisoryList = []
    const getAdvisory = async () => { 
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
          if(data[i]["category"] === "Advisory"){ 
            advisoryList.push(data[i])
          }
        }
        console.log(advisoryList.length)
        setAdvisory(advisoryList)
      } catch (error){ 
        console.log(error)
      } finally { 
        setLoading(false)
      }
    }

    const onRefresh = () => { 
      setAdvisory([])
      getAdvisory()
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
      getAdvisory()
    },[])

    return (
      <SafeAreaView>
        <Button title="Go Back" onPress={() => props.navigation.goBack()}/>
        {isLoading ? <ActivityIndicator/> : (
          <SafeAreaView >
            <Text>Advisory All Screen</Text>
            <FlatList 
              style={{paddingBottom: 50}}
              data={advisory}
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

export {AdvisoryAllScreen}