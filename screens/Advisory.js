import React from 'react'; 
import {View, Button} from 'react-native'; 
import {globalStyles} from '../styles/globalStyles';


const AdvisoryScreen = ({navigation}) => { 
    return (
      <View style={globalStyles.stackNavStyle}>
        <Button
          title="All"
          color="#46AFFF" 
          onPress={() => navigation.navigate("All")}
          />
          <Button
          title="Fire"
          color="#46AFFF" 
          onPress={() => navigation.navigate("Fire")}
          />
          <Button
          title="Health"
          color="#46AFFF" 
          onPress={() => navigation.navigate("Health")}
          />
          <Button
          title="Roads"
          color="#46AFFF" 
          onPress={() => navigation.navigate("Roads")}
          />
          <Button
          title="Weather"
          color="#46AFFF" 
          onPress={() => navigation.navigate("Weather")}
          />
          <Button
          title="Other"
          color="#46AFFF" 
          onPress={() => navigation.navigate("Other")}
          />
      </View>
    )
}


export {AdvisoryScreen}