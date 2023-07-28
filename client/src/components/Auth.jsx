import React from "react";
import { useState } from "react";
const Auth = ({ setshowmodel, isSignUp, setisSignUp }) => {
  const [Email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const [confirmpass, setconfirmpass] = useState(null);
  const [error, seterror] = useState(null);

  console.log(Email, password, confirmpass);
  const clickhandle = () => {
    setshowmodel(false);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmpass) {
        seterror("password need to match!");
      } else {
        console.log("make a post request to database!");
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
