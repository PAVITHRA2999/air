import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ReviewStars from "./ReviewStars";
import { addBooking } from "../../store/bookings";
import "./BookingForm.css";
import { useHistory } from "react-router-dom";

function BookingForm({ spotId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const spot = useSelector((state) => state.spots[spotId]);
  const sessionUser = useSelector((state) => state.session.user);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState({});

  const reserve = (e) => {
    e.preventDefault();
    if (sessionUser) {
      setErrors({});
      dispatch(addBooking(spotId, { startDate, endDate }))
        .then((data) => history.push(`/listings/${spotId}/bookings/${data.id}`))
        .catch(async (res) => {
          const data = await res.json();
          if (data) setErrors(data);
        });
    } else return setErrors({ message: "Sign in required" });
  };

  function calDays(start, end) {
    let date1 = new Date(start);
    let date2 = new Date(end);
    let difference = date2.getTime() - date1.getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return totalDays;
  }

  return (
    <div className="booking_form">
      <div className="booking_form__header">
        <div>
          <h3>{`$${spot?.price}`}</h3>
          <span>night</span>
        </div>
        <div>
          <ReviewStars spotId={spotId} />
          {/* <span> {`${' · '}`}</span> */}
          <div className="booking-review-count">{`${spot.numReviews} reviews`}</div>
        </div>
      </div>
      <form onSubmit={reserve} className="booking_form__body">
        <ul>{errors.message}</ul>
        <div>
          <label>CHECK-IN</label>
          <input
            type="date"
            placeholder="Add date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            required
          />
          <label>CHECK-OUT</label>
          <input
            type="date"
            placeholder="Add date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min={startDate}
            required
          />
        </div>
        <div className="form_element">
          <button type="submit">Reserve</button>
        </div>
      </form>
      <div className="price__container">
        <span>Sub-total for your reservation</span>
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
        <div className="service-fee">
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
                Number(spot.price) * calDays(startDate, endDate) * 1.147 +
                200
              ).toFixed(0)}`
            : `$0`}
        </span>
      </div>
    </div>
  );
}

export default BookingForm;
