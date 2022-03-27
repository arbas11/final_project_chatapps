import React, { useState, useRef, useEffect } from "react";

import "./chatContent.scss";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import logo from "../../images/dibimbing.png";
import { addContactHistory, findContactHistory } from "../../database/history";
import { getOneContact } from "../../database/contacts";

function ChatContent({
  userLogin,
  userPhonenum,
  selectedContact,
  setSelectedContact,
  contactSelected,
  socket,
}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageHist, setMessageHist] = useState([]);
  const scrollNewChat = useRef(null);
  const [receiveMsg, setReceiveMsg] = useState(0);
  const [sendMsg, setSendMsg] = useState(0);

  useEffect(() => {}, [currentMessage]);

  useEffect(() => {
    if (selectedContact.history) {
      scrollNewChat.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
    return;
  }, [currentMessage, socket, receiveMsg]);
  useEffect(() => {
    if (contactSelected) {
      const newData = getOneContact(
        userPhonenum,
        selectedContact.contactNumber
      );
      setSelectedContact(newData);
      if (selectedContact.history) {
        const history = findContactHistory(
          userPhonenum,
          selectedContact.contactNumber
        );
        setMessageHist(history);
      }
    }
  }, [selectedContact, socket, messageHist, sendMsg]);

  useEffect(() => {
    socket.on("receive-message", (data) => {
      addContactHistory(data.recepient, data.author, data);
      setReceiveMsg((prev) => setReceiveMsg(prev + 1));
    });
    return () => {
      socket.off("receive-message", (data) => {
        console.log("dari use effect receive dalam off");
      });
    };
  }, [socket]);

  const time = () => {
    const date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    currentHours = ("0" + currentHours).slice(-2);
    currentMinutes = ("0" + currentMinutes).slice(-2);
    return currentHours + ":" + currentMinutes;
  };

  const capitalise = (msg) => {
    const firstLetter = msg[0].toUpperCase();
    return firstLetter + msg.slice(1);
  };
  const getMessage = (e) => {
    setCurrentMessage(e.target.value);
  };
  const sendMessage = async () => {
    setSendMsg((prev) => setSendMsg(prev + 1));
    if (currentMessage !== "") {
      const capsMsg = capitalise(currentMessage);
      const messageData = {
        recepient: selectedContact.contactNumber,
        author: userPhonenum,
        message: capsMsg,
        time: time(),
      };
      await socket.emit("send-message", messageData);
      addContactHistory(
        userPhonenum,
        selectedContact.contactNumber,
        messageData
      );
      setCurrentMessage("");
    }
  };

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        {contactSelected ? (
          <>
            <div className="blocks">
              <div className="current-chatting-user">
                <Avatar
                  isOnline="active"
                  image={selectedContact.contactImage}
                />
                <p>{selectedContact.contactName}</p>
              </div>
            </div>

            <div className="blocks">
              <div className="settings">
                <button className="btn-nobg">
                  <i className="fa fa-cog"></i>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="chat-content-logo">
            <img src={logo} alt="logo dibimbing"></img>
          </div>
        )}
      </div>
      {selectedContact.history && (
        <div className="content__body">
          <div className="chat__items">
            <div>
              <ChatItem
                userPhonenum={userPhonenum}
                contactName={selectedContact.contactName}
                animationDelay={0 + 1}
                messageHist={messageHist}
                contactImage={selectedContact.contactImage}
                userImage={userLogin.profilePic}
              />
            </div>
          </div>
          <div ref={scrollNewChat}></div>
        </div>
      )}
      {contactSelected && (
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={getMessage}
              value={currentMessage}
              onKeyPress={(e) => {
                e.key === "Enter" && sendMessage();
              }}
            />
            <button
              className="btnSendMsg"
              id="sendMsgBtn"
              onClick={sendMessage}
            >
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatContent;
