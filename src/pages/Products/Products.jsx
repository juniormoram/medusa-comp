import React from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Producto 1",
    price: "$100",
    image: "src/assets/imgs/Carrus1.jpg",
  },
  {
    id: 2,
    name: "Producto 2",
    price: "$200",
    image: "src/assets/imgs/home.jpg",
  },
  {
    id: 3,
    name: "Producto 3",
    price: "$300",
    image: "src/assets/imgs/hom3.webp",
  },
];

const Products = () => {
  return (
    <div className="container-products">
      <h1>Productos</h1>
      <section className="cards-products">
        {products.map((product) => (
          <div key={product.id} className="producto">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
