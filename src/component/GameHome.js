import React from 'react';
import { CardContext } from './StateProvide';
import Image from './Image';
import backOfCard from "../Image/back.png";
import "../css/GameHome.css";
import useFlip from './useFlip';
import { Link } from 'react-router-dom';

const GameHome = () => {
     const [flip, setFlip] = useFlip();
    const cardImage = (args) => {
            return args.map(item => {
           return < Image imgSrc = { flip? backOfCard:item.image } code = { item.code } key={item.code} />
        })
    }
    // accesing localstorage data 
    const LocalStorage = JSON.parse(localStorage.getItem("session"));
    
    return (
        <CardContext.Consumer>
            {value => (
                <>
                    
                    <div className="gameboard">
                        
                     <button className="gamebutton__rise">Bet</button>
                    <div className="gamehome">
                        <h1>Computer's Cards</h1>
                    <div className="gamehome__cards">
                            {
                                //if data is not present in context
                                //it should check for localstorage
                                // if data present get it 
                                 
                               value.cardData?.cards?.length === 0 ? cardImage(LocalStorage.cards) : cardImage(value.cardData.cards)
                                
                               }  
                        </div>
                        <h1>Player's Cards</h1>
                 </div>


                   <button className="gamebutton__show" onClick={ setFlip}>show</button>
                     <button>  <Link type ="button"to="/logout"> Log Out</Link></button>
                    </div>
                    </>
               
                )

            }
        </CardContext.Consumer>
       
    )
}

export default GameHome
