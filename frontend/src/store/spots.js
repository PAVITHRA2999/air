import { csrfFetch } from "./csrf";

const GET_SPOTS = "spots/getAllSpots";
const GET_ONE_SPOT = "spots/getOneSpot";
const CREATE_SPOT = "spots/createSpot";
const DELETE_SPOT = "spots/deleteSpot";

const getAllSpots = (payload) => {
  return {
    type: GET_SPOTS,
    payload,
  };
};

const getOneSpot = (payload) => {
  return {
    type: GET_ONE_SPOT,
    payload,
  };
};

const createSpot = (payload) => {
  return {
    type: CREATE_SPOT,
    payload,
  };
};

const deleteSpot = (id) => {
  return {
    type: DELETE_SPOT,
    id,
  };
};

export const loadSpots = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots");
  const data = await response.json();
  dispatch(getAllSpots(data.Spots));
  return response;
};

export const loadOneSpot = (id) => async (dispatch) => {
  const response = await fetch(`/api/spots/${id}`);
  if (response.ok) {
    const data = await response.json();
    // console.log('fetch from backend get1spot data----', data)
    dispatch(getOneSpot(data));
    return response;
  }
};

export const loadUserSpots = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${id}/spots`);
  const data = await response.json();
  dispatch(getAllSpots(data.Spots));
  return response;
};

export const addSpot = (newSpot) => async (dispatch) => {
  const {
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
    previewImage,
  } = newSpot;
  // let formData = new FormData();
  // formData.append("address", address);
  // formData.append("city", city);
  // formData.append("state", state);
  // formData.append("country", country);
  // formData.append("lat", lat);
  // formData.append("lng", lng);
  // formData.append("name", name);
  // formData.append("description", description);
  // formData.append("price", price);
  // // formData.append("prevImg", prevImage);
  // // formData.append("images", images);
  // console.log(formData);

  // if (images && images.length !== 0) {
  //   for (let i = 0; i < images.length; i++) {
  //     formData.append("images", images[i]);
  //   }
  // }
  const response = await csrfFetch("/api/spots", {
    method: "POST",
    body: JSON.stringify({
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImage,
    }),
  });
  const data = await response.json();
  dispatch(createSpot(data));
  return response;
};

export const editSpot = (spotId, spot) => async (dispatch) => {
  const {
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
    previewImage,
  } = spot;
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "PUT",
    body: JSON.stringify({
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImage,
    }),
  });
  const data = await response.json();
  dispatch(createSpot(data));
  return response;
};

export const removeSpot = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}`, {
    method: "DELETE",
  });
  dispatch(deleteSpot(id));
  return response;
};

const initialState = {};

const spotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SPOTS:
      newState = Object.assign({}, state);
      action.payload.map((spot) => (newState[spot.id] = spot));
      return newState;
    case GET_ONE_SPOT:
      // newState = Object.assign({}, state);
      // newState[action.payload.id] = action.payload;
      // return newState;
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case CREATE_SPOT:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_SPOT:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
