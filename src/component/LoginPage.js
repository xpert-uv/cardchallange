import React, { useEffect, useState, useContext} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { CardContext } from './StateProvide';
import "../css/form.css"



const LoginPage = () => {
    const Initial = {
        username: "",
        password: ""
       
    }

    const [formData, setFormData] = useState(Initial);
    const { cardsData, setCardData } = useContext(CardContext);
    const history = useHistory();
    const LocalStorage = JSON.parse(localStorage.getItem("session"));
   
    /**
     * checks whether the user is currently loged in or not 
     * if login already just load the game session 
     * 
     */

    useEffect(() => {
        if (LocalStorage?.username) { history?.push('/gamehome'); }
    },[LocalStorage])




    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }))
    }

    const login = async () => {
        const resp = await axios.post(
            
            "http://localhost:9000/users/login", 
                {
                          
            username: formData.username,
            password:formData.password
                 }
                         
                          
        )
        return resp.data;
    }


    const handleSubmit = async e => {
        e.preventDefault();
        let cardsDataResponse = await login();
        // eslint-disable-next-line react/jsx-pascal-case
        console.log({ cardsDataResponse });
       
        setCardData({
            username: cardsDataResponse?.users?.username,
            cards: cardsDataResponse?.cards?.cards,
            deck_id:cardsDataResponse?.cards?.deck_id
        });
       
        localStorage.setItem("session", JSON.stringify({
            username: cardsDataResponse?.users?.username,
            cards: cardsDataResponse?.cards?.cards,
            deck_id:cardsDataResponse?.cards?.deck_id
        }))
        console.log(cardsData);
         history.push("/gamehome");
        setFormData(Initial);

    }


    return (
        <>
        <div className="form__div">
            
             <form  className="loginform" onSubmit={ handleSubmit}>
                <label>
                Username  
                <input
                    id="username"
                    type="text"
                    placeholder="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                               
                />
                        
            </label>
            <label>
               Password 
                <input
                    id="password"
                    type="password"
                    placeholder="*******"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
            </label>
            <button type="submit" >Login</button>
                
            </form>
                     
            </div>
         <Link to="/">Back</Link>    
        </>
    )
}

export default LoginPage
