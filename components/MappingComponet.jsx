// components/MappingComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const MappingComponent = ({ userLocation, parkingSpaces }) => {
  const mapStyle = {
    height: '400px',
  };

  return (
    <MapContainer
      center={userLocation}
      zoom={15}
      style={mapStyle}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {parkingSpaces.map((space) => (
        <Marker
          key={space.id}
          position={[space.latitude, space.longitude]}
        ></Marker>
      ))}
      <Marker position={userLocation}></Marker>
    </MapContainer>
  );
};

export default MappingComponent;
