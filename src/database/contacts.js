import Users from "./data.js";
import { findUserByPhonenum, getUserIndex } from "./user.js";

//read
//get all user contact
export const getUserAllContacts = (userPhonenum) => {
  const userIndex = getUserIndex(userPhonenum);
  const allContactData = Users[userIndex].contacts;
  return allContactData;
};

//get all user contact name, number, image only
export const getUserContactNamePhone = (userPhonenum) => {
  const allContactData = getUserAllContacts(userPhonenum);
  let result = [];
  const data = allContactData.map((v) => {
    return {
      contactNumber: v.contactNumber,
      contactName: v.contactName,
      contactImage: v.contactImage,
    };
  });
  result.push(data);
  return result;
};

//get one contact index number
export const getOneContactIndex = (userPhonenum, contactNumberTofind) => {
  const userIndex = getUserIndex(userPhonenum);
  const contactIndex = Users[userIndex].contacts.findIndex((user) => {
    return user.contactNumber === contactNumberTofind;
  });
  return contactIndex;
};

//get one contact data
export const getOneContact = (userPhonenum, contactNumberTofind) => {
  const userIndex = getUserIndex(userPhonenum);
  const contactIndex = Users[userIndex].contacts.findIndex((user) => {
    return user.contactNumber === contactNumberTofind;
  });
  const result = Users[userIndex].contacts[contactIndex];
  return result;
};

//create
export const addContact = (userPhonenum, toAddPhonenum, contactName) => {
  //notes have to check if user exixst
  const userToAdd = findUserByPhonenum(toAddPhonenum);
  const contactToAdd = {
    contactNumber: userToAdd ? userToAdd.userPhonenum : toAddPhonenum,
    contactName: userToAdd ? userToAdd.displayName : contactName,
    contactImage: userToAdd
      ? userToAdd.profilePic
      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  };
  const userIndex = getUserIndex(userPhonenum);
  if (Users[userIndex].contacts) {
    Users[userIndex].contacts.push(contactToAdd);
  } else Users[userIndex].contacts = [contactToAdd];
};

//update
//update contact name
export const editContactName = (
  userPhonenum,
  toEditContact,
  newContactName
) => {
  const userIndex = getUserIndex(userPhonenum);
  const contactIndex = getOneContactIndex(userPhonenum, toEditContact);
  const { contactName } = Users[userIndex].contacts[contactIndex];
  Users[userIndex].contacts[contactIndex].contactName =
    newContactName || contactName;
};

//delete
export const deleteContact = (userPhonenum, toDelContact) => {
  let user = findUserByPhonenum(userPhonenum);
  const newContact = user.contacts.filter((v) => {
    return v.contactNumber !== toDelContact;
  });
  user.contacts = newContact;
  return "delete sucess";
};
