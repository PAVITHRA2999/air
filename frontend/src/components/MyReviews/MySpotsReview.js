import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUserReviews,
  removeReview,
  updateUserReviews,
} from "../../store/reviews";
import { useHistory } from "react-router-dom";
import ReviewModal from "../ReviewsModal";
// import ImageFormModal from '../ImageFormModal';
import "./MySpotsReview.css";

function ReviewListByYou({ id }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const reviews = useSelector((state) => Object.values(state.reviews));
  const reviewsByYou = reviews.filter((review) => review.userId === Number(id));

  useEffect(() => {
    dispatch(updateUserReviews(id)).then(() => setIsLoaded(true));
  }, [dispatch, id]);

  function convertDate(string) {
    const date = new Date(string);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateNeeded = date.toLocaleDateString(undefined, options);
    return dateNeeded;
  }
  return (
    <div>
      {isLoaded &&
        reviewsByYou?.map((review) => (
          <div key={"review" + review.id} className="myreview__container">
            <div className="myreview__body">
              {/* <img src={review.Spot.previewImage} alt='spot-preview' /> */}
              {/* <div className='review-images'>
                            {review.Images.length > 0 ? review.Images.map(image => (<img src={image.url} alt='review-img-ind' />)) : ''}
                        </div> */}
              <div>
                {review.Images.length > 0 ? (
                  review.Images.slice(0, 4).map((image, index) => (
                    <img key={index} src={image.url} alt="review-img-ind" />
                  ))
                ) : (
                  <span className="review__images__error">
                    No images were provided.
                  </span>
                )}
              </div>
              <div
                className="my_review__content"
                onClick={() => history.push(`/listings/${review.spotId}`)}
              >
                <h3>Review for {review.Spot.name}</h3>
                <p>
                  {review.Spot.city}, {review.Spot.state}
                </p>
                <p>
                  {review.stars} <i className="fa-solid fa-star"></i>
                </p>
                <p className="review__date">{convertDate(review.createdAt)}</p>
                <p>{review.review}</p>
              </div>
              <div>
                <ReviewModal
                  user={true}
                  spotId={review.Spot.id}
                  type="Edit"
                  reviewId={review.id}
                />
                <button
                  className="delete_review_button"
                  onClick={() => dispatch(removeReview(review.id))}
                >
                  Delete
                </button>
              </div>
              {/* <div className="review-images">
                {review.Images.length > 0
                  ? review.Images.map((image, index) => (
                      <img key={index} src={image.url} alt="review-img-ind" />
                    ))
                    : ""}
                </div> */}
              {/* <ImageFormModal id={review.id} /> */}
            </div>
          </div>
        ))}
    </div>
  );
}

export default ReviewListByYou;
