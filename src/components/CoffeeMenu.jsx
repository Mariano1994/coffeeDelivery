import CoffeeItem from "./CoffeeItem";
import { dammyData } from "../utils/dammyData";

const CoffeeMenu = () => {
  const [coffeeData, setCoffeeData] = [dammyData];
  return (
    <>
      <div className="mx-[135px] mt-[25rem] flex items-center gap-8">
        <h2 className="font-['Baloo_2'] text-[3.5rem] font-bold mb-[5.4rem]">
          {" "}
          Nossos cafes
        </h2>
        <input
          type="text"
          placeholder="Pesquise cafe"
          className=" h-[38px] w-[38%] p-3 text-[1.5rem] border-solid border-[1px]  border-yellow-light rounded-full bg-transparent outline-none -mt-[5rem] text-yellow-dark"
        />
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
