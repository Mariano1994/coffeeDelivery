import { Trash } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { CoffeeCartConext } from "../contexts/CoffeeCartConext";

const CartCoffeeItem = ({ item }) => {
  const {
    handlerRemoveItemFromCart,
    handlerIncreaseQuatityOfItems,
    handlerDecrementQuantityOfItems,
  } = useContext(CoffeeCartConext);

  return (
    <>
      <div className="flex items-start py-[25px]">
        <div className="flex items-center gap-8 flex-1">
          <img src={item.image} className=" w-[8rem] h-[8rem]" />
          <div className="flex flex-col">
            <span className="text-base-subtitle text-[1.6rem] font-normal">
              {" "}
              {item.coffee}
            </span>
            <div className="flex items-center gap-3 mt-[8px]">
              <div className="flex items-center py-2 px-5 bg-base-button text-[1.5rem] rounded-lg gap-5">
                <span
                  className="text-purple text-[1.5rem] cursor-pointer"
                  onClick={() => handlerDecrementQuantityOfItems(item.id)}
                >
                  -
                </span>
                <span>{item.quantity}</span>
                <span
                  className="text-purple text-[1.5rem] cursor-pointer"
                  onClick={() => handlerIncreaseQuatityOfItems(item.id)}
                >
                  +
                </span>
              </div>
              <div className="flex items-center py-3 px-5 bg-base-button text-[1.5rem] rounded-lg gap-4 cursor-pointer hover:brightness-95">
                <Trash size={14} className="text-purple" />
                <span
                  className="text-base-text text-[1.2rem]"
                  onClick={() => handlerRemoveItemFromCart(item.id)}
                >
                  {"remover".toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="text-base-text text-[2rem] font-bold">
          {" "}
          {item.price * item.quantity} kz
        </span>
      </div>
      <div className="border-[0.1px] border-base-button w-full"></div>
    </>
  );
};

export default CartCoffeeItem;
