import React, { useState } from "react";
import { addReview, editReview, loadSpotReviews } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { loadOneSpot, loadSpots } from "../../store/spots";
import Stars from "./Stars";
import "./ReviewForm.css";

function ReviewForm({ spotId, onClose, type, reviewId, reviewList }) {
  const dispatch = useDispatch();
  const reviewToEdit = useSelector((state) => state.reviews[reviewId]);
  const [stars, setStars] = useState(reviewToEdit ? reviewToEdit.stars : 5);
  const [review, setReview] = useState(reviewToEdit ? reviewToEdit.review : "");
  // const [imageURL, setImageURL] = useState(reviewToEdit? reviewToEdit.Images[0].url:'')
  const [focus, setFocus] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if(reviewId & reviewList) {
      dispatch(editReview(reviewId, { stars, review }))
      .then(() => onClose())
      .then(() => dispatch(loadOneSpot(spotId)))
      .then(() => dispatch(loadSpotReviews(spotId)))
      .catch(async (res) => {
        const data = await res.json();
        if (data) setErrors(Object.values(data.errors));
      });
    }
    else if (reviewId) {
      dispatch(editReview(reviewId, { stars, review }))
        .then(() => onClose())
        .catch(async (res) => {
          const data = await res.json();
          if (data) setErrors(Object.values(data.errors));
        });
    } else {
      dispatch(addReview(spotId, { stars, review }))
        .then(() => onClose())
        // .then(()=> dispatch(loadSpots()))
        .then(() => dispatch(loadOneSpot(spotId)))
        .then(() => dispatch(loadSpotReviews(spotId)))
        .catch(async (res) => {
          const data = await res.json();
          if (data) setErrors(Object.values(data.errors));
        })
    }
  };

  return (
    <div className="review__form__container">
      <div className="review__form__header">
        <span>{type} Review</span>
        <button className="review__form__close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors &&
            errors.map((error) => (
              <li key={error} className="error__form">
                {error}
              </li>
            ))}
        </ul>
        <div>
          <Stars
            setStars={setStars}
            setFocus={setFocus}
            stars={stars}
            focus={focus}
          />
        </div>
        {/* <div className="review_image__container">
          <label>Image url</label>
          <input
            type="text"
            value={imageURL}
            maxLength="250"
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div> */}
        <div className="review_text__container">
          <label>Tell us more about your experience:</label>
          <textarea
            className="edit_review_textarea"
            maxLength="250"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="review__form__button__container">
          <button className="review__form__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
