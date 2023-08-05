import axios from "axios";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Chatcontainer from "../components/Chatcontainer";
import { useState,useEffect } from "react";
import {useCookies} from 'react-cookie';





const Dashboard = () => {
  const [cookie,setcookie,removecookie]=useCookies(['user']);
  const[user,setuser]=useState("");
  const[genderuser,setgenderuser]=useState("");
  const userId = cookie.userId;
  const getuser = async () =>{
    try{
      const response = await axios.get('http://localhost:8000/user',{params:{userId}})
      setuser(response.data);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const getgenderuser = async()=>{
    try {
      const response = await axios.get('http://localhost:8000/gender-users', {
          params: {gender: user?.gender_int}
      })
      setgenderuser(response.data)
  } catch (error) {
      console.log(error)
  }

  }

  useEffect(()=>{
    getuser()
    getgenderuser()
  },[user,genderuser])
  console.log(genderuser);


  const characters = [
    {
      name: "ashutosh chaudhary",
      url: "https://i.imgur.com/H07Fxdh.jpeg ",
    },
    {
      name: "ayushi",
      url: "https://i.imgur.com/Gg6BpGn.jpeg",
    },
    {
      name: "abhinav chaudhary",
      url: "https://i.imgur.com/Gg6BpGn.jpeg",
    },
    {
      name: "shridul sharma",
      url: "https://i.imgur.com/oPj4A8u.jpeg",
    },
    {
      name: "ashutosh chaudhary",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "ayushi",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "abhinav chaudhary",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "shridul sharma",
      url: "https://i.imgur.com/dmwjVjG.jpeg",
    },
  ];
  
  const handlematch = (e)=>
  {e.preventDefault();
  console.log(e.target.value);
  }

  return (
    <div className="dashboard">
      <Chatcontainer user={user}/>
      <div className="swiper_container">
        <div className="card_container">
          <Carousel
            showThumbs={false}
            showStatus={false}
            // showArrows={false}
          >
            {characters.map((eachuser) => (
              <>
                <img src={eachuser.url} alt="user" />
              </>
            ))}
          </Carousel>

        </div>
        <div className="getmatch">
        <button id="like" onClick={handlematch} value="rightswipe">LIKE</button>
        <button id="dislike" onClick={handlematch} value="leftswipe">DISLIKE</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
