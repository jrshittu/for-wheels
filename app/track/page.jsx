"use client";

import React, { useState } from "react";
import ParkingData from "@components/ParkingData";
import GeolocationComponent from "@components/GeoLocation";
import MappingComponet from "@components/MappingComponet";

const Page = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [parkingSpaces, setParkingSpaces] = useState([]); // You will fetch this data from your API

  const handleLocationChange = (location) => {
    setUserLocation(location);
    // You can also fetch parking space data here using the user's location
    // For simplicity, we assume you already have parking space data available
  };

  return (
    <div>
      
      <h1>Parking Locator</h1>
      <GeolocationComponent onLocationChange={handleLocationChange} />
      {userLocation !== null ? (
        <MappingComponet userLocation={userLocation} parkingSpaces={parkingSpaces} />
      ) : (
        <p>Loading user location...</p>
      )}

      <ParkingData />
    </div>
  );
};

export default Page;
