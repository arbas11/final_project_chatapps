import axios from "axios";

const ADDHISTORYURL = process.env.REACT_APP_ADD_HISTORY_URL;
const SHOWHISTORYURL = process.env.REACT_APP_SHOW_HISTORY_URL;
console.log(ADDHISTORYURL, SHOWHISTORYURL, "history url");

export const getContactHistory = (userEmail, contactEmail, token) => {
  try {
    const response = axios.post(
      SHOWHISTORYURL,
      {
        userEmail: userEmail,
        contactEmail: contactEmail,
      },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
    return response;
  } catch (e) {
    console.log("error from axios get history", e);
  }
};

export const addToContactHistory = async (historyData, token) => {
  try {
    const response = await axios.post(ADDHISTORYURL, historyData, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return response;
  } catch (e) {
    console.log("error from axios get history", e);
  }
};
