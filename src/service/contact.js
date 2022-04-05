import axios from "axios";

const GETALLCONTACTURL = process.env.REACT_APP_GET_ALL_CONTACT_URL;
const ADDCONTACTURL = process.env.REACT_APP_ADD_CONTACT_URL;
const DELETEONECONTACTURL = process.env.REACT_APP_DELETE_ONE_CONTACT_URL;
const UPDATECONTACTNAMEURL = process.env.REACT_APP_UPDATE_CONTACT_NAME_URL;

export const getUserAllContactData = async (userEmail, token) => {
  try {
    const response = await axios.post(
      GETALLCONTACTURL,
      {
        userEmail: userEmail,
      },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("error dari service axios", e);
  }
};

export const addContactToUser = async (
  userEmail,
  contactEmail,
  contactName,
  token
) => {
  try {
    const response = await axios.post(
      ADDCONTACTURL,
      {
        userEmail: userEmail,
        contactEmail: contactEmail,
        contactName: contactName,
      },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
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

export const deleteContact = (userEmail, contactEmail, userId, token) => {
  return axios.post(
    DELETEONECONTACTURL,
    {
      userEmail: userEmail,
      contactEmail: contactEmail,
      contactId: userId,
    },
    {
      headers: {
        authorization: "Bearer " + token,
      },
    }
  );
};

export const updateContactData = async (
  userEmail,
  contactEmail,
  newContactName,
  token
) => {
  try {
    const response = await axios.post(
      UPDATECONTACTNAMEURL,
      {
        userEmail: userEmail,
        contactEmail: contactEmail,
        newContactName: newContactName,
      },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
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
