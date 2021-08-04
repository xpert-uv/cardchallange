import React, { createContext,useState} from "react";

export const CardContext = createContext();


function CardContextProvider({ children}) {
    const initalState = {
        username: "",
        cards: [],
        deck_id:""
    }

    const [cardData, setCardData] = useState(initalState);
    const value = { cardData, setCardData };

    return (
        <CardContext.Provider value={ value}>
            { children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;

