import React from 'react'
import {useHistory} from"react-router-dom"
const LogOut = () => {
    const history = useHistory();
     localStorage.clear();
    setTimeout(history.push('/'), 15000);
    
    
    return (
        <div>
            <h1> Thank you </h1> 
        </div>
    )
}

export default LogOut
