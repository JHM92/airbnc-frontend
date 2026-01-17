import { useEffect, useState } from "react";
import { getUserById, patchUserDetails } from "../../api";
import { useParams } from "react-router";
import editIcon from "../assets/edit-icon.png";
import Review from "./Review";
import Modal from "./Modal";
import FloatingLabelInput from "./FloatingLabelInput";
import warningLogo from "../assets/warning.png";

export default function UserProfile({ loggedInUser, detailsEdited }) {
  const { user_id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [updateDetailsModalIsOpen, setUpdateDetailsModalIsOpen] = useState(false);
  const [confirmUpdateModalIsOpen, setConfirmUpdateModalIsOpen] = useState(false);
  const [trackUpdates, setTrackUpdates] = useState(0);
  const [firstName, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const fetchUser = async () => {
    const { user: retrievedUser } = await getUserById(user_id);
    setUser(retrievedUser);
    setIsLoading(false);
  };

  const memberSince = new Date(user?.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  useEffect(() => {
    setIsLoading(true);
    fetchUser(user_id);
  }, [user_id, trackUpdates]);

  const handleFirstNameInputChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleSurnameInputChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneInputChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCancelUpdateClicked = () => {
    setFirstname("");
    setSurname("");
    setEmail("");
    setPhone("");
    setUpdateDetailsModalIsOpen(false);
  };

  const handleUpdateDetailsClicked = () => {
    setConfirmUpdateModalIsOpen(true);
  };

  const handleConfirmUpdateDetailsClicked = async () => {
    const updatedDetails = {};

    if (firstName !== "") {
      updatedDetails["first_name"] = firstName;
    }

    if (surname !== "") {
      updatedDetails["surname"] = surname;
    }

    if (email !== "") {
      updatedDetails["email"] = email;
    }

    if (phone !== "") {
      updatedDetails["phone"] = phone;
    }
    console.log(updatedDetails);
    if (Object.keys(updatedDetails).length !== 0) {
      const res = await patchUserDetails(user.user_id, updatedDetails);

      if (res.status === 200) {
        setConfirmUpdateModalIsOpen(false);
        setUpdateDetailsModalIsOpen(false);
        setFirstname("");
        setSurname("");
        setEmail("");
        setPhone("");

        setTrackUpdates(trackUpdates + 1);
        detailsEdited();
      }
    } else {
      console.log("no fields changed");
    }
  };

  return (
    <div className="user-profile-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="user-details-container">
          <div className="profile-picture-info-container">
            <img
              height="200px"
              width="200px"
              className="profile-picture"
              src={user.avatar}
              alt=""
            />
            <div className="user-info">
              <div className="user-name">{user.first_name + " " + user.surname}</div>
              <div>Member since: {memberSince}</div>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-label">
              Contact
              {Number(loggedInUser?.user_id) === Number(user_id) ? (
                <>
                  <button
                    className="icon-button"
                    onClick={() => {
                      setUpdateDetailsModalIsOpen(true);
                    }}
                  >
                    <img height="20px" width="20px" src={editIcon} alt="" />
                  </button>
                  <Modal
                    open={updateDetailsModalIsOpen}
                    onClose={() => setUpdateDetailsModalIsOpen(false)}
                  >
                    <div className="update-user-details-modal"></div>
                    <div className="edit-details-container">
                      <FloatingLabelInput
                        label="First Name"
                        width="250"
                        onChange={handleFirstNameInputChange}
                        field={firstName}
                      />
                      <FloatingLabelInput
                        label="Surname"
                        width="250"
                        onChange={handleSurnameInputChange}
                        field={surname}
                      />
                      <FloatingLabelInput
                        label="Email"
                        width="250"
                        onChange={handleEmailInputChange}
                        field={email}
                      />
                      <FloatingLabelInput
                        label="Phone"
                        width="250"
                        onChange={handlePhoneInputChange}
                        field={phone}
                      />
                    </div>

                    <div className="confirm-update-buttons-container">
                      <button className="cancel-button" onClick={handleCancelUpdateClicked}>
                        Cancel
                      </button>
                      <button
                        className="submit-updated-details-button"
                        onClick={handleUpdateDetailsClicked}
                      >
                        Update
                      </button>
                      <Modal
                        open={confirmUpdateModalIsOpen}
                        onClose={() => setConfirmUpdateModalIsOpen(false)}
                      >
                        <div className="confirm-delete-container">
                          <img src={warningLogo} alt="" />
                          <div className="confirm-delete-message">
                            Are you sure you want to save your updates?
                          </div>
                          <div className="loader-container">
                            <div id="delete-review-loader" className="loader hidden"></div>
                          </div>
                          <div className="confirm-delete-buttons-container">
                            <button
                              className="cancel-button"
                              onClick={() => {
                                setConfirmUpdateModalIsOpen(false);
                              }}
                            >
                              Cancel
                            </button>
                            <button
                              className="submit-updated-details-button"
                              onClick={handleConfirmUpdateDetailsClicked}
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </Modal>
                    </div>
                  </Modal>
                </>
              ) : (
                <></>
              )}
            </div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone_number}</div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
}
