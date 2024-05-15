import { createContext, useState } from "react";

const CoffeeCartConext = createContext();

const CoffeeCartConextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handlerAddItemOnCart = (item) => {
    setCartItems(() => [item, ...cartItems]);
  };

  const handlerRemoveItemFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handlerIncreaseQuatityOfItems = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
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

  const totalToPay = cartItems.reduce(
    (total, item) => (total += item.price),
    0
  );
  return (
    <CoffeeCartConext.Provider
      value={{
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
  );
};

export { CoffeeCartConext, CoffeeCartConextProvider };
