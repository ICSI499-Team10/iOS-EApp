import React, {useContext,createContext} from 'react'; 

const FontContext = createContext({
    font: "regular",
    setFont: () => {},
})

export default FontContext