import React from "react";
import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";

const PaymentOptinos = () => {
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
        <div className="w-full flex items-center justify-between mt-[32px]">
          <div className=" flex items-center justify-center gap-5 bg-base-button h-[51px] rounded-lg w-[178.67px] cursor-pointer hover:brightness-95">
            <CreditCard size={20} className=" text-purple " />{" "}
            <span className="text-[1.5rem]">
              {"Cartão de crédito".toUpperCase()}
            </span>
          </div>
          <div className=" flex items-center justify-center gap-5 bg-base-button h-[51px] rounded-lg w-[178.67px] cursor-pointer hover:brightness-95">
            <Bank size={20} className=" text-purple" />{" "}
            <span className="text-[1.5rem]">
              {"cartão de débito".toUpperCase()}
            </span>
          </div>
          <div className=" flex items-center justify-center gap-5 bg-base-button h-[51px] rounded-lg w-[178.67px] cursor-pointer hover:brightness-95">
            <Money size={20} className=" text-purple" />{" "}
            <span className="text-[1.5rem]">{"dinheiro".toUpperCase()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentOptinos;
