import React, { useState } from "react";
import "./ProductDetail.css";
import Products from "/src/components/Products/Products";
import ProductGallery from "./ProductGallery";
import { Link } from "react-router-dom";

function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("");

  const productImages = [
    "/src/assets/imgs/Detail.webp",
    "/src/assets/imgs/hom3.webp",
    "/src/assets/imgs/Detail.webp",
    "/src/assets/imgs/Detail.webp",
  ];

  return (
    <div className="container-detail">
      <div className="detail-sections">
        <ProductGallery images={productImages} />
        <div className="detail-info">
          <h1>Tee Camisa</h1>
          <br />
          <h5>Tallas</h5>
          <select
            value={selectedSize}
            onChange={(e) => {
              setSelectedSize(e.target.value);
            }}
          >
            <option value="">Selecciona una talla</option>
            <option value="34">34</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
          </select>
          <br />
          <br />
          <p>$$ 450</p>
          <p>Descripción del produc</p>
          <br />
          <Link to="/pay-detail">
            <button>Add to cart</button>
          </Link>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default ProductDetail;
