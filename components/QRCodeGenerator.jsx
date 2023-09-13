"use state";
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ id }) => {
  // You can format the ID or specific data as needed
  const [ inputValue, setInputValue ] = useState("");

  return (
    <>
      <div className="qrcode-generator">
        <QRCode value={inputValue} />
      </div>

      <input className='mt-2 border-4 border-black border-solid ' type='text' onChange={(e) => setInputValue(e.target.value)}>

      </input>
    </>
  );
};

export default QRCodeGenerator;
