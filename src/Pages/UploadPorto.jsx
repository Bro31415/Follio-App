import React, { useRef } from 'react';

function UploadPorto({ onFileUpload }) {
  const fileInputRef = useRef(null);

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    onFileUpload(file);
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="file-input" />
      <button className="upload-button">Upload</button>
    </div>
  );
}

export default UploadPorto;