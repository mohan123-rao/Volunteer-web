import { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const FormSubmit = async (e) => {
    e.preventDefault();

    if(name == 'admin' && password == 'admin123'){
      navigate('/dashboard')
    }
  };

  return (
    <div className="out-login">
      <div className="login">
        <h1>Login</h1>

        <form onSubmit={FormSubmit}>
          User Name:<br />
          <input
            type="text"
            placeholder="Enter User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br /><br />

          Password:<br />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br /><br /><br />

          <button type="submit">Login</button><br /><br />
        </form>
        
      </div>
      <br />
      <p style={{color:'black'}}>Note:user Name is 'admin',password is 'admin123'.<br/>This is sample project so provided this data here.</p>
    </div>
  );
}

export default Login