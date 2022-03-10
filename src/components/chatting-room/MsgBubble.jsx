import React, { useState } from 'react'

function MsgBubble({messageSend}) {
  return (
      <>
     { messageSend.map((v, idx)=>
    <div key={idx} className='bubble-container'>
        <div className='bubble-msg'>{v}
        </div>
        <div className='bubble-msg-status'>send</div>
        </div>)}
    </>
  )
}

export default MsgBubble