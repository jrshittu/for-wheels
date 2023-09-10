import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div className="qrcode-scanner">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {scannedData && <p>Scanned Data: {scannedData}</p>}
    </div>
  );
};

export default QRCodeScanner;
