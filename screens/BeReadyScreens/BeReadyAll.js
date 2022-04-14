import React, {useState, useEffect} from 'react'; 
import { Text, SafeAreaView, StyleSheet, Button, FlatList} from 'react-native'; 

const BeReadyAllScreen = props => { 
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
        setBeReady(beReadyList)
      } catch (error){ 
        console.log(error)
      } finally { 
        setLoading(false)
      }
    }
    useEffect(() => {
      getBeReady()
    },[])

    return (
      <SafeAreaView>
        <Button title="Go Back" onPress={() => props.navigation.goBack()}/>
        {isLoading ? <Text>Loading...</Text> : (
          <SafeAreaView>
            <Text>Be Ready All Screen</Text>
            <FlatList 
              data={beReady}
              keyExtractor={item => item.incidentId}
              renderItem={({item}) => (
                <Text>{item.category + " " + item.source}</Text>
              )}
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