import React, { useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';

import { useStateValue } from './StateProvide';
import { setData } from "./setData";
import "../css/form.css"


const LoginPage = () => {
    const Initial = {
        username: "",
        password: ""
       
    }

    const [formData, setFormData] = useState(Initial);
    const [{users,cards,deck_id }] = useStateValue();
    const history = useHistory();
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
        let cardsData = await login();
        console.log(cardsData);
        setData(cardsData);
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
