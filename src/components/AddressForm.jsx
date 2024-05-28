import React, { useState } from "react";
import { MapPin } from "@phosphor-icons/react";
import { useContext } from "react";
import { AddressFormContext } from "../contexts/AddressFormContext";

const AddressForm = () => {
  const {
    userInfo,
    handlerSetCity,
    handlerSetContact,
    handlerSetStreet,
    handlerSetStreetNumber,
    handlerSetUserId,
    handlerSetUserName,
  } = useContext(AddressFormContext);

  return (
    <>
      <div className="bg-base-card rounded-lg p-[40px]">
        <div className="flex items-start gap-2">
          <MapPin size={24} className="text-yellow-dark" />
          <div>
            <span className="text-[2rem] text-base-subtitle ">
              Endereco de Entrega
            </span>
            <p className="text-[1.7rem] text-base-subtitle">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>

        <form className="w-full mt-[32px] flex flex-col gap-[16px] ">
          <input
            type="text"
            placeholder="BI"
            value={userInfo.userId}
            onChange={handlerSetUserId}
            className="w-[50%] h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none"
          />
          <input
            type="text"
            placeholder="Nome"
            onChange={handlerSetUserName}
            className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none"
            value={userInfo.userName}
            required
          />
          <div className="w-full flex gap-4">
            <input
              type="number"
              placeholder="Contacto"
              className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none"
              value={userInfo.userContact}
              onChange={handlerSetContact}
            />
            <input
              type="text"
              placeholder="Rua"
              className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none flex-1"
              value={userInfo.userStreet}
              onChange={handlerSetStreet}
            />
          </div>

          <div className="flex items-center justify-between gap-5">
            <input
              type="number"
              placeholder="Rua numero"
              className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none flex-1"
              value={userInfo.userStreetNumber}
              onChange={handlerSetStreetNumber}
            />
            <input
              type="text"
              placeholder="Cidade"
              className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none flex-1"
              value={userInfo.userCity}
              onChange={handlerSetCity}
              required
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressForm;
