import React, {useState, useEffect} from 'react';
import Icon from '../icons/icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AdvisoryStack from '../navigators/stackAdvisoryNav'; 
import AlertStack from '../navigators/stackAlertNav'; 
import BeReadyStack from '../navigators/stackBeReadyNav'; 
import AccountStack from '../navigators/stackAccNav';

import moment from 'moment'

import {init, insertIncident, fetchIncidents, deleteIncidents, getDBMostRecentIncident} from '.././utils/dbFunctions'

const Tab = createBottomTabNavigator(); 

/**
 * Creates the bottom tab for navigation through the application.
 * @returns The bottom tab navigator holding the main tabs: Advisory, Alerts, Be Ready, and Account.
 */
const BottomTabNavigator = () => { 
    const [data, setData] = useState([])
    const [newData, setNewData] = useState([])
    const [refresh, setRefresh] = useState(true)
    const [recentIncidentTime, setRecentIncidentTime] = useState("")
    const [recentIncident, setRecentIncident] = useState([])
    var incidentId = 0
    var description = ""
    var category = ""
    var incidentTypeId = 0
    var source = ""
    var title = ""

    /**
     * Performs a GET request to retrieve data from the database and save it locally.
     */
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
                // drops the table from the local database if it is initialized 
                deleteIncidents()
                    .then((dbResult) => { 
                        console.log(dbResult)
                        console.log("table was dropped")
                    })
                    .catch(err => { 
                        console.log(err)
                        console.log("table not dropped")
                    })
                
                // creates table in the local database
                init()
                    .then(() => { 
                        console.log("initialized database")
                    })
                    .catch(err => { 
                        console.log("initializing database failed")
                        console.log(err)
                    })
                
                // inserts data into the table in the local database
                for(let i = 0; i < data.length; i++){ 
                    incidentId = data[i]["incidentId"]
                    description = data[i]["description"]
                    category = data[i]["category"]
                    incidentTypeId = data[i]["incidentTypeId"]
                    source = data[i]["source"]
                    title = data[i]["title"]
                    timeOfEvent = data[i]["timeOfEvent"]
                    severityTypeId = data[i]["severityTypeId"]
                    insertIncident(incidentId, description, category, incidentTypeId, source, title, timeOfEvent, severityTypeId)
                        .then((dbResult) => { 
                            //console.log(dbResult)
                        })
                        .catch(err => { 
                            console.log(err)
                        })
                }

                /*fetchIncidents()
                    .then((dbResult) => { 
                        //console.log(dbResult)
                    })
                    .catch(err => { 
                        console.log(err)
                    })*/
            }
        } catch (error) { 
            console.log(error)
        }
    }

    /**
     * Refreshes and updates the local database with the most recent information.
     * Resolved - fetches the recent data from the SQLite database, formats the date, and fetches the latest data using recentDate in the API
     * Requires work - setting new data using react useState, error checking if there is no data or new data, inserting it into the database if data is new
     * NOTE - for other pages, setInterval is required to fetch the latest data added to the SQLite server
     */
    const getRecentIncident = async () => {
        getDBMostRecentIncident()
            .then((dbResult) => { 
                setRecentIncident(dbResult["rows"]["_array"])
                //const formatDate = moment(dbResult["rows"]["_array"][0]["timeOfEvent"]).format("ddd MMM DD HH:mm:ss [EDT] yyyy")
                const formatDate = "Wed Apr 27 12:32:00 EDT 2022"
                console.log(formatDate)
                fetchRecentIncidentFromAPI(formatDate)
                console.log(newData)
            })
            .catch(err => { 
                console.log("getRecentIncident error")
                console.log(err)
            })
    }

    /**
     * Helper function to fetch the recent data from the API using the recentDate 
     * NOTE - setNewData does not work - requires further debugging
     */

    const fetchRecentIncidentFromAPI = async (formatDate) => { 
        try { 
            const URI = "http://eapp-test.arcc.albany.edu/publish/Incident"
            const response = await fetch(URI, {
                headers: {
                    AuthToken: '4xm7HKg@SY$Q@2BeA3&9X4Ck^8EX$@mM', 
                    RecentDate: formatDate
                },
            })
            const dataJSON = await response.json() 
            setNewData(dataJSON["incidents"])
        } catch(error) { 
            console.log("fetchRecentIncidentError")
            console.log(error)
        }
    }

    useEffect(() => { 
        getIncidents()
        if(refresh == false) {
            setInterval(() => {
                getRecentIncident()
            }, 60000)
            // 600000 ms in 10 mins
        }
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