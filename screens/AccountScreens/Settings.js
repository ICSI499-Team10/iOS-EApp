import React, {useState,useContext} from 'react'; 
import {Text, SafeAreaView, TouchableOpacity, Modal, View} from 'react-native'; 
import {SettingStyles} from '../../styles/SettingsStyles';
import FontContext from '../../contexts/FontContext';

const SettingsScreen = props => { 
  console.log(props)
  const [modalVisible, setModalVisible] = useState(false);
  const{font, setFont} = useContext(FontContext)

  return (
      <SafeAreaView>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
          <View style = {SettingStyles.centeredView}>
            <View style = {SettingStyles.modalView}>
              <TouchableOpacity
                onPress={() => setFont(font = "fontSize: 20")}
              >
                <View style={SettingStyles.modalItem}>
                  <Text style={{font}}>Regular</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setFont(font = "fontSize: 30")}
              >
                <View style={SettingStyles.modalItem}>
                  <Text style={{font}}>Larger</Text>
                </View>
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