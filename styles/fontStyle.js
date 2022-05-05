import React, {useContext} from 'react'; 
import {StyleSheet} from "react-native";

const FontContext = React.createContext(fontStyle.medium)

export const fontStyle = StyleSheet.create({

    small:{

    },

    medium:{

    },
    
    large:{

    }

});

export default FontContext;