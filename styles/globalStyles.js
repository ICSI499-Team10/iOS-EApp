import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    stackNavStyle:{
        alignItems: "flex-start",
        flexDirection: "row"
    },

    accScreen:{
        flexDirection: "column",
    },

    loginContainer:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInput:{
        height: 40,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: "left"
    },

    titleText:{
        fontSize: 30,
        fontWeight: "bold"

    }

});

