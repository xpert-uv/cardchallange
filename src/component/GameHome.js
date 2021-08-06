import React,{useState} from 'react';
import { CardContext } from './StateProvide';
import Image from './Image';
import backOfCard from "../Image/back.png";
import "../css/GameHome.css";
import useFlip from './useFlip';
import { Link } from 'react-router-dom';

import Winner from './Winner';

const GameHome = () => {
    const [showClicked, setShowClicked] = useState(true);
     const [flip, setFlip] = useFlip();
    const cardImage = (args) => {
            return args.map(item => {
           return < Image imgSrc = { flip? backOfCard:item.image } code = { item.code } key={item.code} />
        })
    }

    
    // accesing localstorage data 
    const LocalStorage = JSON.parse(localStorage.getItem("session"));

    const handleShow = () => {
        setFlip();
       <Winner/>
        setShowClicked(showClicked => !showClicked)
    }

    console.log(LocalStorage);
    return (
        <CardContext.Consumer>
            {value => (
                <>
                    
                    <div className="gameboard">
                        
                     
                    <div className="gamehome">
                        <h1>Computer's Cards</h1>
                    <div className="gamehome__cards">
                            {
                                //if data is not present in context
                                //it should check for localstorage
                                // if data present get it 
                                 
                               value?.cardData?.cards?.length === 0 ? cardImage(LocalStorage.cards) : cardImage(value.cardData.cards)
                                
                               }  
                        </div>
                        <h1>Player's Cards</h1>
                 </div>


                        {showClicked&&<button className="gamebutton__show" onClick={handleShow}>show</button>}
                     <button>  <Link type ="button"to="/logout"> Log Out</Link></button>
                    </div>
                    </>
               
                )

            }
        </CardContext.Consumer>
       
    )
}

export default GameHome
