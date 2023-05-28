import React, { useEffect, useState, useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { useSelector, useDispatch } from "react-redux";
import { fetchPlacesAsync } from "../../redux/places/placesAction";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Places() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({});
  useEffect(() => {
    dispatch(fetchPlacesAsync());
  }, []);

  useEffect(() => {
    setdata(
      state.places.map((pl, i) => ({
        ...pl,
        id: i++,
      }))
    );
  }, [state.places]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY,
  });
  const center = useMemo(
    () => ({
      lat: selectedPlace?.coordinates?.latitude || 0,
      lng: selectedPlace?.coordinates?.longitude || 0,
    }),
    [selectedPlace]
  );

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected pass lat,long from item.coordinates.latitude,item.coordinates.longitude to center fn()
    console.log(item, item.coordinates.latitude, item.coordinates.longitude);
    setSelectedPlace(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.name} {item.address}
        </span>
      </>
    );
  };

  return (
    <>
      <ReactSearchAutocomplete
        items={data}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
      />
      <div className="App">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            <Marker
              position={{
                lat: selectedPlace?.coordinates?.latitude || 0,
                lng: selectedPlace?.coordinates?.longitude || 0,
              }}
              icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
            />{" "}
          </GoogleMap>
        )}
      </div>
    </>
  );
}

export default Places;
