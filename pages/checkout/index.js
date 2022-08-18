import React from "react";

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      data: "munna",
    },
  };
};

const Checkout = ({ data }) => {
  console.log("data in checkout page ::", data);
  return <div>Checkout page</div>;
};

export default Checkout;
