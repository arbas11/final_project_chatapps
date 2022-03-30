import axios from "axios";

const GETALLCONTACTUSRL = "http://localhost:3001/api/contact/getallcontact";
// const GETONECONTACTURL = "http://localhost:3001/api/contact/getonecontact";
const ADDCONTACTURL = "http://localhost:3001/api/contact/addcontact";

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
  } catch (e) {
    console.log("error dari service axios", e);
  }
};
