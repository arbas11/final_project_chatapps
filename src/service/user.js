import axios from "axios";

const GETUSERURL = process.env.REACT_APP_GET_USER_URL;
const CREATEUSERURL = process.env.REACT_APP_CREATE_USER_URL;
const UPDATEUSERDATAURL = process.env.REACT_APP_UPDATE_USER_DATA_URL;

export const createUser = async (userEmail, displayName) => {
  try {
    const response = await axios.post(CREATEUSERURL, {
      userEmail: userEmail,
      displayName: displayName,
    });
    return response.data;
  } catch (e) {
    console.log("error dari service axios", e);
  }
};

export const getUserByEmail = async (userEmail, token) => {
  try {
    const response = await axios.post(
      GETUSERURL,
      {
        userEmail: userEmail,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("error dari service axios", e);
  }
};

export const updateUserData = async (
  userEmail,
  newDisplayName,
  newProfilePic,
  newUserStatus,
  token
) => {
  try {
    const response = await axios.post(
      UPDATEUSERDATAURL,
      {
        userEmail: userEmail,
        displayName: newDisplayName,
        profilePic: newProfilePic,
        userStatus: newUserStatus,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
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
