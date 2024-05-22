import React from "react";
import coffee from "../assets/coffee.png";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { ArrowFatLinesDown } from "@phosphor-icons/react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full bg-hero h-[544px]">
        <div className="mx-[135px] py-[9.4rem]">
          <div className="flex items-center justify-between">
            <div className=" flex flex-col">
              <div className=" flex flex-col gap-[2rem]">
                <h1 className=" font-['Baloo_2'] text-[5.7rem]  font-extrabold leading-normal mt-[10rem]">
                  Encontre o café perfeito <br /> para qualquer hora do dia
                </h1>
                <p className=" text-[2rem] font-normal">
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  <br />
                  qualquer hora
                </p>
              </div>
              <Testimonials />
              <Services />
            </div>
            <div>
              <img src={coffee} />
            </div>
          </div>
          <ArrowFatLinesDown
            size={28}
            weight="fill"
            className="text-yellow mt-[15rem] animate-pulse z-0"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
