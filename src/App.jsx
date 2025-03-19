import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Carousel from "./components/Carousel/Carousel";
import Products from "./pages/Products/Products";
import AboutMedu from "./pages/About/AboutMedu";
import Recommen from "./components/Recommen/Recommen";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
        <Header />
        <Home />
        <Products />
        <Carousel />
        <AboutMedu />
        <Recommen />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
