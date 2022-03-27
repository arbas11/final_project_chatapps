import React, { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
import LoginForm from "./components/login/LoginForm";
import axios from "axios";

// const test = (userPhonenum, displayName) => {
//   axios
//     .post("http://localhost:3001/api/user/createuser", {
//       userPhonenum: userPhonenum,
//       displayName: displayName,
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
// test("08000", "budski");

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
