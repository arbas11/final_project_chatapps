import axios from "axios";
const ADDHISTORYURL = "http://localhost:3001/api/history/addhistory";
const SHOWHISTORYURL = "http://localhost:3001/api/history/showuserhistory";

export const getContactHistory = (userNumber, contactNumber) => {
  try {
    const response = axios.post(SHOWHISTORYURL, {
      userNumber: userNumber,
      contactNumber: contactNumber,
    });
    return response;
  } catch (e) {
    console.log("error from axios get history", e);
  }
};

export const addToContactHistory = async (historyData) => {
  try {
    const response = await axios.post(ADDHISTORYURL, historyData);
    return response;
  } catch (e) {
    console.log("error from axios get history", e);
  }
};
