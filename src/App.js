import React, { useEffect, useState } from "react";
import "./App.scss";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
import LoginForm from "./components/login/LoginForm";

function App() {
  const [userPhonenum, setUserPhonenum] = useState("");
  const [userLogin, setUserLogin] = useState({});
  const [chatRoom, setChatRoom] = useState(false);
  const [socket, setSocket] = useState();
  const [contactSelected, setContactSelected] = useState(false);

  useEffect(() => {
    if (userPhonenum) {
      socket.on("receive-message", (data) => {});
    }
  }, []);

  return (
    <div className="__main">
      {chatRoom ? (
        <>
          <Nav setContactSelected={setContactSelected} />
          <ChatBody
            userPhonenum={userPhonenum}
            userLogin={userLogin}
            setUserLogin={setUserLogin}
            socket={socket}
            setSocket={setSocket}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          />
        </>
      ) : (
        <LoginForm
          userLogin={userLogin}
          setUserLogin={setUserLogin}
          userPhonenum={userPhonenum}
          setUserPhonenum={setUserPhonenum}
          setChatRoom={setChatRoom}
          setSocket={setSocket}
        />
      )}
    </div>
  );
}

export default App;
