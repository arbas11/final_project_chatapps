import React, { useState, useRef, useEffect } from "react";

import "./chatContent.scss";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import logo from "../../images/dibimbing.png";
import useHistoryQuery from "../../hooks/useHistory";
import InfiniteScroll from "react-infinite-scroll-component";
import useScrollToStart from "react-scroll-to-bottom/lib/hooks/useScrollToStart";

function ChatContent({
  userLogin,
  userPhonenum,
  selectedContact,
  contactSelected,
  socket,
}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageHist, setMessageHist] = useState([]);
  const scrollNewChat = useRef(null);
  const [sendMsg, setSendMsg] = useState(0);
  const [query, setQuery] = useState(10);
  const [skip, setSkip] = useState(0);
  const scrollToStart = useScrollToStart();

  const { history, hasMore } = useHistoryQuery(
    userPhonenum,
    selectedContact.contactNumber,
    query,
    skip,
    sendMsg
  );
  console.log("chat content rendering");

  useEffect(() => {
    if (contactSelected && selectedContact) {
      setSkip(0);
    }
  });
  useEffect(() => {
    if (contactSelected) {
      scrollNewChat.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
    return;
  }, [contactSelected, history, sendMsg, selectedContact]);

  // const getHistory = async (userPhonenum, contactNumber) => {
  //   const history = await getContactHistory(userPhonenum, contactNumber);
  //   setMessageHist(history.data);
  // };
  // useEffect(() => {
  //   if (contactSelected && selectedContact) {
  //     getHistory(userPhonenum, selectedContact.contactNumber);
  //   }
  // });

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
  const send = async (message) => {
    await socket.emit("send-message", message);
  };
  useEffect(() => {
    socket.on("receive-message", (data) => {});
  }, [socket]);
  const sendMessage = () => {
    setSkip(0);
    scrollToStart();
    console.log("set skip dari send message", skip);
    setSendMsg((prev) => prev + 1);
    if (currentMessage !== "" && currentMessage !== " ") {
      const capsMsg = capitalise(currentMessage);
      const messageData = {
        owner: userPhonenum,
        contact: selectedContact.contactNumber,
        author: userPhonenum,
        recepient: selectedContact.contactNumber,
        message: capsMsg,
        time: time(),
      };
      send(messageData);
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
                  image={selectedContact.contactData.profilePic}
                />
                <p>
                  {selectedContact.contactName
                    ? selectedContact.contactName
                    : selectedContact.contactData.displayName}
                </p>
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
      {contactSelected && (
        <div className="content__body">
          <div className="chat__items">
            <div ref={scrollNewChat}></div>
            <div
              id="scrollableDiv"
              style={{
                height: 300,
                overflow: "auto",
                display: "flex",
                flexDirection: "column-reverse",
              }}
            >
              {/*Put the scroll bar always on the bottom*/}
              <InfiniteScroll
                dataLength={history.length}
                next={() => setSkip((prev) => prev + 10)}
                style={{ display: "flex", flexDirection: "column-reverse" }}
                inverse={true} //
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableDiv"
              >
                <ChatItem
                  sendMsg={sendMsg}
                  userPhonenum={userPhonenum}
                  selectedContact={selectedContact}
                  contactNumber={selectedContact.contactNumber}
                  contactName={selectedContact.contactName}
                  animationDelay={0 + 1}
                  history={history}
                  setMessageHist={setMessageHist}
                  contactImage={selectedContact.contactData.profilePic}
                  userImage={userLogin.profilePic}
                />
              </InfiniteScroll>
            </div>
          </div>
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
