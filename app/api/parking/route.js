export const GET = (req, res) => {
  const parkingSpace = [
    { id: 1, name: 'Parking Lot A', available: true },
    { id: 2, name: 'Parking Lot B', available: false },
    // Add more parking spaces here
  ];

  try {
    res.status(200).json(parkingSpace);
  } catch (error) {
    console.error('Error fetching parking data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
