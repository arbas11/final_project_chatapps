import React, { useState } from 'react'

const dummy =[
    {
        name: "Belajar Javascript",
        status: "Online",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        chat: ["Halo bro kemana aja nih"]
    },
    {
        name: "Gang Developers",
        status: "Offline",
        img: "https://gmedia.net.id/upload/foto_artikel/20191205pBzhqjYG8x.png",
        chat: ["Halo apa kabar 😘"]
    },
    {
        name: "Maju Bersama",
        status: "Offline",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZEZt8RYCUDQDkVxYdsEJhEp129mLcVQnVzB2l8G3ASclzTjaU1sVJvtMrTKBnyasoiHQ&usqp=CAU",
        chat: ["Siap bro 👍🏻"]
    }
]

function ShowGroup() {
    const [groups, setGroups] = useState(dummy)
    return (
        <>
      { groups.map((v, idx)=> 
      <div key={idx} className='group-active'>
          <img src={v.img} className="group-images" alt="User" />
          <div className='group-active-holder'>
           <h4 className='group-name'>{v.name}</h4>
           <p className='group-status'>{v.status}</p>
          </div>
      </div>
    )}
    </>)
}

export default ShowGroup