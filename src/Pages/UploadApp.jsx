import React, { useState } from 'react';
import UploadPorto from './UploadPorto';
import Gallery from './Gallery'

function App() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  const handleFileUpload = (file) => {
    // Add the uploaded file to the portfolioItems array in state
    setPortfolioItems([...portfolioItems, file]);
  };

  return (
    <div>
      <Gallery items={portfolioItems} />
      <UploadPorto onFileUpload={handleFileUpload} />
    </div>
  );
}

export default App;