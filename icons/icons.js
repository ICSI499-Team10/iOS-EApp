import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react';

const getIcon = type => {
    switch(type){
        case 'FontAwesome':
            return FontAwesome;
        
        case 'Ionicons':
            return Ionicons;
        
        case 'fire':
            return FontAwesome;

        case 'alert':
            return alert;

        case 'roads':
            return roads;

        case 'weather':
            return weather;

    }

};


const Icon = ({
    type,
    ...props
}) => {
    const FontIcon = getIcon(type);

    return <FontIcon { ...props
    }
    />;
};

export default Icon;