import React, { useState, useEffect, createContext } from "react";

// import components
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

export const CartContext = createContext();

const MainLayout = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // add cart item handler
  const cartItemsHandler = (data) => {
    const getIndex = cartItems.findIndex((product) => product.id === data.id);

    if (getIndex === -1) {
      setCartItems([...cartItems, data]);
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, data]));
    } else {
      console.log("This product already in cart");
    }
  };

  // delete cart item handler
  const deleteCartItemsHandler = (data) => {
    setCartItems((prevData) => {
      const afterDelete = prevData.filter((item) => item.id !== data.id);
      localStorage.setItem("cartItems", JSON.stringify([...afterDelete]));
      return [...afterDelete];
    });
  };

  useEffect(() => {
    if (localStorage.cartItems) {
      const localData = JSON.parse(localStorage.getItem("cartItems"));
      setCartItems([...localData]);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        cartItemsHandler: cartItemsHandler,
        deleteCartItemsHandler: deleteCartItemsHandler,
      }}
    >
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default MainLayout;
