import React, { useState, useEffect, createContext } from "react";

// import components
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

export const CartContext = createContext();

const MainLayout = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // add cart item handler
  const addCartItemsHandler = (data) => {
    const newCartItems = [...cartItems];

    const getIndex = newCartItems.findIndex(
      (product) => product.id === data.id
    );

    if (getIndex === -1) {
      data.count = 1;
      setCartItems([...newCartItems, data]);
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...newCartItems, data])
      );
    } else {
      newCartItems[getIndex].count += 1;

      setCartItems([...newCartItems]);
      localStorage.setItem("cartItems", JSON.stringify([...newCartItems]));
    }
  };

  // delete cart item handler
  const deleteCartItemsHandler = (data, type) => {
    setCartItems((prevData) => {
      if (type === 1) {
        const newDeleCartItems = [...prevData];
        const getIndex = newDeleCartItems.findIndex(
          (product) => product.id === data.id
        );
        newDeleCartItems[getIndex].count -= 1;

        localStorage.setItem(
          "cartItems",
          JSON.stringify([...newDeleCartItems])
        );
        return [...newDeleCartItems];
      } else {
        const afterDelete = prevData.filter((item) => item.id !== data.id);
        localStorage.setItem("cartItems", JSON.stringify([...afterDelete]));
        return [...afterDelete];
      }
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
        addCartItemsHandler: addCartItemsHandler,
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
