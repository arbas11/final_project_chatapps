import React from 'react'

const dummy = {
  name: "Om Brad",
  status: "Online",
  img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJBntbqy_AhBhpkcGci8VP79LSwcheGgaj4BEeWLy9pUK3KOy7",
  chat: ["Halo bro kemana aja nih"]
}

function Contactinfo() {
  return (
    <div className='contact-info-container'>
        <img src={dummy.img} className="friend-images" alt="User" />
        <div className='friend-contact-holder'>
         <h4 className='friend-contact-name'>{dummy.name}</h4>
         <p className='friend-contact-status'>{dummy.status}</p>
        </div>
    </div>
  )
}

export default Contactinfo