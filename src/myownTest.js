import {
  addContact,
  deleteContact,
  editContactName,
  getOneContact,
  getOneContactIndex,
  getUserAllContact,
  getUserContactNamePhone,
} from "./database/contacts";
import {
  createUser,
  deleteUser,
  findUserByPhonenum,
  getUserIndex,
  getUserIsOnline,
  getUserStatus,
  showAllUsers,
  updateDisplayName,
  updateIsOnline,
  updateProfilePic,
  updateStatus,
  updateUser,
} from "./database/user";
import {
  addContactHistory,
  findContactHistory,
  getContactIndex,
  getUserIndexHist,
} from "./database/history";

// console.log("ini find user by phone num", findUserByPhonenum("0811167540"));
// createUser(
//   "0812345",
//   "bambang",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGVfUF6P_Rzwa-yvbsOt5xwXt0ZRjloRHUg&usqp=CAU"
// );
// console.log("ini semua users", showAllUsers());
// console.log("ini index yg baru masuk", getUserIndex("0812345"));
// console.log(
//   "ini find user by phone num yg baru 0812345",
//   findUserByPhonenum("0812345")
// );

// console.log("contact database");
// console.log("ini contact 0811167540 awal", getUserAllContact("0811167540"));
// addContact("0811167540", "0812345", "bambang cihuy");
// console.log(
//   "ini contact 0811167540 setelah add",
//   getUserAllContact("0811167540")
// );
// console.log("ini contact 0812345 awal", getUserAllContact("0812345"));
// addContact("0812345", "0811167540", "ario baskoro");
// console.log("ini contact 0812345 setelah add", getUserAllContact("0812345"));
// console.log(
//   "ini find user by phone num 0812345 setelah add contact",
//   findUserByPhonenum("0812345")
// );

// console.log("ini delete contact");
// deleteContact("0811167540", "08170167540");
// console.log("ini setelah didelete 0811167540", getUserAllContact("0811167540"));
// console.log("ini delete users");
// deleteUser("08170167540");
// console.log("show all users after dete", showAllUsers());
// console.log(findUserByPhonenum("0811167540"));
// const empty = "test";
// updateDisplayName("0811167540", empty);
// updateProfilePic("0811167540", empty);
// console.log(findUserByPhonenum("0811167540"));

// console.log(
//   "ini show one contact index",
//   getOneContactIndex("0811167540", "0812345")
// );
// console.log("ini show one contact", getOneContact("0811167540", "0812345"));

// console.log("ini is online awl", getUserStatus("0811167540"));
// console.log(updateStatus("0811167540", "jalanin aja dulu"));
// console.log("ini is online akhir", getUserStatus("0811167540"));
// console.log(updateStatus("0811167540", "apa lo liat2"));
// console.log("ini is online akhir", getUserStatus("0811167540"));
// console.log("ini contact awl", getOneContact("0811167540", "08170167540"));
// editContactName("0811167540", "08170167540", "si kampret");
// console.log("ini contact akhir", getOneContact("0811167540", "08170167540"));
// editContactName("0811167540", "08170167540", "si ganteng");
// console.log("ini contact akhir", getOneContact("0811167540", "08170167540"));
// console.log(updateStatus("0811167540", "apa lo liat2"));
// console.log("ini is online akhir", getUserStatus("0811167540"));
// console.log("user index dlam history", getUserIndexHist("0811167540"));
// console.log("ini contact index", getContactIndex("0811167540", "0812345"));
console.log(
  "ini contact history sebelum add history",
  findContactHistory("0812345", "0811167540")
);
console.log(
  "ini show one contact sebelum add",
  getOneContact("0812345", "0811167540")
);

const time = () => {
  const date = new Date();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  currentHours = ("0" + currentHours).slice(-2);
  currentMinutes = ("0" + currentMinutes).slice(-2);
  return currentHours + ":" + currentMinutes;
};
for (let i = 0; i < 5; i++) {
  const messageData = {
    recepient: "0812345",
    author: "0811167540",
    message: "dude nyoba dude",
    time: time(),
  };
  addContactHistory("0812345", "0811167540", messageData);
}

console.log(
  "ini contact history setelah add history",
  findContactHistory("0812345", "0811167540")
);
console.log(
  "ini show one contact setelah add",
  getOneContact("0812345", "0811167540")
);
