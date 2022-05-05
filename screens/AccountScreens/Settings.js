import React, {useState,useContext} from 'react'; 
import {Text, SafeAreaView, TouchableOpacity, Modal, View} from 'react-native'; 
import {SettingStyles} from '../../styles/SettingsStyles';
import {FONT_SIZE} from '../../constants/settingconst';
import FontContext, {fontStyle} from '../../styles/fontStyle'
import { ThemeContext } from 'react-navigation';

const SettingsScreen = props => { 
  console.log(props)
  const [modalVisible, setModalVisible] = useState(false);
  const FontContext = React.createContext()


  return (
      <SafeAreaView>
        <ThemeContext.Provider value={fontStyle.medium}>

        </ThemeContext.Provider>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
          <View style = {SettingStyles.centeredView}>
            <View style = {SettingStyles.modalView}>
              <TouchableOpacity>
                <Text style={SettingStyles.modalItem}>Small</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={SettingStyles.modalItem}>Medium</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={SettingStyles.modalItem}>Large</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={SettingStyles.save}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => setModalVisible(true)} style={SettingStyles.item}>
          <View>
            <Text style={SettingStyles.scrollText}>Set Font Size</Text>
          </View>
        </TouchableOpacity >
        <TouchableOpacity style={SettingStyles.item}>
        <View>
          <Text style={SettingStyles.scrollText}>Dark Mode</Text>
        </View>
        </TouchableOpacity>
      </SafeAreaView>   
    )
}


export {SettingsScreen}