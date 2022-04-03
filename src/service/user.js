import axios from "axios";

const GETUSERURL = "http://localhost:3001/api/user/getuser";
const CREATEUSERURL = "http://localhost:3001/api/user/createuser";
const UPDATEUSERDATAURL = "http://localhost:3001/api/user/updatenameandpic";

export const createUser = async (userPhonenum, displayName) => {
  try {
    const response = await axios.post(CREATEUSERURL, {
      userPhonenum: userPhonenum,
      displayName: displayName,
    });
    return response.data;
  } catch (e) {
    console.log("error dari service axios", e);
  }
};

export const getUserByPhoneNum = async (userPhonenum) => {
  try {
    const response = await axios.post(
      GETUSERURL,
      {
        userPhonenum: userPhonenum,
      },
      {
        headers: {
          Authorization: "Bearer ",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("error dari service axios", e);
  }
};

export const updateUserData = async (
  userPhonenum,
  newDisplayName,
  newProfilePic,
  newUserStatus
) => {
  try {
    const response = await axios.post(UPDATEUSERDATAURL, {
      userPhonenum: userPhonenum,
      displayName: newDisplayName,
      profilePic: newProfilePic,
      userStatus: newUserStatus,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
  }
};
