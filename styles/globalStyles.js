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
    },

    titleText2:{
        fontSize: 24,
        fontWeight: "bold"
    },

    loginButtons:{
        width: "30%",
        backgroundColor: "#46AFFF"
    },

    registerButtons:{
        width: "50%",
        backgroundColor: "#46AFFF"
    },

    containerSub:{
        width: "80%",
        height: "20%",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 5
    }

});

