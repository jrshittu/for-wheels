import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ data }) => {
  return (
    <div className="qrcode-generator">
      <QRCode value={data} />
    </div>
  );
};

export default QRCodeGenerator;
