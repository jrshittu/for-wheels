import React, { useState } from 'react';
import QrReader from 'reactjs-qr-reader';

const QRCodeScanner = ({ setScannedData }) => {
  const [error, setError] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (err) => {
    setError(err);
  };

  return (
    <div className="qrcode-scanner">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default QRCodeScanner;
