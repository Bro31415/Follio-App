import React from 'react';
import './Style/Gallery.css'

function Gallery({ items }) {
  return (
    <div className="portfolio-gallery">
    <a href="/homePage.html" style={{textDecoration:"none"}}><p>Back</p></a>
      <h1>Portfolio Gallery</h1>
      <div className="portfolio-items">
        {items.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img className='single-card' src={URL.createObjectURL(item)} alt={`Portfolio Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;