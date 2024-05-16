import { ShoppingBag } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const EmptyMessage = () => {
  return (
    <div className="flex flex-col items-center gap-3 -mt-[10rem]">
      <ShoppingBag size={120} weight="fill" className="text-purple" />
      <h1 className="text-[4rem] font-bold text-yellow-dark">
        Seu carrinho esta vazio
      </h1>
      <p className="text-[1.8rem] -mt-[1rem]">Adicione items no seu carrinho</p>
      <Link
        to="/"
        className="text-white bg-yellow py-[1.5rem] px-16 rounded-lg text-[1.2rem] mt-[2rem] font-semibold hover:brightness-95"
      >
        {"Ir para menu".toUpperCase()}
      </Link>
    </div>
  );
};

export default EmptyMessage;
