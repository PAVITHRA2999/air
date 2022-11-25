import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editBooking, loadSpotBookings } from "../../store/bookings";
import "../BookingForm/BookingForm.css";
import "./EditBookingForm.css";

function EditBookingForm({ onClose, spotId, id }) {
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spots[spotId]);
  const sessionUser = useSelector((state) => state.session.user);
  const booking = useSelector((state) => state.bookings[id]);

  const [startDate, setStartDate] = useState(booking.startDate.split(" ")[0]);
  const [endDate, setEndDate] = useState(booking.endDate.split(" ")[0]);
  const [errors, setErrors] = useState({});

  const reserve = (e) => {
    e.preventDefault();
    if (sessionUser) {
      setErrors({});
      dispatch(editBooking(id, { startDate, endDate }))
        .then(() => onClose())
        .then(() => dispatch(loadSpotBookings(spotId)))
        .catch(async (res) => {
          const data = await res.json();
          if (data) setErrors(data);
        });
    } else return setErrors({ message: "Please Login" });
  };

  function calDays(start, end) {
    let date1 = new Date(start);
    let date2 = new Date(end);
    let difference = date2.getTime() - date1.getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return totalDays;
  }

  return (
    <div className="edit_booking__container">
      <div>
        <span>Edit Booking</span>
        <button onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <form onSubmit={reserve}>
        <ul>{errors.message}</ul>
        <div className="edit_date__input">
          <div>
            <label>Check-in:</label>
            <input
              type="date"
              placeholder="Select date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>
          <div>
            <label>Check-out:</label>
            <input
              type="date"
              placeholder="Select date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
              required
            />
          </div>
        </div>
        <div className="edit_date__button">
          <button type="submit">Submit Changes</button>
        </div>
      </form>
      <div className="booking__price">
        <span>New sub-total</span>
        <div>
          <div>
            {startDate && endDate && calDays(startDate, endDate) > 0
              ? `$${spot.price} x ${calDays(startDate, endDate)} nights`
              : `$${spot.price} x 0 night`}
          </div>
          <div>
            {startDate && endDate && calDays(startDate, endDate) > 0
              ? `$${(Number(spot.price) * calDays(startDate, endDate)).toFixed(
                  0
                )}`
              : `$0`}
          </div>
        </div>
        <div>
          <span>Cleaning fee</span>
          <span>$200</span>
        </div>
        <div>
          <span>Service fee</span>
          <span>
            {startDate && endDate && calDays(startDate, endDate) > 0
              ? `$${(
                  Number(spot.price) *
                  calDays(startDate, endDate) *
                  0.15
                ).toFixed(0)}`
              : `$0`}
          </span>
        </div>
      </div>
      <div className="total__price">
        <span>Total before taxes</span>
        <span>
          {startDate && endDate && calDays(startDate, endDate) > 0
            ? `$${(
                Number(spot.price) * calDays(startDate, endDate) * 1.15 +
                200
              ).toFixed(0)}`
            : `$0`}
        </span>
      </div>
    </div>
  );
}

export default EditBookingForm;
