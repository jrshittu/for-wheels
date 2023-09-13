import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ id }) => {
  // You can format the ID or specific data as needed
  const formattedData = `ID: ${id}`;

  return (
    <div className="qrcode-generator">
      <QRCode value={formattedData} />
    </div>
  );
};

export default QRCodeGenerator;
