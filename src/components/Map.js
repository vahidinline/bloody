import React from 'react';
import Map from 'react-map-gl';

const Maps = () => {
  return (
    <Map
      initialViewState={{
        latitude: 32.4279,
        longitude: 53.688,
        zoom: 8,
      }}
      mapStyle={'mapbox://styles/mapbox/streets-v11'}
      mapboxAccessToken="pk.eyJ1IjoidmFoaWRhZnNoYXJpIiwiYSI6ImNsYXF0N3hoeDFsczAzcHF2cmVyMjFsMGwifQ.4oMHp7v6mRfs0R7rjLdiQQ"
    />
  );
};

export default Maps;
