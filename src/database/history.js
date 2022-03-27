import Users from "./data.js";

//get user index
export const getUserIndexHist = (userPhonenum) => {
  const userIndex = Users.findIndex((v) => {
    return v.userPhonenum === userPhonenum;
  });
  return userIndex;
};
//get contact index
export const getContactIndex = (userPhonenum, contactPhonenum) => {
  const userIndex = Users.findIndex((v) => {
    return v.userPhonenum === userPhonenum;
  });
  const contactIndex = Users[userIndex].contacts.findIndex((v) => {
    return v.contactNumber === contactPhonenum;
  });
  return contactIndex;
};

//read
//get one contact history
export const findContactHistory = (userPhonenum, contactPhonenum) => {
  const userIndex = getUserIndexHist(userPhonenum);
  const contactIndex = getContactIndex(userPhonenum, contactPhonenum);
  const contactData = Users[userIndex].contacts[contactIndex];
  return contactData.history;
};

//create
//add chat history
export const addContactHistory = (
  userPhonenum,
  contactPhonenum,
  messageData
) => {
  const userIndex = getUserIndexHist(userPhonenum);
  const contactIndex = getContactIndex(userPhonenum, contactPhonenum);
  let contactHist = Users[userIndex].contacts[contactIndex].history;
  if (!contactHist) {
    Users[userIndex].contacts[contactIndex].history = [messageData];
  } else {
    Users[userIndex].contacts[contactIndex].history.push(messageData);
  }
};
