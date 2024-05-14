import AddressForm from "../components/AddressForm";
import { MapPin } from "@phosphor-icons/react";
import PaymentOptinos from "../components/PaymentOptions";

const Cart = () => {
  return (
    <>
      <div className="mx-[135px] bg-background mt-[70px] h-screen">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-8">
            <strong className="text-[2.5rem] font-['baloo_2']">
              Complete o seu pedido
            </strong>

            <div className="flex flex-col justify-center gap-8 flex-1 w-[640px]">
              <AddressForm />
              <PaymentOptinos />
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
