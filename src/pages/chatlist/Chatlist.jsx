import React, {useState} from 'react'
import ShowActive from '../../components/chatlist/ShowActive'
import ShowFriend from '../../components/chatlist/ShowFriend'
import ShowGroup from '../../components/chatlist/ShowGroup'

function Chatactive() {
  const [toShow, setToShow] = useState("active")

  return (
    <div className='active-chat-container'>
      <div className='active-chat-nav'>
      <button onClick={()=>{
          setToShow("active")
          console.log(toShow)}}>Active</button>
        <button onClick={()=>{
          setToShow("friend")
          console.log(toShow)}}>Friend</button>
        <button onClick={()=>{
          setToShow("group")
          console.log(toShow)}}>Group</button>
        </div>
        <div className='active-chat'>
          {toShow === "friend" && <ShowFriend /> }
          {toShow === "group" && <ShowGroup /> }
          {toShow === "active" && <ShowActive /> }
        </div>
    </div>
  )
}

export default Chatactive