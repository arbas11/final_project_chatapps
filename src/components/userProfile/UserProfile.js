import React, { useState } from "react";
import { deleteContact } from "../../service/contact";
import AlertModal from "../alertModal/AlertModal";
import "./userProfile.css";

function UserProfile({
  userLogin,
  selectedContact,
  contactSelected,
  setContactSelected,
}) {
  const [toggeOpen, setToggleOpen] = useState(false);
  const [error, setError] = useState(false);
  const [openAlertDeleteModal, setOpenAlertDeleteModal] = useState(false);

  const toggleInfo = (e) => {
    setToggleOpen(!toggeOpen);
  };

  const handleDelete = (userNum, contactNum, userId) => {
    deleteContact(userNum, contactNum, userId)
      .then(function (response) {
        setError(false);
        setTimeout(() => {
          setContactSelected(false);
        }, 2000);
      })
      .catch(function (error) {
        if (error) {
          setError(true);
        }
      });
    setOpenAlertDeleteModal(true);
  };
  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img
            src={
              contactSelected
                ? selectedContact.contactData.profilePic
                : userLogin.profilePic
            }
            alt="profile"
          />
        </div>
        <h4>
          {contactSelected
            ? selectedContact.contactData.displayName
            : userLogin.displayName}
        </h4>
        <p>online</p>
      </div>
      <div className={toggeOpen ? "profile__card open" : "profile__card"}>
        <div className="card__header" onClick={toggleInfo}>
          <h4>Information</h4>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="card__content">
          <div>Phone Number:</div>
          <div>
            {contactSelected
              ? selectedContact.contactNumber
              : userLogin.userPhonenum}
          </div>
        </div>
        <div className="card__content">
          <div>status:</div>
          <div>
            {contactSelected
              ? selectedContact.contactData.status
              : userLogin.status}
          </div>
        </div>
        {contactSelected && (
          <>
            <div className="card__content edit-contact">
              <div>edit contact</div>
            </div>
            <div
              onClick={() =>
                handleDelete(
                  userLogin.userPhonenum,
                  selectedContact.contactNumber,
                  selectedContact._id
                )
              }
              className="card__content delete-contact"
            >
              <div>delete contact</div>
              <AlertModal
                openAlertModal={openAlertDeleteModal}
                setOpenAlertModal={setOpenAlertDeleteModal}
                message={
                  error
                    ? "Something went wrong, please try again"
                    : "successfully delete contact!"
                }
                data={{
                  name: selectedContact.contactName,
                  number: selectedContact.contactNumber,
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default UserProfile;
