"use client";
import React, { useState, useEffect } from 'react';

const GeolocationComponent = ({ onLocationChange }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          onLocationChange({ latitude, longitude }); // Pass location to parent component
        },
        (geoError) => {
          setError(geoError.message);
        }
      );
    } else {
      setError('Geolocation is not supported in your browser.');
    }
  }, []);

  return (
    <div>
      {userLocation ? (
        <p>
          Your Location: Lat {userLocation.latitude}, Long{' '}
          {userLocation.longitude}
        </p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Fetching your location...</p>
      )}
    </div>
  );
};

export default GeolocationComponent;
