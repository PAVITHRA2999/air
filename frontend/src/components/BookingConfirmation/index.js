import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { loadSpotBookings, removeBooking } from "../../store/bookings";
import { loadOneSpot } from "../../store/spots";
import EditBookingModal from "../EditBookingModal";

import "./BookingConfirmation.css";

function BookingConfirmation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId, id } = useParams();
  const [isLoaded, setIsloaded] = useState(false);
  const spot = useSelector((state) => state.spots[spotId]);
  const booking = useSelector((state) => state.bookings[id]);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(loadSpotBookings(spotId));
    dispatch(loadOneSpot(spotId)).then(() => setIsloaded(true));
  }, [dispatch, spotId]);

  const cancelBooking = (e) => {
    e.preventDefault();
    return dispatch(removeBooking(id)).then(() =>
      history.push(`/users/${user.id}/bookings`)
    );
  };

  function convertDate(string) {
    const date = new Date(string);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const dateNeeded = date.toLocaleDateString(undefined, options);
    return dateNeeded;
  }

  return (
    <>
      {isLoaded && booking && (
        <div className="booking__confirmation">
          <div className="booking_confirmation__info">
            <div className="booking_confirmation__info_header">
              <div>
                <div>{`Your stay at ${spot.Owners.firstName}'s place`}</div>
                <Link to={`/users/${user.id}/bookings`}>
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
              </div>
              <img src={spot.previewImage} alt="booking-conf-previewImg" />
            </div>
            <div className="booking_confirmation__details">
              <div>
                <div>
                  <p>Check-in:</p>
                  <div>{convertDate(booking.startDate)}</div>
                </div>
                <div>
                  <p>Check-out:</p>
                  <div>{convertDate(booking.endDate)}</div>
                </div>
              </div>
              <div
                className="booking_showListing"
                onClick={() => history.push(`/listings/${spotId}`)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Show listing</span>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${spot.lat}%2C${spot.lng}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <span>Get directions</span>
              </a>
              {new Date(booking.endDate) >= new Date() ? (
                <EditBookingModal spotId={spotId} id={id} />
              ) : (
                ""
              )}
              {new Date(booking.startDate) >= new Date() ? (
                <button
                  className="booking_cancel__button"
                  onClick={cancelBooking}
                >
                  <i className="fa-solid fa-ban fa-xl"></i>
                  <span>Cancel Booking</span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="booking_confirmation__map">
            {/* {map} */}
            <iframe
              src={`https://www.google.com/maps?q=${spot.lat},${spot.lng}&hl=es;&output=embed`}
              title={spot.id}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingConfirmation;
