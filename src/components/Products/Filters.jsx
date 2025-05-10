import "./Products.css";

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="filters">
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">Todas las categorías</option>
        <option value="Sneakers">Sneakers</option>
        <option value="Sudaderas">Sudaderas</option>
        <option value="T-shirts">T-shirts</option>
      </select>
    </div>
  );
};

export default Filters;
