import React, { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
import LoginForm from "./components/login/LoginForm";

function App() {
  const [userPhonenum, setUserPhonenum] = useState("");
  const [userLogin, setUserLogin] = useState({});
  const [chatRoom, setChatRoom] = useState(false);
  const [socket, setSocket] = useState();

  return (
    <div className="__main">
      {chatRoom ? (
        <>
          <Nav />
          <ChatBody
            userPhonenum={userPhonenum}
            userLogin={userLogin}
            socket={socket}
            setSocket={setSocket}
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
