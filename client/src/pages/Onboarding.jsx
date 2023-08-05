import React from "react";
import Nav from "../components/Nav";
import {useCookies} from 'react-cookie';
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
const Onboarding = () => {
  let navigate = useNavigate();
  const [cookie,setcookie,removecookie]=useCookies(['user']);
  const[formdata,setformdata]=useState(
    {
    user_id:cookie.userId,
    first_name:"",
    dob_day:"",
    dob_month:"",
    dob_year:"",
    show_gender:false,
    gender_identity:"men",
    gender_int:"women",
    url:"",
    aboutme:"",
    matches:[]
  }
  ) 


  const submithandler = async (e) => {
    e.preventDefault();
    try{
      const response =await axios.put('http://localhost:8000/user',{formdata});
const success =response.status === 200;
if(success) navigate('/dashboard');
    }catch(error)
    {console.log(error)}
  };

  const handlechnage = (e) => { 
    const name =e.target.name;
    const value=e.target.type === 'checkbox' ? e.target.checked : e.target.value; 
    console.log(name,value);

    setformdata((prevState)=>(
      {
        ...prevState,
        [name]:value
      }
    ))
  
  };

  console.log(formdata);
  return (
    <div>
      <Nav minimal={true} setshowmodel={() => {}} showmodel={false} />
      <div className="onboarding">
        <h2 className="onboarding-heading ">CREATE ACCOUNT</h2>
        <form onSubmit={submithandler}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              required
              value={formdata.first_name}
              onChange={handlechnage}
              autoComplete ="off"
            />

            <label>Birthday</label>
            <div className="multiple_input">
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="DD"
                required
                value={formdata.dob_day}
                onChange={handlechnage}
              />

              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                required
                value={formdata.dob_month}
                onChange={handlechnage}
              />

              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YY"
                required
                value={formdata.dob_year}
                onChange={handlechnage}
              />
            </div>

            <label>Gender</label>
            <div className="multiple_input">
              <label>Men</label>
              <input
                type="radio"
                id="men"
                name="gender_identity"
                value="men"
                onChange={handlechnage}
                checked={formdata.gender_identity==="men"}
              />
              <label>women</label>
              <input
                type="radio"
                id="women"
                name="gender_identity"
                value="women"
                onChange={handlechnage}
                checked={formdata.gender_identity==="women"}
              />
            </div>
            <label htmlFor="show_gender">Show gender on my profile</label>
            <input
              type="checkbox"
              id="show_gender"
              name="show_gender"
              onChange={handlechnage}
              checked={formdata.show_gender}
            />

            <label>SHOW ME</label>
            <div className="multiple_input">
              <label>Women</label>
              <input
                type="radio"
                id="women_int"
                name="gender_int"
                value="women"
                onChange={handlechnage}
                checked={formdata.gender_int === "women"}
              />
              <label>Men</label>
              <input
                type="radio"
                id="women_int"
                name="gender_int"
                value="men"
                onChange={handlechnage}
                checked={formdata.gender_int==="men"}
              />
            </div>

            <label htmlFor="aboutme">About me</label>
            <input
              type="text"
              id="aboutme"
              name="aboutme"
              required
              placeholder="i love to......."
              autoComplete ="off"
              value={formdata.aboutme}
              onChange={handlechnage}
            />
            <input type="submit" value="submit" />
          </section>

          <section className="photo">
            <label>Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handlechnage}
              required
            />
            <div className="photo_container">
              <img src={formdata.url} alt="profile"/>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
