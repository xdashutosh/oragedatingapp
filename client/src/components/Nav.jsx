import React from "react";

const Nav = ({ setshowmodel, showmodel, minimal,authtoken ,setisSignUp}) => {
  const clickhandle = () => {
    setshowmodel(true);
    setisSignUp(false);
  };

  return (
    <nav>
      <div className="logo-cont">
        <h1 className="logo">OrageD</h1>
      </div>

      {!authtoken && !minimal && (
        <button className="nav-btn" onClick={clickhandle} disabled={showmodel}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
