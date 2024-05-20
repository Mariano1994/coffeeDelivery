import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/coffeeLogo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { CoffeeCartConext } from "../contexts/CoffeeCartConext";
const Header = () => {
  const { cartItems } = useContext(CoffeeCartConext);

  useEffect(() => {
    let header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 55) {
        header.style.background = "#fafafa";
        header.style.paddingBottom = "20px";
      } else {
        header.style.background = "transparent";
      }
    });
  });
  return (
    <>
      <header className="px-[135px] pt-16 w-full fixed z-50" id="header">
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
