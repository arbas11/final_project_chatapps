import React, {useState} from 'react'

const dummy =[
    {
        name: "Om Brad",
        status: "Online",
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJBntbqy_AhBhpkcGci8VP79LSwcheGgaj4BEeWLy9pUK3KOy7",
        chat: ["Halo bro kemana aja nih"]
    },
    {
        name: "Tante Angel",
        status: "Offline",
        img: "https://assets.pikiran-rakyat.com/crop/82x27:716x491/x/photo/2021/08/21/340177163.jpg",
        chat: ["Halo apa kabar 😘"]
    },
    {
        name: "Abang Mark",
        status: "Offline",
        img: "https://cdn0-production-images-kly.akamaized.net/i9cTmTHVa75y5zBhO93rpFXsv6c=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2377213/original/046581900_1538977000-Mark_Zuckerberg.jpg",
        chat: ["Siap bro 👍🏻"]
    }
]

function ShowFriend() {
    const [friends, setFriends] = useState(dummy)
  return (
      <>
    { friends.map((v, idx)=> 
    <div key={idx} className='friend-active'>
        <img src={v.img} className="friend-images" alt="User" />
        <div className='friend-active-holder'>
         <h4 className='friend-name'>{v.name}</h4>
         <p className='friend-status'>{v.status}</p>
        </div>
    </div>
  )}
  </>)
}

export default ShowFriend