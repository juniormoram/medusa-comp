import React from "react";
import "./Products.css";
import DataProducts from "./DataProducts";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  // const Products = () => {
  const latestProducts = products.slice(-4);

  return (
    <div className="container-products">
      <h1 className="container-products-title">Productos</h1>
      <div className="cards-products">
        {latestProducts.map((product) => (
          <a href=".com" key={product._id} className="products">
            <img src={product.imageUrl} alt={product.name} />
            <div className="products-text">
              <div>{product.name}</div>
              <div>$ {product.price}</div>
              <div>{product.category}</div>
            </div>
          </a>
        ))}
      </div>
      <br />
      <br />
      <Link to="/all-products">
        <button className="products-btn">Ver todos los productos</button>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default Products;
