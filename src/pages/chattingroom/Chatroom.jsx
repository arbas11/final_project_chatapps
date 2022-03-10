import React, { useState } from 'react';
import { IoPaperPlane } from 'react-icons/io5';
import ChatRoomHeader from '../../components/chatting-room/ChatRoomHeader';
import MsgBubble from '../../components/chatting-room/MsgBubble';

const msg = ["test","test","test","test","test","test","test","test","test","test","test","test","test","test","test"]

function Chatroom() {
  const [message, setMessage] = useState("")
  const [messageSend, setMessageSend] = useState([])

  function handleChange(e){
    setMessage(e.target.value)
    console.log(message)
  }
  function handleSend(){
    if(message){
    msg.push(message)
    setMessageSend(msg)
    setMessage('')
    }
  }
  return (
    <div className='chat-room-container'>
      <ChatRoomHeader />
      <div className='chat-box'>
        <MsgBubble 
        messageSend={msg}/>
      </div>
      <div className='message-box'>
        <input type='text' placeholder='type your message' onChange={handleChange} value={message} />
        <button onClick={handleSend}><IoPaperPlane /></button>
      </div>
    </div>
    
  )
}

export default Chatroom