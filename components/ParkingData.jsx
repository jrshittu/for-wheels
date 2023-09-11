"use client";
import React, { useState, useEffect } from 'react';

const ParkingData = () => {
  const [parkingData, setParkingData] = useState([]);

  useEffect(() => {
    // Fetch data from the API route
    fetch('/api/parking')
      .then((response) => response.json())
      .then((data) => setParkingData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Parking Space Availability</h1>
      <ul>
        {parkingData.map((space) => (
          <li key={space.id}>
            {space.name}: {space.available ? 'Available' : 'Occupied'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingData;
