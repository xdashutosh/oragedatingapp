import React from 'react'
import Chatheader from './Chatheader'
import Chatsdisplay from './Chatsdisplay'
import Matchesdisplay from './Matchesdisplay'
// import { useState } from 'react'
const Chatcontainer = ({user}) => {
    // const [matchstate,setmatchstate]=useState(false);
    const matchstate =false;
  return (

    <div className='chat-container'>
      <Chatheader user={user}/>
      <div>
        <button className="optionchat">Matches</button>
        <button className="optionchat">Chats</button>
      </div>
      {matchstate?<Matchesdisplay/>:<Chatsdisplay/>}
    </div>
  )
}

export default Chatcontainer
