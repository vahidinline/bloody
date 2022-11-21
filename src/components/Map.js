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
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    />
  );
};

export default Maps;
