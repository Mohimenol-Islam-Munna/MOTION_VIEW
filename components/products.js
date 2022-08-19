import React from "react";

// import components
import Product from "./Product";

const Products = ({ data }) => {
  // console.log("data in products component :::", data);
  return (
    <div className="row gy-3">
      {data?.map((product) => (
        <div className="col-md-4" key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
