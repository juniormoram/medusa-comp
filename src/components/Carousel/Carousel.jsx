import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      {/* Indicadores */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      {/* Carrusel */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="src/assets/imgs/Carrus1.jpg"
            alt="Los Angeles"
            className="d-block w-100"
          />
          <div className="carousel-caption">
            <h3>Los Angeles</h3>
            <p>We had such a great time in LA!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="src/assets/imgs/Carrus1.jpg"
            alt="Chicago"
            className="d-block w-100"
          />
          <div className="carousel-caption">
            <h3>Chicago</h3>
            <p>Thank you, Chicago!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="src/assets/imgs/Carrus1.jpg"
            alt="New York"
            className="d-block w-100"
          />
          <div className="carousel-caption">
            <h3>New York</h3>
            <p>We love the Big Apple!</p>
          </div>
        </div>
      </div>

      {/* Controles */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;
