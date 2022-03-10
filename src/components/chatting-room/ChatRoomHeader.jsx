import React from 'react'

const dummy = {
    name: "Om Brad",
    status: "Online",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJBntbqy_AhBhpkcGci8VP79LSwcheGgaj4BEeWLy9pUK3KOy7",
    chat: ["Halo bro kemana aja nih"]
}
function ChatRoomHeader() {
  return (
    <div className='chat-room-header'>
        <img src={dummy.img} className="friend-images" alt="User" />
        <div className='friend-active-holder'>
         <h4 className='friend-name'>{dummy.name}</h4>
         <p className='friend-status'>{dummy.status}</p>
        </div>
    </div>
  )
}

export default ChatRoomHeader