import React, { useEffect, useState } from "react";
import { getUserAllContacts } from "../../database/contacts";
import "../../styles/bootstrap.scss";
import "./chatList.scss";
import ChatListItems from "./ChatListItems";
import NewContactModal from "../NewContactModal/NewContactModal";

function ChatList({ userPhonenum, setContactSelected, setSelectedContact }) {
  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [contactToAdd, setContactToAdd] = useState("");
  const [contactDisplayName, setContactDisplayName] = useState("");
  const [openNewContactModal, setOpenNewContactModal] = useState(false);

  useEffect(() => {
    setAllContacts(getUserAllContacts(userPhonenum));
  }, [userPhonenum]);

  // const addNewContact = (userNumber, contactNumber, contactName) => {
  //   addContact(userNumber, contactNumber, contactName);
  // };
  return (
    <div className="main__chatlist">
      <button onClick={() => setOpenNewContactModal(true)} className="btn">
        <i className="fa fa-plus"></i>
        <span>Add new contact</span>
      </button>
      <NewContactModal
        openNewContactModal={openNewContactModal}
        setOpenNewContactModal={setOpenNewContactModal}
        userPhonenum={userPhonenum}
        contactDisplayName={contactDisplayName}
        setContactDisplayName={setContactDisplayName}
        contactToAdd={contactToAdd}
        setContactToAdd={setContactToAdd}
      />

      <div className="chatlist__heading">
        <h2>Contacts</h2>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input
            type="text"
            placeholder="Search Here"
            required
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="chatlist__items">
        {allContacts
          .filter((v) => {
            if (searchTerm === "") {
              return v;
            } else if (
              v.contactName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return v;
            }
          })
          .map((v, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  setContactSelected(true);
                  setSelectedContact(v);
                }}
              >
                <ChatListItems
                  index={index}
                  name={v.contactName}
                  animationDelay={0 + 1}
                  active={false ? "active" : ""}
                  isOnline={true ? "active" : ""}
                  image={v.contactImage}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ChatList;
