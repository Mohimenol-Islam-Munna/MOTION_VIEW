import React, { useContext } from "react";
import { BsCart, BsSuitHeart, BsFillStarFill } from "react-icons/bs";

// import cart context
import { CartContext } from "./Layout/MainLayout";

const Product = ({ product }) => {
  const { cartItems, addCartItemsHandler } = useContext(CartContext);

  return (
    <div>
      <div className="card">
        <img
          src={`https://idbdev.com/motion2/public/images/${product?.image}`}
          className="card-img-top w-100"
          alt={`${product?.name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="hstack gap-3">
            <h6>Price {product.sale_price}</h6>
            <h6 className="ms-auto">Stock {product.stock}</h6>
          </div>

          <div className="mt-2 hstack">
            <div className="hstack gap-1">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
            <div className="ms-auto hstack gap-2">
              <BsSuitHeart type="button"/>{" "}
              {product.stock <= 0 ? (
                <span className="text-mutted">Out of stock</span>
              ) : (
                <BsCart
                  type="button"
                  className={`${
                    cartItems.find((item) => item.id === product.id) &&
                    "text-primary"
                  }`}
                  onClick={() => addCartItemsHandler(product)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
