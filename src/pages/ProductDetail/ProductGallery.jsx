import React, { useState } from "react";
import "./ProductGallery.css";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="product-gallery-container">
      <div className="product-gallery">
        <div className="gallery-main-image">
          <img
            src={images[selectedImage]}
            alt="Imagen principal del producto"
          />
        </div>
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${selectedImage === index ? "active" : ""}`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image} alt={`Vista ${index + 1} del producto`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
