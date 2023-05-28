import axios from "axios";
import {
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
} from "./placesTypes";

export const fetchPlacesRequest = () => {
  return { type: FETCH_PLACES_REQUEST };
};

export const fetchPlacesSuccess = (places) => {
  return { type: FETCH_PLACES_SUCCESS, payload: places };
};

export const fetchPlacesFailure = (error) => {
  return { type: FETCH_PLACES_FAILURE, error: error };
};

export const fetchPlacesAsync = () => {
  return (dispatch) => {
    dispatch(fetchPlacesRequest());
    setTimeout(() => {
      dispatch(
        fetchPlacesSuccess([
          {
            name: "Central Park",
            address:
              "59th to 110th Street, from Central Park West to 5th Avenue, New York, NY 10022",
            coordinates: {
              latitude: 40.785091,
              longitude: -73.968285,
            },
            rating: 4.7,
            types: ["Park", "Tourist Attraction"],
            website: "https://www.centralparknyc.org/",
          },
          {
            name: "Eiffel Tower",
            address: "Champ de Mars, 5 Avenue Anatole, Paris, France",
            coordinates: {
              latitude: 48.8584,
              longitude: 2.2945,
            },
            rating: 4.6,
            types: ["Landmark", "Observation Deck"],
            website: "https://www.toureiffel.paris/",
          },
          {
            name: "Sydney Opera House",
            address: "Bennelong Point, Sydney, NSW 2000, Australia",
            coordinates: {
              latitude: -33.8568,
              longitude: 151.2153,
            },
            rating: 4.8,
            types: ["Performing Arts Theater", "Concert Hall"],
            website: "https://www.sydneyoperahouse.com/",
          },
          {
            name: "Golden Gate Bridge",
            address:
              "Golden Gate Bridge, San Francisco, CA 94129, United States",
            coordinates: {
              latitude: 37.8199,
              longitude: -122.4783,
            },
            rating: 4.7,
            types: ["Bridge", "Landmark"],
            website: "https://www.goldengatebridge.org/",
          },
          {
            name: "Taj Mahal",
            address:
              "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
            coordinates: {
              latitude: 27.175,
              longitude: 78.0422,
            },
            rating: 4.7,
            types: ["Mausoleum", "Tourist Attraction"],
            website: "https://www.tajmahal.gov.in/",
          },
        ])
      );
    }, 2000);
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((d) => {
    //     dispatch(fetchPlacesSuccess(d.data));
    //   })
    //   .catch((e) => {
    //     dispatch(fetchPlacesFailure(e));
    //   });
  };
};
