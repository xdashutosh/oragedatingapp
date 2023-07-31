import React from "react";
import Nav from "../components/Nav";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
const Onboarding = () => {
const[formdata,setformdata]=useState(
  {
    user_id:"",
    first_name:"",
    dob_day:"",
    dob_month:"",
    dob_year:"",
    show_gender:false,
    gender_identity:"men",
    gender_int:"women",
    email:"",
    url:"",
    aboutme:"",
    matches:[]
  }
)

let navigate=useNavigate( );
 const datasubmit = (e)=>{
// e.preventDefault();
let datasub=true
if(datasub) navigate('/dashboard');
 }

  const submithandler = (e) => {
    e.preventDefault();
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
                checked={formdata.gender_identity}
                onChange={handlechnage}
              />
              <label>women</label>
              <input
                type="radio"
                id="women"
                name="gender_identity"
                value="women"
                checked={formdata.gender_identity}
                onChange={handlechnage}
              />
            </div>
            <label htmlFor="show_gender">Show gender on my profile</label>
            <input
              type="checkbox"
              id="show_gender"
              name="show_gender"
              checked={formdata.show_gender}
              onChange={handlechnage}
            />

            <label>SHOW ME</label>
            <div className="multiple_input">
              <label>Men</label>
              <input
                type="radio"
                id="women_int"
                name="gender_int"
                value="women"
                checked={formdata.gender_int}
                onChange={handlechnage}
              />
              <label>women</label>
              <input
                type="radio"
                id="women_int"
                name="gender_int"
                value="men"
                checked={formdata.gender_int}
                onChange={handlechnage}
              />
            </div>

            <label htmlFor="aboutme">About me</label>
            <input
              type="text"
              id="aboutme"
              name="aboutme"
              required
              placeholder="i love to......."
              value={formdata.aboutme}
              onChange={handlechnage}
            />
            <input type="submit" value="submit" onClick={datasubmit} />
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
