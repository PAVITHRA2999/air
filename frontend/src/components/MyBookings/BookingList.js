import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./BookingList.css";
import { loadUserBookings } from "../../store/bookings";

function BookingList({ userId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookings = useSelector((state) => Object.values(state.bookings));
  const userBookings = bookings.filter((booking) => booking.userId === +userId);

  useEffect(() => {
    dispatch(loadUserBookings(userId));
  }, [dispatch, userId]);

  function convertDate(string) {
    const date = new Date(string);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const dateNeeded = date.toLocaleDateString(undefined, options);
    return dateNeeded;
  }

  return (
    <>
      {userBookings &&
        userBookings.map((booking) => (
          <div
            className="my_booking__container"
            key={`bookinglist` + booking.id}
            onClick={() =>
              history.push(
                `/listings/${booking.Spot.id}/bookings/${booking.id}`
              )
            }
          >
              <img src={booking.Spot.previewImage} alt="booking-spot-preview" />
            <div>
              <h4>{booking.Spot.name}</h4>
              <span>{`${convertDate(booking.startDate)}-${convertDate(
                booking.endDate
              )}`}</span>
              <span>{booking.Spot.address}</span>
              <span>{booking.Spot.city}</span>
              <span>${booking.Spot.price}/night</span>
            </div>
          </div>
        ))}
    </>
  );
}

export default BookingList;
