import { Link } from "react-router-dom";
import logoImage from "../assets/coffeeLogo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
const Header = () => {
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
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
