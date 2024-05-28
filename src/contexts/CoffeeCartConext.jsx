import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "sonner";
import { AddressFormContext } from "./AddressFormContext";
const CoffeeCartConext = createContext();

const CoffeeCartConextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalToPay, setTotalToPay] = useState(
    cartItems.reduce((total, item) => (total += item.price), 0)
  );

  const handlerAddItemOnCart = (item) => {
    setCartItems(() => {
      if (cartItems.includes(item)) {
        toast.error("Item ja foi adicionado");
        return [...cartItems];
      } else {
        toast.success("Item adicionado com sucesso");
        return [item, ...cartItems];
      }
    });
  };

  const handlerRemoveItemFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.error("Item removido com sucesso");
  };

  const handlerIncreaseQuatityOfItems = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: item.price * item.quantity,
            }
          : item
      )
    );
  };

  const handlerDecrementQuantityOfItems = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - (item.quantity > 1 ? 1 : 0),
            }
          : item
      )
    );
  };

  const handlerClearShoppingCart = () => {
    setCartItems([]);
  };

  // let totalToPay = cartItems.reduce((total, item) => (total += item.price), 0);
  useEffect(() => {
    setTotalToPay(() =>
      cartItems.reduce((total, item) => (total += item.price), 0)
    );
  }, [cartItems]);

  return (
    <>
      <CoffeeCartConext.Provider
        value={{
          handlerClearShoppingCart,
          cartItems,
          setCartItems,
          handlerAddItemOnCart,
          handlerRemoveItemFromCart,
          totalToPay,
          handlerIncreaseQuatityOfItems,
          handlerDecrementQuantityOfItems,
        }}
      >
        {children}
      </CoffeeCartConext.Provider>
    </>
  );
};

export { CoffeeCartConext, CoffeeCartConextProvider };
