import React from "react";

const Slider = () => {
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleControls"
        className="container p-0 carousel slide"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{ height: "300px" }}
        >
          <div className="carousel-item active" style={{ height: "300px" }}>
            <img
              src={`https://idbdev.com/motion2/public/images/55.jpg`}
              className="w-100 h-100"
              alt="img1"
            />
          </div>
          <div className="carousel-item" style={{ height: "300px" }}>
            <img
              src={`https://idbdev.com/motion2/public/images/55.jpg`}
              className="w-100 h-100"
              alt="img2"
            />
          </div>
          <div className="carousel-item" style={{ height: "300px" }}>
            <img
              src={`https://idbdev.com/motion2/public/images/55.jpg`}
              className="w-100 h-100"
              alt="img3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
