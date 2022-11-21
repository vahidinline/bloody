import React from 'react';
import Map from 'react-map-gl';

const Maps = (props) => {
  const { latitude, longitude } = props;
  return (
    <Map
      initialViewState={{
        latitude: latitude,
        longitude: longitude,
        zoom: 8,
      }}
      mapStyle={'mapbox://styles/mapbox/streets-v11'}
      mapboxAccessToken="pk.eyJ1IjoidmFoaWRhZnNoYXJpIiwiYSI6ImNsYXF0N3hoeDFsczAzcHF2cmVyMjFsMGwifQ.4oMHp7v6mRfs0R7rjLdiQQ"
    />
  );
};

export default Maps;
