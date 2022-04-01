import React, { useState } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";

function ChatBody({ userPhonenum, userLogin, socket }) {
  const [selectedContact, setSelectedContact] = useState({});
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="main__chatbody">
      <ChatList
        userPhonenum={userPhonenum}
        contactSelected={contactSelected}
        setSelectedContact={setSelectedContact}
        setContactSelected={setContactSelected}
      />
      <ChatContent
        userLogin={userLogin}
        userPhonenum={userPhonenum}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
        contactSelected={contactSelected}
        socket={socket}
      />
      <UserProfile
        userLogin={userLogin}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
    </div>
  );
}
export default ChatBody;
