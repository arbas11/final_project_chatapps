import React, { useEffect, useState } from "react";
import "../../styles/bootstrap.scss";
import "./chatList.scss";
import ChatListItems from "./ChatListItems";
import NewContactModal from "../NewContactModal/NewContactModal";
import { getUserAllContactData } from "../../service/contact";
import AlertModal from "../alertModal/AlertModal";

function ChatList({
  userPhonenum,
  contactSelected,
  setContactSelected,
  setSelectedContact,
}) {
  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openNewContactModal, setOpenNewContactModal] = useState(false);
  const [modalAddSuccess, setModalAddSuccess] = useState(false);
  const [contactAddData, setContactAddData] = useState({});

  const getContacts = async (userNum) => {
    const data = await getUserAllContactData(userNum);
    setAllContacts(data);
  };
  useEffect(() => {
    if (userPhonenum) {
      getContacts(userPhonenum);
    }
  }, [userPhonenum, openNewContactModal, contactSelected]);

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
        setContactAddData={setContactAddData}
        setModalAddSuccess={setModalAddSuccess}
      />
      <AlertModal
        openAlertModal={modalAddSuccess}
        setOpenAlertModal={setModalAddSuccess}
        message={"contact added"}
        data={{
          name: contactAddData.name,
          number: contactAddData.number,
          tittle: "update",
        }}
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
            } else {
              return v.contactName
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
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
                  name={
                    v.contactName ? v.contactName : v.contactData.displayName
                  }
                  image={v.contactData.profilePic}
                  status={v.contactData.status}
                  animationDelay={0 + 1}
                  active={false ? "active" : ""}
                  isOnline={v.contactData.isOnline ? "active" : ""}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ChatList;
