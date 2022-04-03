import { useEffect, useState } from "react";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const LOGINURL = "http://localhost:3001/api/login";

const firebaseConfig = {
  apiKey: "AIzaSyCLjMssma2A0VgITiHpUzCbCjFsnlLqNns",
  authDomain: "final-project-dibimbing.firebaseapp.com",
  projectId: "final-project-dibimbing",
  storageBucket: "final-project-dibimbing.appspot.com",
  messagingSenderId: "743693470352",
  appId: "1:743693470352:web:2d6b20b134d1ac2bd3a615",
  measurementId: "G-TPEY7Y25FH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export default function useUserAuth() {
  const [userLogin, setUserLogin] = useState({});
  const [isAuth, setIsAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [token, setToken] = useState("");

  const reqUser = async (userEmail, displayName, profilePic) => {
    try {
      const res = await axios.post(
        LOGINURL,
        {
          userEmail: userEmail,
          displayName: displayName,
          profilePic: profilePic,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log("res dari axios request user", res.data);
      setUserLogin(res.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
    return;
  };
  console.log("is auth dari use auth", isAuth);
  useEffect(() => {
    onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        setIsAuth(true);
        window.localStorage.setItem("auth", "true");
        userCred.getIdToken().then((token) => {
          setToken(token);
          console.log("dari get token", token);
        });
      }
    });
  }, []);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result) {
          setIsAuth(true);
          window.localStorage.setItem("auth", "true");
        }
        const displayName = result.user.displayName;
        const userEmail = result.user.email;
        const profilePic = result.user.photoURL;
        reqUser(userEmail, displayName, profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { signInWithGoogle, token, auth, userLogin };
}
