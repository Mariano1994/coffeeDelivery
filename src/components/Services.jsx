import { Timer, ShoppingCart, Coffee, Package } from "@phosphor-icons/react";

const Services = () => {
  return (
    <>
      <div className="flex items-center gap-16 mt-[60px]">
        <div className="flex flex-col gap-8  ">
          <div className="flex items-center gap-6">
            <div className="text-white bg-yellow-dark py-3 px-5 rounded-full w-[5rem] h-[5rem] flex justify-center items-center ">
              <ShoppingCart size={30} weight="fill" />
            </div>
            <span className="text-[1.8rem] font-light">
              Compra simples e segura
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-white bg-yellow py-3 px-5 rounded-full  w-[5rem] h-[5rem] flex justify-center items-center ">
              <Timer size={30} weight="fill" />
            </div>
            <span className="text-[1.8rem] font-light">
              Entrega rapida e rastreada
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <div className="text-white bg-base-title py-3 px-5 rounded-full w-[5rem] h-[5rem] flex justify-center items-center ">
              <Package size={30} weight="fill" />
            </div>
            <span className="text-[1.8rem] font-light">
              Embalagem mantem o cafe intacto
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-white bg-purple py-3 px-5 rounded-full w-[5rem] h-[5rem] flex justify-center items-center ">
              <Coffee size={30} weight="fill" />
            </div>
            <span className="text-[1.8rem] font-light">
              Entrega rapida e rastreada
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
