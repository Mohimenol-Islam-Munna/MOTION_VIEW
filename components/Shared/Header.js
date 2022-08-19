import React, { useContext } from "react";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { BsCart, BsSuitHeart } from "react-icons/bs";

// components
import Cart from "./Cart";
import { CartContext } from "../Layout/MainLayout";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {/* navbar-expand-lg  */}
      <nav className="navbar navbar-expand-lg bg-primary text-white sticky-top">
        <div className="container px-3 py-0 px-lg-0">
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
                <Link href="/" passHref>
                  <a className="nav-link active text-white" aria-current="page">
                    Home
                  </a>
                </Link>
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

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="">
                <a className="nav-link text-white" href="#">
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
                <a
                  className="nav-link text-white position-relative"
                  aria-current="page"
                  href="#cartOffCanvas"
                  data-bs-toggle="offcanvas"
                  role="button"
                  aria-controls="cartOffCanvas"
                >
                  <BsCart />
                  <span className="position-absolute top-10 start--100 translate-middle badge rounded bg-white text-dark p-1">
                    {cartItems.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Cart />
    </>
  );
};

export default Header;
