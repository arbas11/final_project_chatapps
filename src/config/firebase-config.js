import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

const [auth, setAuth] = useState(
  false || window.localStorage.getItem("auth") === "true"
);
const [token, setToken] = useState("");

useEffect(() => {
  firebase.auth().onAuthStateChanged((userCred) => {
    if (userCred) {
      setAuth(true);
      window.localStorage.setItem("auth", "true");
      userCred.getIdToken().then((token) => {
        setToken(token);
      });
    }
  });
}, []);

const loginWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((userCred) => {
      if (userCred) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");
      }
    });
};
