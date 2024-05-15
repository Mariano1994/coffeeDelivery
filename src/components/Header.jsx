import { Link } from "react-router-dom";
import logoImage from "../assets/coffeeLogo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeCartConext } from "../contexts/CoffeeCartConext";
const Header = () => {
  const { cartItems } = useContext(CoffeeCartConext);
  return (
    <>
      <header className="mx-[135px] pt-16 ">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logoImage} alt="coffe delivery logo" />
          </Link>
          <div className="flex justify-between items-center gap-5 ">
            <span className="flex items-center gap-2 py-3 px-5 bg-purple-light text-purple text-[1.5rem] rounded-lg">
              <MapPin size={22} weight="fill" />
              Zona Comercial, Lobito
            </span>

            <Link
              to="/cart"
              className="text-yellow-dark bg-yellow-light py-3 px-5 rounded-lg cursor-pointer"
            >
              <ShoppingCart size={22} weight="fill" />
              {cartItems.length > 0 && (
                <span className=" w-[2rem] h-[2rem] bg-yellow-dark absolute rounded-full text-white flex items-center justify-center font-bold text-[1.3rem] -mt-[4.3rem] ml-[2.6rem]">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
