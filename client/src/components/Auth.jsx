import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {useCookies} from 'react-cookie';
const Auth = ({ setshowmodel, isSignUp}) => {
  const [Email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const [confirmpass, setconfirmpass] = useState(null);
  const [error, seterror] = useState(null);
  const [cookie,setcookie,removecookie]=useCookies(['user']);
  let navigate=useNavigate( );
  
  console.log(Email, password, confirmpass);
  const clickhandle = () => {
    setshowmodel(false);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    // const success =true
    try {   
      if (isSignUp && (password !== confirmpass)) {
        seterror("password need to match!");
        return 
      } else {
        const response = await axios.post(`http://localhost:8000/${isSignUp?'signup':'login'}`,{Email,password});
        // console.log("hey there");

        setcookie('userId',response.data.userId);
        setcookie('Authtoken',response.data.token);
        const successd = response.status === 201;

        if(successd && isSignUp) navigate('/onboarding');
        if(successd && !isSignUp) navigate('/dashboard');
  window.location.reload();

      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(error);
  return (
    <div className="auth">
      <button onClick={clickhandle} className="authclose">
        X
      </button>
      <h2>{isSignUp ? "Create Account" : "log in"}</h2>
      <p>by clicking log in , you are agree to Oraged terms and conditions.</p>
      <form onSubmit={handlesubmit} className="formauth">
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="confirmpass"
            name="confirmpass"
            required
            placeholder="confirm password"
            onChange={(e) => setconfirmpass(e.target.value)}
          />
        )}

        <input type="submit" className="submitbtn" />
      </form>
      <hr />
      <h2 className="getapp">get app</h2>
    </div>
  );
};

export default Auth;
