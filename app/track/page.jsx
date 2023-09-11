"use client";
import React, { useState } from 'react';
import ParkingData from '@components/ParkingData';
import Head from 'next/head';
import GeolocationComponent from '../components/GeolocationComponent';
import MappingComponent from '../components/MappingComponent';

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

      <Head>
        <title>Parking Locator</title>
      </Head>

      <h1>Parking Locator</h1>
      <GeolocationComponent onLocationChange={handleLocationChange} />
      {userLocation && (
        <MappingComponent userLocation={userLocation} parkingSpaces={parkingSpaces} />
      )}

      <ParkingData />npm
    </div>
  )
}

export default Page
