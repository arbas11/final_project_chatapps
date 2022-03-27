import React from 'react'
import { findUserByPhonenum } from '../../database/user';
import logo from "./../../images/dibimbing.png";
import io from "socket.io-client";

function LoginForm({setUserLogin, userPhonenum, setUserPhonenum, setChatRoom,setSocket}) {
  const getUser = async (userPhonenum)=>{
    const user = await findUserByPhonenum(userPhonenum)
    return user;
  }
  const getPhoneNum = (e)=>{
    setUserPhonenum(e.target.value)
  }
    const joinChat = () => {
      if(userPhonenum !== ""){
        if(userPhonenum !== " "){
          getUser(userPhonenum).then((data)=>{
            setUserLogin(data)
            setChatRoom(true)
          })
          setSocket(io("http://localhost:3001", { query: { userPhonenum } }))
        }
      };
    }
  return (
    <div className='outer-login'>
    <div className='login-body'>
        <div className="login-form">
  <p className="login-text">
    <img src={logo} alt="logo dibimbing" className='logo-login'></img>
  </p>
  <input type="text" className="login-username" placeholder="phone number" onChange={getPhoneNum} value={userPhonenum} />
  <input type="text" className="login-password" placeholder="display name" />
  <input type="text" className="login-password" placeholder="profile picture" />
  <button className="login-submit" onClick={joinChat}>register</button>
</div>
<div className="underlay-photo"></div>
<div className="underlay-black"></div> 
</div>
</div>
  )
}

export default LoginForm