    export const TriCheck = (cards) => {
         const cardsValue = cards.map(element => {
            return element.value
         });
        
       const sortedValue = cardsValue.sort((a, b) => (a - b));
       if (sortedValue[0] === sortedValue[1]=== sortedValue[2]) return true;
        else return false;
            
    };
   export   const PureSquence = (array) => {
        if (Squence(array) && color(array)) return true;
        else return false;
          
    };
   export   const Squence = (array) => {
        const cardsValue = array.map(element => {
            return element.value
       });
        const sortedValue = cardsValue.sort((a, b) => (a - b));
        if ((sortedValue[1] + 1) !== sortedValue[2] || (sortedValue[1] - 1) !== sortedValue[0]) return false;
        else return true;
    };



    export  const color = (array) => {
        const suits = array.map(element => {
            return element.suit;
        });
         if (suits[1] === suits[0] && suits[1] === suits[2]) return true;
            else return false;
        
    };
    export  const pair = (array) => {
         const cardsValue = array.map(element => {
            return element.value
         });
        const sortedValue = cardsValue.sort((a, b) => (a - b));
        
        switch (sortedValue[1]) {
            case sortedValue[0]: return true;
                break;
            case sortedValue[2]: return true;
                break;
            default:
                return false;
        }
       

    };
    export  const highCard = (array) => {
        const cardsValue = array.map(element => {
            
            if (element.value === "ACE") {
               return element.value = "14";
            }
            else if (element.value === "KING") {
               return element.value = "13";
            }
            else if (element.value === "QUEEN") {
                return element.value = "12";
            }
            else if (element.value === "JACK") {
                return element.vlaue = "11"
            } else {
                return element.value
            }
            
            
        });
        
        const sortedValue = cardsValue.sort((a, b) => (a - b));
        const newCardnums = sortedValue.map(item => {
           return parseInt(item)
       })
        console.log(newCardnums);
        return Math.max(...newCardnums);
        
     };

  


   

