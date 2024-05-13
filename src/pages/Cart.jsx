import AddressForm from "../components/AddressForm";
import { MapPin } from "@phosphor-icons/react";

const Cart = () => {
  return (
    <>
      <div className="mx-[135px] bg-background mt-[70px] h-screen">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-8">
            <strong className="text-[2.5rem] font-['baloo_2']">
              Compete o seu pedido
            </strong>

            <div className="flex flex-col justify-center gap-4 flex-1 w-[640px]">
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
              <div className="bg-base-card rounded-lg p-[40px]"> Capiliku</div>
            </div>
          </div>
          <div>Cafes Selecionados</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
