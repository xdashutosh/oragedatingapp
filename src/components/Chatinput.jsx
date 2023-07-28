import React from 'react'
import { useState } from 'react'
const Chatinput = () => {
    const [inputvalue,setinputvalue]=useState(null);
  return (
    <div className='input-chat'>
      <input type="text" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)} />
      <input type="submit" />
    </div>
  )
}

export default Chatinput
