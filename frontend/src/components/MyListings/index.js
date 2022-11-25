import { useParams } from "react-router-dom";
import MySpots from "./MySpots";
import SpotModal from "../SpotModal";
import "./MyListings.css";

function MyListings() {
  const { id } = useParams();

  return (
    <div className="spots__landing__container">
      <div className="landing__title">
        <h2>Manage My Listings</h2>
        <div className="create__newSpot">
          <SpotModal spotId="" type="Host new listing" />
        </div>
      </div>
      <div className="listing-created">
        <MySpots id={id} />
      </div>
    </div>
  );
}

export default MyListings;
