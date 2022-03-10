import React from 'react'
import MainPageHeader from '../../components/main-page-header/MainPageHeader'
import Chatactive from '../chatlist/Chatlist'
import Chatroom from '../chattingroom/Chatroom'
import Contactinfo from '../contact-info/Contactinfo'

function Mainpage() {
  return (
    <div className='mainpages-container'>
        <div className='mainpages-components'>
        <MainPageHeader />
        <div className='app-component-container'>
            <Chatactive />
            <Chatroom />
            <Contactinfo />
        </div>
        </div>
    </div>
  )
}

export default Mainpage