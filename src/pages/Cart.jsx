import AddressForm from "../components/AddressForm";
import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "@phosphor-icons/react";

const Cart = () => {
  return (
    <>
      <div className="mx-[135px] bg-background mt-[70px] h-screen">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-8">
            <strong className="text-[2.5rem] font-['baloo_2']">
              Compete o seu pedido
            </strong>

            <div className="flex flex-col justify-center gap-8 flex-1 w-[640px]">
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
                <AddressForm />
              </div>
              <div className="bg-base-card rounded-lg p-[40px]">
                <div className=" flex items-start gap-2 ">
                  <CurrencyDollar size={24} className="text-purple" />
                  <div>
                    <span className="text-[2rem] text-base-subtitle ">
                      Pagamento
                    </span>
                    <p className="text-[1.7rem] text-base-subtitle">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
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
                    <span className="text-[1.5rem]">
                      {"dinheiro".toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <strong>nken</strong>
            <div className="w-[448px] h-[498px] bg-base-card"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
