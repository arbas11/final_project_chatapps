import axios from "axios";

const LOGOUTURL = "http://localhost:3001/api/logout";

export const updateIsLogin = async (userNumber) => {
  try {
    const response = await axios.post(LOGOUTURL, {
      userNumber: userNumber,
    });
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
