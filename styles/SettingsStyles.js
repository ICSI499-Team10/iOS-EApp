import {StyleSheet} from "react-native";

export const SettingStyles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    item: {
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: "#FAFAFA",
      width: "95%",
      height: 40,
      marginLeft: 10,
      marginTop: 5,
      justifyContent:"space-between",
      flexDirection: "row",
      paddingLeft: 10,
      paddingRight: 10
    },
    modalItem: {
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: "#FAFAFA",
      width: "95%",
      height: 30,
      marginTop: 5,
      justifyContent:"space-between",
      flexDirection: "row",
      paddingLeft: 10,
      paddingRight: 10
    },
    save: {
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: "#FAFAFA",
      width: "95%",
      height: 30,
      marginTop: 20,
      justifyContent:"space-between",
      flexDirection: "row",
      paddingLeft: 10,
      paddingRight: 10
    },
    scrollText:{
      fontSize: 20
    },
  });