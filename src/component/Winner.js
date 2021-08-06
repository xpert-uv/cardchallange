import React from 'react'
import { TriCheck, PureSquence, pair, color, highCard, Squence } from './CheckWinner';
let winner="";
const Winner = () => {
     const LocalStorage = JSON.parse(localStorage?.getItem("session"));
    const computerCards = [LocalStorage.cards[0], LocalStorage.cards[1], LocalStorage.cards[2]];
    const playerCards = [LocalStorage.cards[3], LocalStorage.cards[4], LocalStorage.cards[5]];
    
   

    //case trio 

    if (TriCheck(playerCards) === true && TriCheck(computerCards) === false) {
        winner = "player";
    } else if (TriCheck(playerCards) === true && TriCheck(computerCards) === true) {
        if (highCard(playerCards) > highCard(computerCards)) {
            winner = "player";
        } else {
            winner = "computer";
        }
        
    } else {
        winner = "computer";
    }

    //case PureSequenc

    if (PureSquence(playerCards) === true && PureSquence(computerCards) === false) {
        winner = "palyer";
    }
    else if (PureSquence(playerCards) === true && PureSquence(computerCards) === true) {
        if (highCard(playerCards) > highCard(computerCards)) {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else {
        winner = "computer";
    }
   
    //case Sequence
    if (Squence(playerCards) === true && Squence(computerCards) === false) {
        winner = "palyer";
    }
    else if (Squence(playerCards) === true && Squence(computerCards) === true) {
        if (highCard(playerCards) > highCard(computerCards)) {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else {
        winner = "computer";
    }

    //case color
     if (color(playerCards) === true && color(computerCards) === false) {
        winner = "palyer";
    }
    else if (color(playerCards) === true && color(computerCards) === true) {
        if (highCard(playerCards) > highCard(computerCards)) {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else {
        winner = "computer";
    }

    //case pair
     if (pair(playerCards) === true && pair(computerCards) === false) {
        winner = "palyer";
    }
    else if (pair(playerCards) === true && pair(computerCards) === true) {
        if (highCard(playerCards) > highCard(computerCards)) {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else {
        winner = "computer";
    }

    //case HighCard
    if (highCard(playerCards) > highCard(computerCards)) {
            winner = "player";
        } else {
            winner = "computer";
        }

    return (
        <div>
             {
                console.log({ winner })
            }
        </div>
    )
}

export default Winner
