import React,{useState} from "react"
export const initialState = {
    users: "",
    cards: [],
    deck_id:""
}

export const SetData = (data) => {
    const [cardData, setCardData] = useState(initialState);

    const newData = () => {
        setCardData => {
            users: data?.users,
            deck_id: data?.cards.deck_id
        
    }
    return {
        users: data?.user,
        //cards: [data?.cards.map(item => cards.push(item))],
        deck_id: data?.cards.deck_id

    }
}
 


    export default { SetData };