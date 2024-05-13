import { dammyData } from "../utils/dammyData";
import { ShoppingCart } from "@phosphor-icons/react";

const CoffeeItem = ({ coffeeData }) => {
  return (
    <>
      <li className="flex flex-col items-center justify-center w-[26.5rem] h-[31rem] bg-base-card rounded-tr-[35px] rounded-bl-[35px] gap-4 px-4 mb-[10rem]">
        <img
          src={coffeeData.image}
          alt="product image"
          className="w-[120px] h-[120px] -mt-[12rem]"
        />

        <div className="flex items-center gap-2">
          {coffeeData.categories.map((category, index) => (
            <span
              key={index}
              className=" bg-yellow-light text-[1rem] text-yellow-dark py-2 px-4 rounded-3xl font-bold"
            >
              {category.toUpperCase()}
            </span>
          ))}
        </div>

        <h2 className=" text-base-subtitle text-[2.2rem] font-['Baloo_2'] font-bold">
          {coffeeData.coffee}
        </h2>
        <p className="text-base-label text-[1.6rem] text-center">
          {coffeeData.description}
        </p>
        <div className="flex items-center justify-between mt-[3rem]  w-full px-4">
          <span className=" text-[2rem] font-['Baloo_2'] font-bold">
            {coffeeData.price} kz
          </span>

          <div className="flex items-center justify-between gap-4  ">
            <div className="flex items-center py-3 px-5 bg-base-button text-[1.5rem] rounded-lg gap-5">
              <span className="text-purple text-[1.5rem] cursor-pointer">
                -
              </span>
              <span>{coffeeData.quantity}</span>
              <span className="text-purple text-[1.5rem] cursor-pointer">
                +
              </span>
            </div>
            <span className="text-white bg-purple-dark py-3 px-5 rounded-lg cursor-pointer">
              <ShoppingCart size={22} weight="fill" />
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export default CoffeeItem;
