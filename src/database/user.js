import Users from "./data.js";

//read
//show all users
export const showAllUsers = () => {
  return Users;
};

//get user index
export const getUserIndex = (userPhonenum) => {
  const index = Users.findIndex((user) => {
    return user.userPhonenum === userPhonenum;
  });
  return index;
};

//find user by id phone number
export const findUserByPhonenum = (userPhonenum) => {
  const userIndex = getUserIndex(userPhonenum);
  const userData = Users[userIndex];
  return userData;
};

//get user status
export const getUserStatus = (contactNum) => {
  const user = findUserByPhonenum(contactNum);
  return user.status;
};

//get user isOnline
export const getUserIsOnline = (contactNum) => {
  const user = findUserByPhonenum(contactNum);
  return user.isOnline;
};

//create
//create new user
export const createUser = (userPhonenum, displayName, profilePic) => {
  const userToAdd = {
    userPhonenum: userPhonenum,
    displayName: displayName,
    profilePic: profilePic,
  };
  Users.push(userToAdd);
};

//update
//update display name
export const updateDisplayName = (userPhonenum, newDisplayName) => {
  const userIndex = getUserIndex(userPhonenum);
  const { displayName } = Users[userIndex];
  Users[userIndex].displayName = newDisplayName || displayName;
};

//update profile picture
export const updateProfilePic = (userPhonenum, newProfilePic) => {
  const userIndex = getUserIndex(userPhonenum);
  const { profilePic } = Users[userIndex];
  Users[userIndex].profilePic = newProfilePic || profilePic;
};

//update user status
export const updateStatus = (userPhonenum, newStatus) => {
  const userIndex = getUserIndex(userPhonenum);
  const { status } = Users[userIndex];
  Users[userIndex].status = newStatus || status;
};
//update isOnline
export const updateIsOnline = (userPhonenum) => {
  const userIndex = getUserIndex(userPhonenum);
  const currentStatus = Users[userIndex].isOnline;
  Users[userIndex].isOnline = !currentStatus;
};

//delete
export const deleteUser = (userPhonenum) => {
  const userIndex = getUserIndex(userPhonenum);
  Users.splice(userIndex, 1);
};
