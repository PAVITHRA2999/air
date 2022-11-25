import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadSpotReviews } from "../../store/reviews";
import "./ReviewStars.css";

function ReviewStars({ spotId }) {
  const dispatch = useDispatch();
  const [isloaded, setIsloaded] = useState(false);
  const reviews = useSelector((state) => Object.values(state.reviews));
  const spotReviews = reviews.filter(
    (review) => review.spotId === Number(spotId)
  );

  let ratingSum = 0;
  for (let review of spotReviews) {
    ratingSum += review.stars;
  }
  const avgStarRating = (ratingSum / spotReviews.length).toFixed(1);

  useEffect(() => {
    dispatch(loadSpotReviews(spotId)).then(() => setIsloaded(true));
  }, [dispatch, spotId]);

  return (
    <>
      {isloaded && reviews && (
        <div className="bookings__reviews">
          <span className="avg__rating">
            {avgStarRating === "NaN" ? "New" : avgStarRating}
          </span>
          <i className="fa-solid fa-star"></i>
        </div>
      )}
    </>
  );
}

export default ReviewStars;
