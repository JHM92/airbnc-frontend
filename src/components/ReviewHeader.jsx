import { useState } from "react";
import deleteLogo from "../assets/delete.png";
import Modal from "./Modal";
import warningLogo from "../assets/warning.png";
import { deleteReviewById } from "../../api";

export default function ReviewHeader({
  guest,
  guest_avatar,
  date,
  guest_id,
  user,
  review_id,
  trackDeletedReviews,
}) {
  const [deleteReviewModalIsOpen, setDeleteReviewModalIsOpen] = useState(false);

  const handleDeleteReviewClick = async () => {
    const res = await deleteReviewById(review_id);
    const loader = document.getElementById("delete-review-loader");
    loader.className = "loader";

    if (res.status === 204) {
      trackDeletedReviews();
      setDeleteReviewModalIsOpen(false);
    }
  };

  return (
    <div className="review-header">
      <div className="review-header-user">
        <img className="review-avatar" src={guest_avatar} height="50px" width="50px" />
        <div className="review-header-details">
          <div className="review-guest-name">{guest}</div>
          <div className="review-date">{date}</div>
        </div>
      </div>
      <div className="review-header-delete">
        {user?.user_id === guest_id ? (
          <>
            <button
              className="delete-review-button"
              onClick={(e) => {
                setDeleteReviewModalIsOpen(true);
                e.stopPropagation();
              }}
            >
              <img src={deleteLogo} alt="" />
            </button>

            <Modal
              open={deleteReviewModalIsOpen}
              onClose={() => {
                setDeleteReviewModalIsOpen(false);
              }}
            >
              <div className="confirm-delete-container">
                <img src={warningLogo} alt="" />
                <div className="confirm-delete-message">
                  Are you sure you want to delete this review?
                </div>
                <div className="loader-container">
                  <div id="delete-review-loader" className="loader hidden"></div>
                </div>
                <div className="confirm-delete-buttons-container">
                  <button
                    className="cancel-button"
                    onClick={() => {
                      setDeleteReviewModalIsOpen(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button className="delete-button" onClick={handleDeleteReviewClick}>
                    Delete
                  </button>
                </div>
              </div>
            </Modal>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
