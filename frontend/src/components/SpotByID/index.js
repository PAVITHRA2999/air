import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadOneSpot } from "../../store/spots";
import Reviews from "../Reviews";
import ReviewModal from "../ReviewsModal";
import "./SpotByID.css";
import BookingForm from "../BookingForm";

function SpotByID() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const spot = useSelector((state) => state.spots[+id]);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(loadOneSpot(id)).then(() => setIsLoaded(true));
  }, [dispatch, id]);

  return (
    isLoaded && (
      <div className="spotsByID__Container">
        <div className="spotsByID__header">
          <h1>{spot.name}</h1>
          <div className="spotByID_details">
            <i className="fa-solid fa-star"></i>
            <span>
              {" "}
              {spot.avgStarRating ? spot.avgStarRating.toFixed(2) : "New"}
            </span>
            <span>{` · `}</span>
            <span>{spot.numReviews} reviews</span>
            <span>{` · `}</span>
            <span>
              <i className="fa-solid fa-award"></i> Superhost
            </span>
            <span>{` · `}</span>
            <span>{spot.city}, </span>
            <span>{spot.state}, </span>
            <span>{spot.country}</span>
          </div>
        </div>
        <div className="spotById__Image">
          <img src={spot.previewImage} alt={spot.id} />
          {spot.images ? (
            spot.images.slice(0, 4).map((image, i) => {
              return (
                <img
                  className={`img__by__id__${i}`}
                  key={"image" + i}
                  src={image.url}
                  alt="spot images"
                />
              );
            })
          ) : (
            <span>No images were provided.</span>
          )}
        </div>
        <div className="spotById_details__container">
          <div>
            <div className="spotById__details__header">
              <h2 className="spotById__host__name">
                Listing hosted by {spot.Owners.firstName} {spot.Owners.lastName}
              </h2>
              <span className="spotById__host__detail">
                3 guests · 1 bedroom · 3 beds · 1 bath
              </span>
            </div>
            <div className="spotById__features__container">
              <div className="spotById__feature__card">
                <div className="feature__card__icon">
                  <i className="fa-solid fa-award fa-xl"></i>
                </div>
                <div className="spotById__feature__content">
                  <h3 className="spotById__feature__title">
                    {spot.Owners.firstName} is a Superhost
                  </h3>
                  <span>
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </span>
                </div>
              </div>
              <div className="spotById__feature__card">
                <div className="feature__card__icon">
                  <i className="fa-solid fa-house-laptop fa-xl"></i>
                </div>
                <div className="spotById__feature__content">
                  <h3 className="spotById__feature__title">
                    Dedicated workspace
                  </h3>
                  <span>{`A common area with wifi that’s well-suited for working.`}</span>
                </div>
              </div>
              <div className="spotById__feature__card">
                <div className="feature__card__icon">
                  <i className="fa-solid fa-door-open fa-xl"></i>
                </div>
                <div className="spotById__feature__content">
                  <h3 className="spotById__feature__title">Self check-in</h3>
                  <span>Check yourself in with the lockbox.</span>
                </div>
              </div>
            </div>
            <div className="spotById__description">
              <h3>Learn more about this listing:</h3>
              <span>{spot.description}</span>
            </div>
            <div className="spotById__amenities">
              <div>
                <i className="fa-solid fa-wifi fa-xl"></i>
                <span>Wifi</span>
              </div>
              <div>
                <i class="fa-solid fa-hand-sparkles fa-xl"></i>
                <span>Cleaning Supplies</span>
              </div>
              <div>
                <i class="fa-solid fa-jug-detergent fa-xl"></i>
                <span>Laundry machine</span>
              </div>
              <div>
                <i className="fa-solid fa-person-swimming fa-xl"></i>
                <span>Pool</span>
              </div>
              <div>
                <i className="fa-solid fa-kitchen-set fa-xl"></i>
                <span>Kitchen</span>
              </div>
              <div>
                <i className="fa-solid fa-chess-board fa-xl"></i>
                <span>Board games</span>
              </div>
              <div>
                <i className="fa-solid fa-wind fa-xl"></i>
                <span>Central air conditioning</span>
              </div>
              <div>
                <i className="fa-solid fa-mug-saucer fa-xl"></i>
                <span>Coffee</span>
              </div>
            </div>
          </div>
          <div className="booking_form__container">
            <BookingForm spotId={spot.id} />
          </div>
        </div>
        <div className="review__byId__container">
          <div className="review_byId_header">
            <div>
              <i className="fa-solid fa-star"></i>
              <span>
                {spot.avgStarRating ? spot.avgStarRating.toFixed(2) : "New"}
              </span>
              <span>{` · `}</span>
              <div>{`${spot.numReviews} reviews`}</div>
            </div>
            <div className="add__review__button">
              <ReviewModal
                user={sessionUser}
                spotId={spot.id}
                type="Add"
                reviewId=""
                reviewList={true}
              />
            </div>
          </div>
          <div className="reviews__body">
            <Reviews spotId={spot.id} />
          </div>
        </div>
      </div>
    )
  );
}

export default SpotByID;
