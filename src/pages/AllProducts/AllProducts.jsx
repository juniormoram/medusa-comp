import "./AllProducts.css";
import { useEffect, useState } from "react";
import DataProducts from "/src/components/Products/DataProducts";
import ListProducts from "/src/components/Products/ListProducts";
import Filters from "/src/components/Products/Filters";

const AllProducts = () => {
  const [filters, setFilters] = useState({ category: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = DataProducts.filter((product) => {
    return filters.category === "" || product.category === filters.category;
  });

  return (
    <div className="all-products">
      <Filters filters={filters} setFilters={setFilters} />
      <ListProducts DataProducts={filteredProducts} />
    </div>
  );
};

export default AllProducts;
