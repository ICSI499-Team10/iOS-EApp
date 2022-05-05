import React, {useState, useEffect} from 'react';
import Icon from '../icons/icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AdvisoryStack from '../navigators/stackAdvisoryNav'; 
import AlertStack from '../navigators/stackAlertNav'; 
import BeReadyStack from '../navigators/stackBeReadyNav'; 
import AccountStack from '../navigators/stackAccNav';

import {init, insertIncident, fetchIncidents, deleteIncidents} from '.././utils/dbFunctions'

const Tab = createBottomTabNavigator(); 

const BottomTabNavigator = () => { 
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(true)
    var incidentId = 0
    var description = ""
    var category = ""
    var incidentTypeId = 0
    var source = ""
    var title = ""
    const getIncidents = async () => { 
        try{ 
            const URI = "http://eapp-test.arcc.albany.edu/publish/Incident"
            const response = await fetch(URI, {
                headers: {
                    AuthToken: '4xm7HKg@SY$Q@2BeA3&9X4Ck^8EX$@mM', 
                    RecentDate: null
                },
            })
            const dataJSON = await response.json() 
            setData(dataJSON["incidents"])
            if(data.length == 0){ 
                console.log(data.length)
                setRefresh(false)
            } else { 
                console.log(data.length)
                // initialize the database if it is not initialized 
                init()
                    .then(() => { 
                        console.log("initialized database")
                    })
                    .catch(err => { 
                        console.log("initializing database failed")
                        console.log(err)
                    })
                
                deleteIncidents()
                    .then((dbResult) => { 
                        console.log(dbResult)
                    })
                    .catch(err => { 
                        console.log(err)
                    })
                
                for(let i = 0; i < data.length; i++){ 
                    incidentId = data[i]["incidentId"]
                    description = data[i]["description"]
                    category = data[i]["category"]
                    incidentTypeId = data[i]["incidentTypeId"]
                    source = data[i]["source"]
                    title = data[i]["title"]
                    insertIncident(incidentId, description, category, incidentTypeId, source, title)
                        .then((dbResult) => { 
                            //console.log(dbResult)
                        })
                        .catch(err => { 
                            console.log(err)
                        })
                }
                fetchIncidents()
                    .then((dbResult) => { 
                        //console.log(dbResult)
                    })
                    .catch(err => { 
                        console.log(err)
                    })
            }
        } catch (error) { 
            console.log(error)
        }
    }

    useEffect(() => { 
        getIncidents()
    },[refresh])
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Advisory" 
                component={AdvisoryStack}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="FontAwesome" name={"warning"} color={color} size={size}/>),
                    headerShown: false
                }}
            />

            <Tab.Screen 
                name="Alert" 
                component={AlertStack}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="FontAwesome" name={"bell-o"} color={color} size={size}/>),
                    headerShown: false
                }} 

            />
            <Tab.Screen 
                name="Be Ready" 
                component={BeReadyStack}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="Ionicons" name={"happy-outline"} color={color} size={size}/>),
                    headerShown: false
                }}  
            />
            <Tab.Screen 
                name="Account" 
                component={AccountStack}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="Ionicons" name={"ios-person-circle"} color={color} size={size}/>),
                    headerShown: false
                }}   

            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator; 