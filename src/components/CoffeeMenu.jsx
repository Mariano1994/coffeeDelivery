import React from "react";
import CoffeeItem from "./CoffeeItem";
import { dammyData } from "../utils/dammyData";

const CoffeeMenu = () => {
  const [coffeeData, setCoffeeData] = [dammyData];
  return (
    <>
      <div className="mx-[135px] mt-[14.5rem] flex items-center gap-8">
        <h2 className="font-['Baloo_2'] text-[3.5rem] font-bold mb-[4rem]">
          {" "}
          Nossos cafés
        </h2>
      </div>
      <div className="mx-[200px] mt-[3rem]">
        <div className="flex justify-center items-center w-full ">
          <ul className="flex flex-wrap items-center  flex-1 gap-[4rem] mt-[7rem] ">
            {coffeeData.map((coffeeData) => (
              <CoffeeItem key={coffeeData.id} coffeeData={coffeeData} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CoffeeMenu;
