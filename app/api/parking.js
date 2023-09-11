export default Space = (req, res) => {
    const parkingSpace = [
        { id: 1, name: 'Parking Lot A', available: true },
        { id: 2, name: 'Parking Lot B', available: false },
        // Add more parking spaces here
      ];

      res.status(200).json(parkingSpace);
}
  