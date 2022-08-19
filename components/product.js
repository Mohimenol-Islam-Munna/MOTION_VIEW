import React from "react";
import { BsCart, BsSuitHeart, BsFillStarFill } from "react-icons/bs";

const Product = ({ product }) => {
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
              <BsSuitHeart /> <BsCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
