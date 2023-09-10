"use client";

import React, { useState } from 'react';
import QRCodeGenerator from '@components/QRCodeGenerator'; 
import QRCodeScanner from '@components/QRCodeScanner'; 

const Page = () => {
  const [mode, setMode] = useState('generate'); // 'generate' or 'scan'
  const [qrData, setQRData] = useState(''); // Data for QR code generation
  const [scannedData, setScannedData] = useState(null); // Scanned data from QR code

  const toggleMode = () => {
    setMode(mode === 'generate' ? 'scan' : 'generate');
    setQRData('');
    setScannedData(null);
  };

  return (
    <div className="app p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator and Scanner</h1>
      <button
        onClick={toggleMode}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        {mode === 'generate' ? 'Switch to Scan Mode' : 'Switch to Generate Mode'}
      </button>
      {mode === 'generate' ? (
        <QRCodeGenerator data={qrData} />
      ) : (
        <QRCodeScanner setScannedData={setScannedData} />
      )}
      {scannedData && (
        <p className="mt-4 text-green-500">Scanned Data: {scannedData}</p>
      )}
    </div>
    
   
  );
};

export default Page;
