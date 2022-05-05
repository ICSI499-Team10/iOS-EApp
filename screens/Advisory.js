import React from 'react'; 
import {View, Button,Image, TouchableOpacity} from 'react-native'; 
import {globalStyles} from '../styles/globalStyles';


const AdvisoryScreen = ({navigation}) => { 
    return (
      <View style={globalStyles.stackNavStyle}>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate("All")}>
        <Image
          source={require('../icons/EAPP_Icons/bell_white.png')}
          style={globalStyles.imageButton}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Fire")}>
        <Image
          source={require('../icons/EAPP_Icons/fire_tab.png')}
          style={globalStyles.imageButton}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Health")}>
        <Image
          source={require('../icons/EAPP_Icons/medical_tab.png')}
          style={globalStyles.imageButton}
        />
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity onPress={() => navigation.navigate("Roads")}>
        <Image
          source={require('../icons/EAPP_Icons/road_tab.png')}
          style={globalStyles.imageButton}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Weather")}>
        <Image
          source={require('../icons/EAPP_Icons/weather_tab.png')}
          style={globalStyles.imageButton}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Other")}>
        <Image
          source={require('../icons/EAPP_Icons/form_white.png')}
          style={globalStyles.imageButton}
          //resizeMode= "contain"
        />
      </TouchableOpacity>
      </View>
      </View>
    )
}


export {AdvisoryScreen}