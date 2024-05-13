const CoffeeMenu = () => {
  return (
    <>
      <div className="mx-[135px] mt-[32px]">
        <h2 className="text-[baloo-2] text-[3rem] font-semibold mb-[5.4rem]">
          {" "}
          Nossos cafes
        </h2>
        <div className="flex justify-center items-center w-full ">
          <ul className="flex flex-wrap items-center  flex-1 gap-[3rem]">
            <li className="flex flex-col items-center justify-center w-[26.5rem] h-[31rem] bg-base-card rounded-tr-[35px] rounded-bl-[35px]"></li>
            <li className="flex flex-col items-center justify-center w-[26.5rem] h-[31rem] bg-base-card rounded-tr-[35px] rounded-bl-[35px]"></li>
            <li className="flex flex-col items-center justify-center w-[26.5rem] h-[31rem] bg-base-card rounded-tr-[35px] rounded-bl-[35px]"></li>
            <li className="flex flex-col items-center justify-center w-[26.5rem] h-[31rem] bg-base-card rounded-tr-[35px] rounded-bl-[35px]"></li>
            <li className="flex flex-col items-center justify-center w-[26.5rem] h-[31rem] bg-base-card rounded-tr-[35px] rounded-bl-[35px]"></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CoffeeMenu;
