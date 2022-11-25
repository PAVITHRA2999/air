import React, { useState } from "react";
import { addSpot, editSpot } from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import "./SpotForm.css";

function SpotForm({ spotId, onClose, type }) {
  const dispatch = useDispatch();
  const listingToEdit = useSelector((state) => state.spots[spotId]);
  const [address, setAddress] = useState(
    listingToEdit ? listingToEdit.address : ""
  );
  const [city, setCity] = useState(listingToEdit ? listingToEdit.city : "");
  const [state, setState] = useState(listingToEdit ? listingToEdit.state : "");
  const [country, setCountry] = useState(
    listingToEdit ? listingToEdit.country : ""
  );
  const [lat, setLat] = useState(
    listingToEdit && listingToEdit !== 0 ? listingToEdit.lat : ""
  );
  const [lng, setLng] = useState(listingToEdit ? listingToEdit.lng : "");
  const [name, setName] = useState(listingToEdit ? listingToEdit.name : "");
  const [description, setDescription] = useState(
    listingToEdit ? listingToEdit.description : ""
  );
  const [price, setPrice] = useState(listingToEdit ? listingToEdit.price : "");
  const [prevImage, setPrevImage] = useState(
    listingToEdit ? listingToEdit.previewImage : []
  );
  // const [images, setImages] = useState(
  //   listingToEdit ? listingToEdit.previewImage : []
  // );
  const [errors, setErrors] = useState([]);
  // const prevFile = (e) => {
  //   const picArr = Object.values(e.target.files);
  //   if (picArr.length > 0) setPrevImage(picArr);
  // };
  // const imageFiles = (e) => {
  //   const picArr = Object.values(e.target.files);
  //   if (picArr.length > 0) setImages(picArr);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const newSpot = {
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImage: prevImage,
      // images,
    };
    if (spotId) {
      dispatch(editSpot(spotId, newSpot))
        .then(() => onClose())
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    } else {
      dispatch(addSpot(newSpot))
        .then(() => onClose())
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
  };

  return (
    <div className="spots__form">
      <div className="spots_form__title">
        <span>{type}</span>
        <button className="spots_form__close_btn" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <ul className="spot_form__errors">
          {errors.map((error, i) => (
            <li key={`spoterror` + i}>{error}</li>
          ))}
        </ul>
        <div className="form-element">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>Latitude</label>
          <input
            type="number"
            value={lat}
            max="90"
            min="-90"
            step="0.000001"
            onChange={(e) => setLat(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>Longitude</label>
          <input
            type="number"
            value={lng}
            max="180"
            min="-180"
            step="0.000001"
            onChange={(e) => setLng(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>Name</label>
          <input
            type="text"
            value={name}
            maxLength="50"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>Price</label>
          <input
            type="number"
            value={price}
            min="0.01"
            step="0.01"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="spot_images__entries">
          <div className="form-element">
            <label>Preview image url</label>
            <input type="text" maxLength="250" value={prevImage} onChange={(e)=>setPrevImage(e.target.value)} />
            {/* <input type="file" maxLength="250" onChange={prevFile} /> */}
          </div>
          {/* <div className="form-element">
            <label>Additional Images</label>
            <input
              id="file-input"
              className="form-input"
              type="file"
              multiple
              accept="image/*, .png .jpg .jpeg"
              onChange={imageFiles}
            />
          </div> */}
        </div>
        <div className="form-element description">
          <label>Description</label>
          <textarea
            rows="3"
            cols="53"
            value={description}
            maxLength="250"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-element__submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SpotForm;
