import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Chatcontainer from "../components/Chatcontainer";
const characters = [
  {
    name: "ashutosh chaudhary",
    url: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    name: "ayushi",
    url: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
  },
  {
    name: "abhinav chaudhary",
    url: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?cs=srgb&dl=pexels-harsh-raj-gond-1485031.jpg&fm=jpg",
  },
  {
    name: "shridul sharma",
    url: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    name: "ashutosh chaudhary",
    url: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    name: "ayushi",
    url: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    name: "abhinav chaudhary",
    url: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    name: "shridul sharma",
    url: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
];

const handlematch = (e)=>
{e.preventDefault();
console.log(e.target.value);
}

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Chatcontainer />
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
