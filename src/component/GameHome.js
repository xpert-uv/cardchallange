import React from 'react';
import { useStateValue } from './StateProvide';
import setData from './setData';

const GameHome = () => {
    const [{ users, cards, deck_id }] = useStateValue();
    console.log(setData(useStateValue));
    return (
        <div>
            { console.log("this is data from gamehome:" )}
        </div>
    )
}

export default GameHome
