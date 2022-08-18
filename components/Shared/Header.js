import React from "react";
import { BiUser } from "react-icons/bi";
import { BsCart, BsSuitHeart } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary text-white">
        <div className="container-fluid">
          <a className="navbar-brand  text-white" href="#">
            Motion View
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active  text-white"
                  aria-current="page"
                  href="#"
                >
                  Campaign
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  Trending
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  Brands
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  Our Outlets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  Service Center
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success bg-white"
                type="button"
              >
                Search
              </button>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  <BsSuitHeart />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  text-white"
                  aria-current="page"
                  href="#"
                >
                  <BiUser />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  <BsCart />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
