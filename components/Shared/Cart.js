import React, { useState, useEffect, useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";

import { CartContext } from "../Layout/MainLayout";

const Cart = () => {
  const { cartItems, addCartItemsHandler, deleteCartItemsHandler } =
    useContext(CartContext);

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      let price = cartItems
        .map((item) => parseInt(item.sale_price * item.count))
        .reduce((prev, next) => prev + next);
      setSubtotal(price);
    }
  }, [cartItems]);

  return (
    <div
      className="offcanvas offcanvas-end"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="cartOffCanvas"
      aria-labelledby="cartOffCanvasLabel"
    >
      {/* cart close  */}
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn btn-danger ms-auto"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          Close
        </button>
      </div>

      {/* cart title  */}
      <div>
        <div className="offcanvas-title hstack gap-3 px-3">
          <h4>Shopping Cart </h4>
          <h6 className="ms-auto text-warning">{cartItems.length} Items</h6>
        </div>
        <hr />
      </div>

      {/* cart body  */}
      <div className="offcanvas-body px-3 py-0" style={{ maxHeight: "63vh" }}>
        {cartItems.length > 0 ? (
          <>
            <div>
              {cartItems.map((cartItem) => (
                <div key={cartItem.id} className="row py-2">
                  <div className="col-2 vstack gap-0">
                    <button
                      className="border border-0 p-0 m-0 bg-white h5"
                      disabled={cartItem.count >= cartItem.stock && true}
                      onClick={() => addCartItemsHandler(cartItem)}
                    >
                      +
                    </button>
                    <button className="border border-2 border-warning rounded bg-white">
                      {cartItem.count}
                    </button>
                    <button
                      className="border border-0  p-0 m-0 bg-white h5"
                      disabled={cartItem.count <= 1 && true}
                      onClick={() => deleteCartItemsHandler(cartItem, 1)}
                    >
                      -
                    </button>
                  </div>

                  <div className="col-8 p-0 m-0 row">
                    <div className="col-3 p-0 d-flex justify-content-center align-items-center">
                      <img
                        src={`https://idbdev.com/motion2/public/images/${cartItem.image}`}
                        className="img-fluid"
                        alt={`${cartItem?.name}`}
                      />
                    </div>
                    <div className="col-9 ">
                      <p className="p-0 m-0 fw-bold">{cartItem.name}</p>
                      <p className="p-0 m-0 text-warning h6">
                        <TbCurrencyTaka /> total price{" "}
                        {`${cartItem.sale_price * cartItem.count} `}
                        <span className="text-muted">
                          (<TbCurrencyTaka /> {cartItem.sale_price} x{" "}
                          {cartItem.count})
                        </span>
                      </p>
                      <p className="p-0 m-0 text-muted">promotion slogan</p>
                    </div>
                  </div>

                  <div className="col-2 p-0 d-flex justify-content-center align-items-center ">
                    <MdDeleteForever
                      type="button"
                      className="h3"
                      style={{ color: "#FF5722" }}
                      onClick={() => deleteCartItemsHandler(cartItem, 2)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="border h-100 d-flex flex-column justify-content-center align-items-center">
            <h4 className="bg-secondary p-4 rounded-circle text-white">
              <BsCart className="h3" />
            </h4>
            <h4 className="text-muted">Your cart is empty</h4>
          </div>
        )}
      </div>
      {/* total  */}
      {cartItems.length > 0 && (
        <div className="p-0 m-0 mt-2 text-center">
          <p className="mt-2 p-0">
            <TbCurrencyTaka /> Subtotal: {subtotal}
          </p>
          <hr style={{ border: "2px dashed gray" }} />
          <p className="p-0">
            <TbCurrencyTaka /> Total: {subtotal}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
