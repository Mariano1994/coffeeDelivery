import React from "react";
import { MapPin } from "@phosphor-icons/react";
const AddressForm = () => {
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
            placeholder="CEP"
            className="w-[50%] h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none"
          />
          <input
            type="text"
            placeholder="Rua"
            className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none"
          />
          <div className="w-full flex gap-4">
            <input
              type="text"
              placeholder="Contacto"
              className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none"
            />
            <input
              type="text"
              placeholder="Nome"
              className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none flex-1"
            />
          </div>

          <div className="flex items-center justify-between gap-5">
            <input
              type="text"
              placeholder="Bairro"
              className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none flex-1"
            />
            <input
              type="text"
              placeholder="Cidade"
              className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none flex-1"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressForm;
