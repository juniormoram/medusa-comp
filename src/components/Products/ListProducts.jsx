import React from "react";
import "./Products.css";

const ListProducts = ({ DataProducts }) => {
  return (
    <div className="container-products">
      <div className="cards-products">
        {DataProducts.length > 0 ? (
          DataProducts.map((product) => (
            <a href=".com" key={product.id} className="products">
              <img src={product.image} alt={product.name} />
              <div className="products-text">
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>{product.category}</div>
              </div>
            </a>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ListProducts;
