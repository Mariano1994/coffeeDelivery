import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import PaymentOptinos from "../components/PaymentOptions";
import CartCoffeeItem from "../components/CartCoffeeItem";
import { useContext } from "react";
import { CoffeeCartConext } from "../contexts/CoffeeCartConext";
import { DELIVERY_TAX } from "../utils/dammyData";
import EmptyPage from "./EmptyPage";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalToPay } = useContext(CoffeeCartConext);
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="mx-[135px] bg-background py-[175px] pb-[3rem]">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-8">
              <strong className="text-[2.5rem] font-['baloo_2']">
                Complete o seu pedido
              </strong>

              <div className="flex flex-col justify-center gap-8 flex-1 w-[670px]">
                <AddressForm />
                <PaymentOptinos />
              </div>
            </div>
            <div className=" flex flex-col gap-8">
              <strong className="text-[2.5rem] font-['baloo_2']">
                Cafés selecionados
              </strong>
              <div className="w-[448px] h-auto bg-base-card rounded-tr-[35px] rounded-bl-[35px] rounded-tl-lg rounded-br-lg px-[40px]">
                {cartItems.map((item) => (
                  <CartCoffeeItem item={item} key={item.id} />
                ))}

                <div className="mt-[1.5rem] flex flex-col gap-[0.5rem] mb-[2rem]">
                  <div className="flex items-center justify-between">
                    <span className=" text-[1.6rem] text-base-text">
                      {" "}
                      Total de pedidos
                    </span>
                    <span className=" text-[1.6rem] text-base-text">
                      {" "}
                      {totalToPay} kz
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className=" text-[1.6rem] text-base-text">
                      {" "}
                      Entrega
                    </span>
                    <span className=" text-[1.6rem] text-base-text">
                      {" "}
                      {DELIVERY_TAX} kz
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className=" text-[2rem] font-semibold text-base-subtitle">
                      {" "}
                      Total a Pagar
                    </span>
                    <span className=" text-[2rem] font-semibold text-base-subtitle">
                      {" "}
                      {totalToPay + DELIVERY_TAX}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-8">
                    <Link
                      to="/"
                      className="w-[50%] flex justify-center py-[1.5rem] text-purple bg-base-button border-purple border-[1px] rounded-xl text-[1.4rem] mt-8 font-bold hover:brightness-95"
                    >
                      {"Continuar a Comprar".toUpperCase()}
                    </Link>
                    <Link
                      to="/order"
                      className="w-[50%] flex justify-center py-[1.5rem] text-white bg-yellow rounded-xl text-[1.4rem] mt-8 font-bold hover:brightness-95"
                    >
                      {"Confirmar Pedido".toUpperCase()}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyPage />
      )}
    </>
  );
};

export default Cart;
