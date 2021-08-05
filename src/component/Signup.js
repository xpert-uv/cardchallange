import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';

import { CardContext } from './StateProvide';
import "../css/Signup.css";

const Signup = () => {
    const initial = {
        username: "",
        password: "",
        firstname: "",
        lastname:""
    }

    const [singupForm, setSignupForm] = useState(initial);
    const { cardsData, setCardData } = useContext(CardContext);
    const history = useHistory();

    const LocalStorage = JSON.parse(localStorage.getItem("session"));

    /**
     * checks whether the user is currently loged in or not 
     * if login already just load the game session 
     * Do not let to sign Up, unless user log's Out. 
     */
    useEffect(() => {
        if (LocalStorage?.username) { history?.push('/gamehome'); }
    },[LocalStorage])


    const handleChange = e => {
        const { name, value } = e.target;
        setSignupForm(data => ({
            ...data,
            [name]:value
        }))
    }
// Register user sending info to API and save response to contextAPI
         async function resp () {
         axios.post("http://localhost:9000/users/register", {
            username: singupForm.username,
            password: singupForm.password,
            firstname: singupForm.firstname,
            lastname: singupForm.lastname

         }).then(
             res => {
                 setCardData({
                     username: res.data?.users?.username,
                     cards:  res.data?.cards?.cards,
                     deck_id: res.data?.cards?.deck_id

                 })
                 //store the data in localstorage 
                 //when page refreseh user don't have to go singin again
                 //as long as user dosen't sign Out.
                 localStorage.setItem("session", JSON.stringify({
                     username: res.data?.users?.username,
                     cards:  res.data?.cards?.cards,
                     deck_id: res.data?.cards?.deck_id
                }))     
                 
             }
            
         ).catch(
             err => {
                 console.log(err)
            }
        )
       
    }


    const handleSubmit = async e => {
        e.preventDefault();
        
        // send the user data and register.
        try {
            resp();
            history.push('/gamehome');
        } catch (err) {
            console.log(err);
      }
        
                
        setSignupForm(initial);
    }

    return (
        <>
        
        <div className="singupform__div">
            <h1> Sign Up</h1>
            <form className="signupform" onSubmit={handleSubmit}>
                <label>
                    Username
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={singupForm.username}
                        placeholder=""
                        onChange={handleChange} />
                </label>
                <label>
                    Password
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={singupForm.password}
                        placeholder="********"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    First Name
                    <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={singupForm.firstname}
                        placeholder=""
                        onChange = {handleChange} />
                </label>
                <label>
                    Last Name
                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={singupForm.lastname}
                        placeholder=""
                        onChange={handleChange}
                        />
                </label>
                <button type="submit">Sing Up</button>
            </form>
                
            </div>
           <button className="signup__back"><Link to="/">Back</Link> </button> 
            </>
    )
}

export default Signup
