import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "../../styles/bootstrap.scss";
import "../chatList/chatList.scss";
import { addContactToUser } from "../../service/contact";

function NewContactModal({
  openNewContactModal,
  setOpenNewContactModal,
  userPhonenum,
  setContactAddData,
  setModalAddSuccess,
}) {
  const [contactToAdd, setContactToAdd] = useState("");
  const [contactDisplayName, setContactDisplayName] = useState("");
  const [error, setError] = useState("");

  const addNewContact = async (userNumber, contactNumber, contactName) => {
    if (contactNumber && contactName) {
      await addContactToUser(userNumber, contactNumber, contactName).then(
        (response) => {
          if (response.status > 200) {
            setError(response.message);
          } else if (response.status <= 200) {
            setContactAddData(response.data);
            setOpenNewContactModal(false);
            setModalAddSuccess(true);
          }
        }
      );
      setContactDisplayName("");
      setContactToAdd("");
    }
  };
  return (
    <Modal
      isOpen={openNewContactModal}
      toggle={() => setOpenNewContactModal(!openNewContactModal)}
    >
      <ModalHeader>Add new contact</ModalHeader>
      <ModalBody>
        {error && <div className={"contact-add-error"}>{error}</div>}
        <div className="search_wrap new-contact-input">
          <input
            type="text"
            placeholder="Contact number"
            required
            onChange={(e) => setContactToAdd(e.target.value)}
            value={contactToAdd}
          />
        </div>
        <div className="search_wrap new-contact-input">
          <input
            type="text"
            placeholder="Contact name"
            required
            onChange={(e) => setContactDisplayName(e.target.value)}
            value={contactDisplayName}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <button
          onClick={() => {
            setError("");
            addNewContact(userPhonenum, contactToAdd, contactDisplayName);
          }}
          className="btn btn-submit"
        >
          <span>Add new contact</span>
        </button>
        <button
          onClick={() => {
            setError("");
            setOpenNewContactModal(false);
          }}
          className="btn btn-cancel"
        >
          <span>Cancel</span>
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default NewContactModal;
