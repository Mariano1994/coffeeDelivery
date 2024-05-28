import { CurrencyDollar, MapPin, Timer, User } from "@phosphor-icons/react";
import deliveryImage from "../assets/deliver.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AddressFormContext } from "../contexts/AddressFormContext";
import { CoffeeCartConext } from "../contexts/CoffeeCartConext";

const OrderOnBoard = () => {
  const { userInfo } = useContext(AddressFormContext);

  return (
    <>
      <div className="mx-[135px] bg-background py-[150px] pb-[3rem] h-screen">
        <div className="flex justify-between items-center mt-[30px]">
          <div className=" flex flex-col gap-20">
            <div>
              <h1 className=" text-yellow-dark font-['baloo_2'] text-[3.5rem] font-bold">
                Uhu! Pedido confirmado
              </h1>
              <p className="text-[2rem] font-light">
                Agora é só aguardar que logo o café chegará até você
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start mt-[5rem]">
          <div className="flex flex-col gap-[3rem] w-[526px] border-solid border-yellow border-[1.4px] p-[3.5rem] rounded-tr-[35px] rounded-bl-[35px]">
            <div className="flex  items-center gap-4">
              <div className="text-white bg-base-text py-3 px-5 rounded-full w-[5rem] h-[5rem] flex justify-center items-center ">
                <User size={30} weight="fill" />
              </div>
              <div className="text-base-text text-[1.5rem]">
                <p>
                  {" "}
                  Cliente:{" "}
                  <span className="font-bold">{userInfo.userName}</span>
                </p>
                <p>Telemovel: {userInfo.userContact}</p>
              </div>
            </div>
            <div className="flex  items-center gap-4">
              <div className="text-white bg-purple py-3 px-5 rounded-full w-[5rem] h-[5rem] flex justify-center items-center ">
                <MapPin size={30} weight="fill" />
              </div>
              <div className="text-base-text text-[1.5rem]">
                <p>
                  {" "}
                  Entrega em:{" "}
                  <span className="font-bold">
                    {userInfo.userStreet}, {userInfo.userStreetNumber}
                  </span>
                </p>
                <p>{userInfo.userCity}</p>
              </div>
            </div>
            <div className="flex  items-center gap-4">
              <div className="text-white bg-yellow py-3 px-5 rounded-full w-[5rem] h-[5rem] flex justify-center items-center ">
                <Timer size={30} weight="fill" />
              </div>
              <div className="text-base-text text-[1.5rem]">
                <p>Previsão de entrega</p>
                <p className="font-bold">20 min - 30 min</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-white bg-yellow-dark py-3 px-5 rounded-full w-[5rem] h-[5rem] flex justify-center items-center ">
                <CurrencyDollar size={30} />
              </div>
              <div className="text-base-text text-[1.5rem]">
                <p>Pagamento na entrega</p>
                <p className="font-bold">Cartão de Crédito</p>
              </div>
            </div>
          </div>

          <div className="mt-[2.4rem]">
            <img src={deliveryImage} />
          </div>
        </div>

        <div className="flex justify-center items-center mt-[4rem]">
          <Link
            to="/"
            className="text-white bg-yellow py-[1.5rem] px-16 rounded-lg text-[1.2rem] mt-[2rem] font-semibold hover:brightness-95"
          >
            {"Ir para pagina principal".toUpperCase()}
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderOnBoard;
