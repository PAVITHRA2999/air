import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadSpots } from "../../store/spots";
import "./Spots.css";
import ReviewStars from "./ReviewStars";

function SpotList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const spots = useSelector((state) => Object.values(state.spots));

  useEffect(() => {
    dispatch(loadSpots());
  }, [dispatch]);

  return (
    <div className="spotContainer">
      {spots &&
        spots.map((spot) => (
          <div key={spot.id} to={`/spots/${spot.id}`}>
            <div
              className="spotCard"
              key={spot.id}
              onClick={() => history.push(`/listings/${spot.id}`)}
            >
              <img
                className="spot__img"
                src={spot.previewImage}
                alt="previewImage"
              />
              <div className="spot-info-container">
                <div className="spot-details">
                  <div>{`${spot.city}, ${spot.state}`}</div>
                  <div className="spot-price">
                    <span>${spot.price}</span>night
                  </div>
                </div>
                <div className="spot-review">
                  <ReviewStars spotId={spot.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SpotList;
