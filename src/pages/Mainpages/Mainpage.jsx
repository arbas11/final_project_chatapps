import React from 'react'
import MainPageHeader from '../../components/main-page-header/MainPageHeader'
import Chatactive from '../chatlist/Chatlist'
import Chatroom from '../chattingroom/Chatroom'
import Contactinfo from '../contact-info/Contactinfo'
// import Navbar from '../navbar/Navbar'

function Mainpage() {
  return (
    
    <div className='mainpages-container'>
        <div className='mainpages-components'>
        <MainPageHeader />
        <div className='app-component-container'>
        <div className='navbar'>
        </div>
            <Chatactive />
            <Chatroom />
            <Contactinfo />
        </div>
        </div>
    </div>
  )
}

export default Mainpage
