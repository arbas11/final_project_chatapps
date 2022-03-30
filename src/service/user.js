// GETUSERURL="http://localhost:3001/api/user/getuser"
// CREATEUSERURL="http://localhost:3001/api/user/createuser"
import axios from "axios";

export const createUser = async (userPhonenum, displayName) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/user/createuser",
      {
        userPhonenum: userPhonenum,
        displayName: displayName,
      }
    );
    return response.data;
  } catch (e) {
    console.log("error dari service axios", e);
  }
};

export const getUserByPhoneNum = async (userPhonenum) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/user/getuser",
      {
        userPhonenum: userPhonenum,
      }
    );
    return response.data;
  } catch (e) {
    console.log("error dari service axios", e);
  }
};
