import React from 'react'
import { Link } from "react-router-dom";

import "../css/Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home__first">
               <p> <i>"May the Odds be in your Favour"</i> </p>
                <h1>Teen Patti</h1>
                
            </div>
            <div className="home__second">
                
                <Link to="/login"><button> Sign In</button></Link>
               <Link to="/join"> <button> Sign Up</button></Link>            
           </div>
                       
        </div>
    )
}

export default Home;
