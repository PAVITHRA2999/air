import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadSpotReviews, removeReview } from "../../store/reviews";
import ReviewModal from "../ReviewsModal";
import "./Reviews.css";

function Reviews({ spotId }) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const reviews = useSelector((state) => Object.values(state.reviews));
  const reviewUser = useSelector((state) => state.session.user);
  const spotReviews = reviews.filter(
    (review) => review.spotId === Number(spotId)
  );

  useEffect(() => {
    dispatch(loadSpotReviews(spotId)).then(() => setIsLoaded(true));
  }, [dispatch, spotId]);

  const dateToString = (data) => {
    const date = new Date(data);
    const dateParams = { year: "numeric", month: "long" };
    return date.toLocaleDateString(undefined, dateParams);
  };

  return (
    <div className="all__reviews__container">
      {isLoaded &&
        spotReviews.slice(0, 6).map((review) => {
          return (
            <div key={`review` + review.id} className="review_container">
              <div className="review_container__header">
                <div>
                <p>{review.User.firstName}</p>
                <span>{dateToString(review.updatedAt)}</span>
                </div>
                { reviewUser && reviewUser.id === review.User.id && (
                  <div className="spot_byid__review__button">
                    <ReviewModal
                      user={true}
                      spotId={spotId}
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
                )}
              </div>
              <div>{review.review}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Reviews;
