import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import Auth from "../components/Auth";
const authtoken = false;

const Home = () => {
  const [showmodel, setshowmodel] = useState(false);
  const [isSignUp, setisSignUp] = useState(true);

  const handleclick = () => {
    console.log("clicked");
    setshowmodel(true);
    setisSignUp(true);
  };

  return (
    <div className="overlay">
      <Nav authtoken={false}
        minimal={false}
        setshowmodel={setshowmodel}
        showmodel={showmodel}
        setisSignUp={setisSignUp}
      />
      <div className="home">
        <h1 className="hometitle">MEET @MATE</h1>
        <button className="btn-primary" onClick={handleclick}>
          {authtoken ? "SignOut" : "Create Account"}
        </button>
        {showmodel && (
          <Auth
            setshowmodel={setshowmodel}
            isSignUp={isSignUp}
            
          />
        )}
      </div>
    </div>
  );
};

export default Home;
