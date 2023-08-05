import React from 'react'
import {useNavigate} from 'react-router-dom';
import {useCookies} from 'react-cookie';
const Chatheader = ({user}) => {
  const [cookie,setcookie,removecookie]=useCookies(['user']);
  let naviagte = useNavigate();
const logout = ()=>{
  removecookie('userId',cookie.userId);
  removecookie('Authtoken',cookie.Authtoken);
  naviagte('/');
  window.location.reload();
}
  return (
    <div className="chat-cont-header">
<div className="profile-name">

    <div className='username'>
      {user.first_name}
    </div>
</div>
<i className="log-out-icon"onClick={logout}>⬅</i>
    </div>
  )
}

export default Chatheader
 