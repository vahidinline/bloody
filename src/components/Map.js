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
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    />
  );
};

export default Maps;
