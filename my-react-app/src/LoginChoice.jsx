import React from "react";
import Login from './Login.jsx'
import { Link } from "react-router-dom";
import './App.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { speak } from "./Voiceassistant.jsx";

const LoginChoice = () => {
speak("meru items konali anukuntunnara leda items ammali anukuntunnara cheppandi");
    return (
        <div>
            <button id="r-login"><Link to='/loginRes'>Restarent Account Login</Link></button>
            <button id="c-login"><Link to='/login'>Customer Login</Link></button>
        </div>
    )
}

export default LoginChoice