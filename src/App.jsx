import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AllProducts from "./pages/AllProducts/AllProducts";
import PayDetail from "./pages/PayDetail/PayDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/pay-detail" element={<PayDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
