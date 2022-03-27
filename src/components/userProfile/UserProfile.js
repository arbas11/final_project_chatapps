import React, { useState } from "react";
import "./userProfile.css";

function UserProfile({ userLogin, selectedContact, contactSelected }) {
  const [toggeOpen, setToggleOpen] = useState(false);
  const toggleInfo = (e) => {
    setToggleOpen(!toggeOpen);
  };
  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img
            src={
              contactSelected
                ? selectedContact.contactImage
                : userLogin.profilePic
            }
            alt="profile"
          />
        </div>
        <h4>
          {contactSelected
            ? selectedContact.contactName
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
            {contactSelected ? selectedContact.contactStatus : userLogin.status}
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
