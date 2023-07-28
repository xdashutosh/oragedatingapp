import React from "react";

const Nav = ({ setshowmodel, showmodel, minimal }) => {
  const clickhandle = () => {
    setshowmodel(true);
  };
  const authtoken = false;
  return (
    <navbar>
      <div className="logo-cont">
        <h1 className="logo">OrageD</h1>
      </div>

      {!authtoken && !minimal && (
        <button className="nav-btn" onClick={clickhandle} disabled={showmodel}>
          Log in
        </button>
      )}
    </navbar>
  );
};

export default Nav;
