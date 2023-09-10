import React, { useState } from 'react';
import QRCodeGenerator from './QRCodeGenerator';
import QRCodeScanner from './QRCodeScanner';

const Page = () => {
  const [mode, setMode] = useState('generate'); // 'generate' or 'scan'
  const [qrData, setQRData] = useState(''); // Data for QR code generation

  const toggleMode = () => {
    setMode(mode === 'generate' ? 'scan' : 'generate');
    setQRData(''); // Clear QR code data when switching modes
  };

  return (
    <div className="app">
      <h1>QR Code Generator and Scanner</h1>
      <button onClick={toggleMode}>
        {mode === 'generate' ? 'Switch to Scan Mode' : 'Switch to Generate Mode'}
      </button>
      {mode === 'generate' ? (
        <QRCodeGenerator data={qrData} />
      ) : (
        <QRCodeScanner />
      )}
    </div>
  );
};

export default Page;
