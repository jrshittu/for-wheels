"use client";

import React, { useState, useEffect } from 'react';

const ParkingData = () => {
  const [parkingData, setParkingData] = useState([]);

  useEffect(() => {
    const fetchParkingData = () => {
      const data = [
        { id: 1, name: 'Parking Lot A', available: true },
        { id: 2, name: 'Parking Lot B', available: false },
        { id: 3, name: 'Parking Lot C', available: true },
        { id: 4, name: 'Parking Lot D', available: false },
        { id: 5, name: 'Parking Lot E', available: true },
        { id: 6, name: 'Parking Lot F', available: false },
      ];

      setParkingData(data);
    };

    fetchParkingData();
  }, []);

  useEffect(() => {
    // This effect will run whenever parkingData changes
    // You can add any logic here that you want to run when parkingData changes
  }, [parkingData]);

  const handleBookSpace = (id) => {
    // Create a copy of the parkingData array
    const updatedParkingData = [...parkingData];

    // Find the parking space by id
    const spaceToUpdate = updatedParkingData.find((space) => space.id === id);

    // Update the availability to "Occupied"
    if (spaceToUpdate) {
      spaceToUpdate.available = false;
      setParkingData(updatedParkingData);
    }
  };

  return (
    <div className="app bg-white rounded-lg shadow-md p-4">
      <h1 className="text-2xl font-semibold mb-4">Parking Space</h1>
      <ul>
        {parkingData.map((space) => (
          <li key={space.id} className="mb-2">
            <div className="flex justify-between">
              <span className="font-semibold m-4">{space.name}</span>
              <span className={`text-${space.available ? 'green' : 'red'}-500 m-4`}>
                {space.available ? 'Available' : 'Occupied'}
              </span>
              <span className="">
                {space.available ? (
                  <button className='black_btn m-4' onClick={() => handleBookSpace(space.id)}>
                    Book Space
                  </button>
                ) : (
                  false
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingData;
