import React from 'react';
import { CardContext } from './StateProvide';
import Image from './Image';
import "../css/GameHome.css";

const GameHome = () => {
    const cardImage = (args) => {
        console.log(args);
        return args.map(item => {
           return < Image imgSrc = { item.image } code = { item.code } key={item.code} />
        })
    }
    
   
    return (
        <CardContext.Consumer>
            {value => (
                <>
                <div className="gamehome">
                    <div className="gamehome__cards">
                        {cardImage(value.cardData.cards)}
                     </div>
                </div>
                    <div>
                        <button>show</button>
                        <button>Rise</button>
                </div>
               </>
                )

            }
        </CardContext.Consumer>
       
    )
}

export default GameHome
