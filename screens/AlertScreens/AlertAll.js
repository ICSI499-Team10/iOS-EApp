import React, {useEffect, useState} from 'react'; 
import { Text, StyleSheet, Button, FlatList, SafeAreaView} from 'react-native'; 

const AlertAllScreen = props => { 
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [alerts, setAlerts] = useState([])
    const alertsList = []
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
          if(data[i]["category"] === "Alerts"){ 
            alertsList.push(data[i])
          }
        }
        setAlerts(alertsList)
      } catch (error){ 
        console.log(error)
      } finally { 
        setLoading(false)
      }
    }
    useEffect(() => {
      getAdvisory()
    },[])

    return (
      <SafeAreaView>
        <Button title="Go Back" onPress={() => props.navigation.goBack()}/>
        {isLoading ? <Text>Loading...</Text> : (
          <SafeAreaView>
            <Text>Alerts All Screen</Text>
            <FlatList 
              data={alerts}
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

export {AlertAllScreen}