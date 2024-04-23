import React from 'react';

function PdfDownloadButton({ pdfUrl, fileName }) {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <button onClick={handleClick} className="border border-gray-400 text-gray-800 font-bold py-2 px-4">Download PDF</button>
  );
}

export default PdfDownloadButton;
