import { useParams } from "react-router-dom";
import BookingList from "./BookingList";
import "./MyBookings.css";

function MyBookings() {
  const { id } = useParams();

  return (
    <div className="booking_landing__list">
      <h2>Trips</h2>
      <div>
        <BookingList userId={id} />
      </div>
    </div>
  );
}

export default MyBookings;
