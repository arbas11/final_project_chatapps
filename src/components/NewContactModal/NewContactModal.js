import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "../../styles/bootstrap.scss";
import "../chatList/chatList.scss";
import { addContact } from "../../database/contacts";

function NewContactModal({
  openNewContactModal,
  setOpenNewContactModal,
  userPhonenum,
  contactDisplayName,
  setContactDisplayName,
  contactToAdd,
  setContactToAdd,
}) {
  const addNewContact = (userNumber, contactNumber, contactName) => {
    addContact(userNumber, contactNumber, contactName);
    setOpenNewContactModal(false);
    setContactDisplayName("");
    setContactToAdd("");
  };
  return (
    <Modal
      isOpen={openNewContactModal}
      toggle={() => setOpenNewContactModal(!openNewContactModal)}
      external={
        <button
          className="close"
          onClick={function noRefCheck() {}}
          style={{ position: "absolute", right: "15px", top: "15px" }}
        >
          ×
        </button>
      }
    >
      <ModalHeader>Add new contact</ModalHeader>
      <ModalBody>
        <div className="search_wrap">
          <input
            type="text"
            placeholder="Contact number"
            required
            onChange={(e) => setContactToAdd(e.target.value)}
            value={contactToAdd}
          />
        </div>
        <div className="search_wrap">
          <input
            type="text"
            placeholder="Display name"
            required
            onChange={(e) => setContactDisplayName(e.target.value)}
            value={contactDisplayName}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <button
          onClick={() => {
            addNewContact(userPhonenum, contactToAdd, contactDisplayName);
          }}
          className="btn"
        >
          <span>Add new contact</span>
        </button>
        <button onClick={() => setOpenNewContactModal(false)} className="btn">
          <span>Cancel</span>
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default NewContactModal;
