import React from "react";
import "./Home.css";
import Carousel from "/src/components/Carousel/Carousel";
import Products from "/src/components/Products/Products";
import AboutMedu from "/src/components/About/AboutMedu";
import Recommen from "/src/components/Recommen/Recommen";

function Home() {
  return (
    <div className="home-container">
      <h1>Medusa Company</h1>
      <p>Second hand clothes and New Kicks.....</p>
      <img className="imagen" src="src/assets/imgs/home.jpg"></img>
      <br />
      <br />
      <br />
      <br />
      <Products />
      <Carousel />
      <AboutMedu />
      <Recommen />
    </div>
  );
}

export default Home;
