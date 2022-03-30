import React, { useState } from "react";
import logo from "./../../images/dibimbing.png";
import io from "socket.io-client";
import { createUser, getUserByPhoneNum } from "../../service/user";

function LoginForm({
  setUserLogin,
  userPhonenum,
  setUserPhonenum,
  setChatRoom,
  setSocket,
}) {
  const [alreadyHaveAcc, setAlreadyHaveAcc] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const getUser = async () => {
    const response = await getUserByPhoneNum(userPhonenum);
    setUserLogin(response);
    setChatRoom(true);
    //set data or state if null
  };

  const createUserFunc = async () => {
    const response = await createUser(userPhonenum, displayName);
    setUserLogin(response);
    setChatRoom(true);
    //set data or state if null
  };

  const getPhoneNum = (e) => {
    setUserPhonenum(e.target.value);
  };
  const getDisplayName = (e) => {
    setDisplayName(e.target.value);
  };

  const handleSignin = () => {
    if (userPhonenum !== "") {
      if (userPhonenum !== " ") {
        getUser(userPhonenum);
        setSocket(io("http://localhost:3001", { query: { userPhonenum } }));
      }
    }
  };
  const handleRegister = () => {
    if (userPhonenum && displayName !== "") {
      if (userPhonenum !== " ") {
        createUserFunc(userPhonenum, displayName);
        setSocket(io("http://localhost:3001", { query: { userPhonenum } }));
      }
    }
  };
  return (
    <div className="outer-login">
      <div className="login-body">
        <div className="login-form">
          <p className="login-text">
            <img src={logo} alt="logo dibimbing" className="logo-login"></img>
          </p>
          {alreadyHaveAcc ? (
            <input
              type="text"
              className="login-username"
              placeholder="phone number"
              onChange={getPhoneNum}
              value={userPhonenum}
            />
          ) : (
            <>
              <input
                type="text"
                className="login-username"
                placeholder="phone number"
                onChange={getPhoneNum}
                value={userPhonenum}
              />
              <input
                type="text"
                className="login-password"
                placeholder="display name"
                onChange={getDisplayName}
                value={displayName}
              />
            </>
          )}
          {alreadyHaveAcc ? (
            <button className="login-submit" onClick={handleSignin}>
              Request OTP
            </button>
          ) : (
            <button className="login-submit" onClick={handleRegister}>
              Register
            </button>
          )}

          {alreadyHaveAcc ? (
            <p
              className={"have-account-text"}
              onClick={() => setAlreadyHaveAcc(false)}
            >
              Don't have an account? <button>Join Us</button>{" "}
            </p>
          ) : (
            <p
              className={"have-account-text"}
              onClick={() => setAlreadyHaveAcc(true)}
            >
              Already have an account? <button>Sign in</button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
