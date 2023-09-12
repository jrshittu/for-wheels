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
  };

  return (
    <div>
      <h1 className="head_text green_gradient mb-4">Parking Locator</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126834.05801193288!2d3.3292288!3d6.5765376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1694515327364!5m2!1sen!2sng" className="h-450 w-600 b-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <GeolocationComponent onLocationChange={handleLocationChange} />
      {userLocation == null ? (
        <MappingComponet userLocation={userLocation} parkingSpaces={parkingSpaces} />
      ) : (
        <p>Check Available Parking Space</p>
      )}

      <ParkingData />
    </div>
  );
};

export default Page;
