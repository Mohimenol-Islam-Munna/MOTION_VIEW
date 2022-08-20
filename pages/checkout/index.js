import React, { useContext } from "react";
import { CartContext } from "../../components/Layout/MainLayout";
import { TbCurrencyTaka } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

import Hoc from "../../components/HOC/Hoc";

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      data: "munna",
    },
  };
};

const Checkout = ({ data }) => {
  const { cartItems, deleteAllItemsFromCartHandler } = useContext(CartContext);
  const { handleSubmit, reset, register } = useForm();

  const confirmOrderHandler = (data) => {
    console.log("confirm order :", data);
    toast("Wow your order has been confirmed !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // delete all items from cart and localstorage after confirm order
    deleteAllItemsFromCartHandler();
    localStorage.removeItem("cartItems");

    reset();
  };

  return (
    <>
      <div className="container py-5">
        <div className="row ">
          <div className="col-md-9">
            {/* shopping cart  */}
            <div>
              <h2>Shopping Cart</h2>
              <div className="mt-4">
                <div className="row border-bottom">
                  <div className="col-8 row">
                    {" "}
                    <h6 className="text-muted">Cart Details</h6>{" "}
                  </div>
                  <div className="col-2  d-flex flex-column justify-content-center align-items-center">
                    {" "}
                    <h6 className="text-muted">Unit Price</h6>
                  </div>
                  <div className="col-2  d-flex flex-column justify-content-center align-items-center">
                    {" "}
                    <h6 className="text-muted">Subtotal</h6>
                  </div>
                </div>

                {cartItems.length > 0
                  ? cartItems.map((item) => (
                      <div className="row mt-3" key={item.id}>
                        <div className="col-8 row">
                          <div className="col-3">
                            <img
                              src={`https://idbdev.com/motion2/public/images/${item.image}`}
                              alt={`${item.name}`}
                              className="w-100 h-100"
                            />
                          </div>
                          <div className="col-9">
                            <h5>{item.name}</h5>
                            <h6>Quantity: {item.count}</h6>
                          </div>
                        </div>
                        <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                          {" "}
                          <h6 className="text-muted">
                            <TbCurrencyTaka /> {item.sale_price}
                          </h6>
                        </div>
                        <div className="col-2  d-flex flex-column justify-content-center align-items-center">
                          {" "}
                          <h6 className="text-muted">
                            <TbCurrencyTaka /> {item.sale_price * item.count}
                          </h6>
                        </div>
                      </div>
                    ))
                  : "Your cart is empty"}
              </div>
            </div>

            {/* address  */}
            <div className="mt-5">
              <h2>Address</h2>
              <form onSubmit={handleSubmit(confirmOrderHandler)}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="name" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      className="form-control"
                      placeholder="name"
                      aria-label="name"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("email", { required: true })}
                      className="form-control"
                      placeholder="email"
                      aria-label="email"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="phone" className="form-label">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      {...register("phone", { required: true })}
                      className="form-control"
                      placeholder="phone"
                      aria-label="phone"
                    />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Address <span className="text-danger">*</span>
                    </label>
                    <textarea
                      type="text"
                      {...register("address", { required: true })}
                      className="form-control"
                      placeholder="address"
                      aria-label="address"
                    ></textarea>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        {...register("payment", { required: true })}
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Cash On Delivery <span className="text-danger">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-2">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 text-white fw-bold"
                    >
                      Confirm Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Hoc(Checkout);
