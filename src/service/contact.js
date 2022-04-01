import axios from "axios";

const GETALLCONTACTUSRL = "http://localhost:3001/api/contact/getallcontact";
// const GETONECONTACTURL = "http://localhost:3001/api/contact/getonecontact";
const ADDCONTACTURL = "http://localhost:3001/api/contact/addcontact";
const DELETEONECONTACTURL =
  "http://localhost:3001/api/contact/deleteonecontact";
const UPDATECONTACTNAMEURL =
  "http://localhost:3001/api/contact/updatecontactname";

export const getUserAllContactData = async (userPhonenum) => {
  try {
    const response = await axios.post(GETALLCONTACTUSRL, {
      userPhonenum: userPhonenum,
    });
    return response.data;
  } catch (e) {
    console.log("error dari service axios", e);
  }
};

export const addContactToUser = async (
  userPhonenum,
  contactNumber,
  contactName
) => {
  try {
    const response = await axios.post(ADDCONTACTURL, {
      userPhonenum: userPhonenum,
      contactNumber: contactNumber,
      contactName: contactName,
    });
    return response;
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data.message,
      };
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
};

export const deleteContact = (userNumber, contactNumber, userId) => {
  return axios.post(DELETEONECONTACTURL, {
    userNumber: userNumber,
    contactNumber: contactNumber,
    contactId: userId,
  });
};

export const updateContactData = async (
  userPhonenum,
  contactNumber,
  newContactName
) => {
  try {
    const response = await axios.post(UPDATECONTACTNAMEURL, {
      userPhonenum: userPhonenum,
      contactNumber: contactNumber,
      newContactName: newContactName,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
    console.log("error dari service axios", error);
  }
};
