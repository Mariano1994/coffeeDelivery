import React from "react";
import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const PaymentOptinos = () => {
  const [optionIndex, setOptionIndex] = useState(1);
  const onSetPaymentOptions = (key) => {
    setOptionIndex(key);
  };

  const keys = [1, 2, 3];

  return (
    <>
      <div className="bg-base-card rounded-lg p-[40px]">
        <div className=" flex items-start gap-2 ">
          <CurrencyDollar size={24} className="text-purple" />
          <div>
            <span className="text-[2rem] text-base-subtitle ">Pagamento</span>
            <p className="text-[1.7rem] text-base-subtitle">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <nav>
          <ul className="w-full flex items-center justify-between mt-[32px]">
            <li onClick={() => onSetPaymentOptions(keys[0])} key={keys[0]}>
              <NavLink
                to="/cart"
                className={
                  optionIndex !== keys[0]
                    ? " flex items-center justify-center gap-5 bg-base-button h-[51px] rounded-lg w-[178.67px] cursor-pointer hover:brightness-95"
                    : "flex items-center justify-center gap-5  bg-purple-light border-purple border-[1px] h-[51px] rounded-lg w-[178.67px] cursor-pointer hover:brightness-95"
                }
              >
                <CreditCard size={20} className=" text-purple " />{" "}
                <span className="text-[1.5rem]">
                  {"Cartão de crédito".toUpperCase()}
                </span>
              </NavLink>
            </li>
            <li onClick={() => onSetPaymentOptions(keys[1])} key={keys[1]}>
              <NavLink
                to="/cart"
                className={
                  optionIndex !== keys[1]
                    ? " flex items-center justify-center gap-5 bg-base-button h-[51px] rounded-lg w-[178.67px] cursor-pointer hover:brightness-95"
                    : "flex items-center justify-center gap-5  bg-purple-light border-purple border-[1px] h-[51px] rounded-lg w-[178.67px] cursor-pointer hover:brightness-95"
                }
              >
                <Bank size={20} className=" text-purple" />{" "}
                <span className="text-[1.5rem]">
                  {"cartão de débito".toUpperCase()}
                </span>
              </NavLink>
            </li>
            <li onClick={() => onSetPaymentOptions(keys[2])} key={keys[2]}>
              <NavLink
                to="/cart"
                className={
                  optionIndex !== keys[2]
                    ? " flex items-center justify-center gap-5 bg-base-button h-[51px] rounded-lg w-[178.67px] cursor-pointer hover:brightness-95"
                    : "flex items-center justify-center gap-5  bg-purple-light border-purple border-[1px] h-[51px] rounded-lg w-[178.67px] cursor-pointer hover:brightness-95"
                }
              >
                <Money size={20} className=" text-purple" />{" "}
                <span className="text-[1.5rem]">
                  {"dinheiro".toUpperCase()}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default PaymentOptinos;
