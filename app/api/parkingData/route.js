
const parkingData = [
    { id: 1, name: 'Parking Lot A', available: true },
    { id: 2, name: 'Parking Lot B', available: false },
    { id: 3, name: 'Parking Lot C', available: true },
    { id: 4, name: 'Parking Lot D', available: false },
  ];
  
  export default (req, res) => {
    res.status(200).json(parkingData);
  };
  