"use client";
import React, { useState, useEffect } from 'react';

const ParkingData = () => {
  const [parkingData, setParkingData] = useState([]);

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        const response = await fetch('/api/parking');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setParkingData(data);
      } catch (error) {
        console.error('Error fetching parking data:', error);
      }
    };

    fetchParkingData();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h1 className="text-2xl font-semibold mb-4">Parking Space Availability</h1>
      <ul>
        {parkingData.map((space) => (
          <li key={space.id} className="mb-2">
            <div className="flex justify-between">
              <span className="font-semibold">{space.name}</span>
              <span className={`text-${space.available ? 'green' : 'red'}-500`}>
                {space.available ? 'Available' : 'Occupied'}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingData;
