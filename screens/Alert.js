import React from 'react';
import {View,Text, Image, TouchableOpacity} from 'react-native'; 
import {globalStyles} from '../styles/globalStyles';    // Import of style sheet to be applied to screen

/**
 * Displays the Alert screen and buttons that navigate to their subcategories.
 * @param {*} navigation Navigation path for screens related to Alert
 * @returns Alert screen and buttons to its subcategories.
 */
const AlertScreen = ({navigation}) => { 
  return (
    <View style={globalStyles.stackNavStyle}>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("All")}>
            <Image
              source={require('../icons/EAPP_Icons/bell_white.png')}
              style={globalStyles.imageButton}
            />
            <Text style = {globalStyles.imageButtonText}> All </Text>
            </TouchableOpacity>
          
      <TouchableOpacity onPress={() => navigation.navigate("Fire")}>
        <Image
          source={require('../icons/EAPP_Icons/fire_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Fire </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Health")}>
        <Image
          source={require('../icons/EAPP_Icons/medical_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Health </Text>
      </TouchableOpacity>
      </View>

      <View>
        <View>
      <TouchableOpacity onPress={() => navigation.navigate("Roads")}>
        <Image
          source={require('../icons/EAPP_Icons/road_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Roads </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Weather")}>
        <Image
          source={require('../icons/EAPP_Icons/weather_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Weather </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Other")}>
        <Image
          source={require('../icons/EAPP_Icons/form_white.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Other </Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
  )
}

export {AlertScreen}