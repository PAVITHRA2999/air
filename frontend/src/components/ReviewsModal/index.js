import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewForm from "./ReviewForm";
import LoginForm from "../LoginFormModal/LoginForm";
import "./ReviewModal.css";

function ReviewModal({ user, spotId, type, reviewId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="add-review-btn" onClick={() => setShowModal(true)}>
        {type} Review
      </button>
      {showModal && (
        <div>
          <Modal onClose={() => setShowModal(false)}>
            {user ? (
              <ReviewForm
                onClose={() => setShowModal(false)}
                spotId={spotId}
                type={type}
                reviewId={reviewId}
              />
            ) : (
              <LoginForm onClose={() => setShowModal(false)} />
            )}
          </Modal>
        </div>
      )}
    </>
  );
}

export default ReviewModal;
