import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserSpots, removeSpot } from "../../store/spots";
import { updateUserReviews } from "../../store/reviews";
import { useHistory } from "react-router-dom";
import SpotModal from "../SpotModal";
import "./MySpots.css";

function MySpots({ id }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const spots = useSelector((state) => Object.values(state.spots));
  const spotsByYou = spots.filter((spot) => spot.ownerId === Number(id));

  useEffect(() => {
    dispatch(loadUserSpots(id)).then(() => setIsLoaded(true));
  }, [dispatch, id]);

  function dateToString(string) {
    const date = new Date(string);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateNeeded = date.toLocaleDateString(undefined, options);
    return dateNeeded;
  }
  return (
    <div>
      {isLoaded &&
        spotsByYou.map((spot) => (
          <div key={`mylistings` + spot.id} className="mylisting_card">
            <div>
              <img src={spot.previewImage} alt="spot preview" />
            </div>
            <div
              className="card__details"
              onClick={() => history.push(`/listings/${spot.id}`)}
            >
              <h3>{spot.name}</h3>
              <ul>
                <li>{spot.address}</li>
                <li>
                  {spot.city}, {spot.state}
                </li>
                <li>
                  <span>${spot.price}</span> night
                </li>
                <li>
                  Last Updated: Last Update: {dateToString(spot.updatedAt)}
                </li>
              </ul>
            </div>
            <div className="edit__listing__container">
              <SpotModal spotId={spot.id} type="Edit Listing" />
              <button
                className="delete-spots"
                onClick={() =>
                  dispatch(removeSpot(spot.id)).then(
                    dispatch(updateUserReviews(id))
                  )
                }
              >
                Delete Listing
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
export default MySpots;
