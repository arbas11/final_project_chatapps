// GETUSERURL="http://localhost:3001/api/user/getuser"
// CREATEUSERURL="http://localhost:3001/api/user/createuser"
import axios from "axios";

axios
  .post("http://localhost:3001/api/user/getuser", {
    userPhonenum: "0811167540",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
