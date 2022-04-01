import React, { useState } from "react";
import { updateIsLogin } from "../../service/auth";
import { deleteContact, updateContactData } from "../../service/contact";
import { getUserByPhoneNum, updateUserData } from "../../service/user";
import AlertModal from "../alertModal/AlertModal";
import UpdateModal from "../updateModal/UpdateModal";
import "./userProfile.scss";

function UserProfile({
  userLogin,
  setUserLogin,
  selectedContact,
  setSelectedContact,
  contactSelected,
  setContactSelected,
}) {
  const [toggeOpen, setToggleOpen] = useState(false);
  const [error, setError] = useState(false);
  const [openAlertDeleteModal, setOpenAlertDeleteModal] = useState(false);

  const [whatToUpdate, setWhatToUpdate] = useState("");
  const [updateUserModal, setUpdateUserModal] = useState(false);
  const [userNewDisplayName, setUserNewDisplayName] = useState(
    userLogin.displayName
  );
  const [userNewProfilePic, setUserNewProfilePic] = useState(
    userLogin.profilePic
  );
  const [userNewStatus, setUserNewStatus] = useState(userLogin.status);

  const [updateContactModal, setUdpateContactModal] = useState(false);
  const [newContactName, setNewContactName] = useState(
    selectedContact.contactName
  );

  const handleUserUpdate = async () => {
    await updateUserData(
      userLogin.userPhonenum,
      userNewDisplayName,
      userNewProfilePic,
      userNewStatus
    );
    const newUserData = await getUserByPhoneNum(userLogin.userPhonenum);
    setUserLogin(newUserData);
    setUpdateUserModal(false);
  };

  const handleContactUpdate = async () => {
    const newContactData = await updateContactData(
      userLogin.userPhonenum,
      selectedContact.contactNumber,
      newContactName
    );
    setSelectedContact(newContactData);
    setUdpateContactModal(false);
  };
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

  const handleLogout = async () => {
    await updateIsLogin(userLogin.userPhonenum);
  };
  return (
    <div className="main__userprofile">
      {/*update contact modal*/}
      <UpdateModal
        whatToUpdate={whatToUpdate}
        openModal={updateContactModal}
        setOpenModal={setUdpateContactModal}
        firstValue={newContactName}
        setFirstValue={setNewContactName}
        handleFunction={handleContactUpdate}
        data={{
          tittle: "contact",
          first: "contact name",
        }}
      />
      {/*update user modal*/}
      <UpdateModal
        whatToUpdate={whatToUpdate}
        openModal={updateUserModal}
        setOpenModal={setUpdateUserModal}
        firstValue={userNewDisplayName}
        setFirstValue={setUserNewDisplayName}
        secondValue={userNewProfilePic}
        setSecondValue={setUserNewProfilePic}
        thirdValue={userNewStatus}
        setThirdValue={setUserNewStatus}
        handleFunction={handleUserUpdate}
        data={{
          tittle: "user",
          first: "display name",
          second: "profile picture",
          third: "update status",
        }}
      />
      <div
        className="profile__card user__profile__image"
        onClick={
          contactSelected
            ? () => {
                setWhatToUpdate("contact");
                setUdpateContactModal(true);
              }
            : () => {
                setWhatToUpdate("user");
                setUpdateUserModal(true);
              }
        }
      >
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
        <p>
          {contactSelected
            ? selectedContact.contactData.status
            : userLogin.status}
        </p>
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
        {contactSelected ? (
          <>
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
                  tittle: "delete",
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() =>
                handleLogout(
                  userLogin.userPhonenum,
                  selectedContact.contactNumber,
                  selectedContact._id
                )
              }
              className="card__content delete-contact"
            >
              <div>log out</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default UserProfile;
