import React from "react";
import costumer1 from "../assets/costumers/9.jpg";
import costumer2 from "../assets/costumers/10.jpg";
import costumer3 from "../assets/costumers/11.jpg";
import costumer4 from "../assets/costumers/12.jpg";
import costumer5 from "../assets/costumers/13.jpg";
import costumer6 from "../assets/costumers/14.jpg";
import costumer7 from "../assets/costumers/15.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="flex items-center gap-[17rem] mt-[3rem] ml-[1.3rem]">
        <div className="flex w-[5rem] h-[5rem]">
          <img
            src={costumer1}
            alt="costumer user photo"
            className="rounded-full -ml-[2rem] border-solid border-[3px] border-purple-light"
          />
          <img
            src={costumer2}
            alt="costumer user photo"
            className="rounded-full -ml-[2rem] border-solid border-[3px] border-purple-light"
          />

          <img
            src={costumer3}
            alt="costumer user photo"
            className="rounded-full -ml-[2rem] border-solid border-[3px] border-purple-light"
          />
          <img
            src={costumer4}
            alt="costumer user photo"
            className="rounded-full -ml-[2rem] border-solid border-[3px] border-purple-light"
          />
          <img
            src={costumer5}
            alt="costumer user photo"
            className="rounded-full -ml-[2rem] border-solid border-[3px] border-purple-light"
          />
          <img
            src={costumer6}
            alt="costumer user photo"
            className="rounded-full -ml-[2rem] border-solid border-[3px] border-purple-light"
          />
          <img
            src={costumer7}
            alt="costumer user photo"
            className="rounded-full -ml-[2rem] border-solid border-[3px] border-purple-light"
          />
        </div>

        <span className="text-[1.8rem] font-medium">
          <span className="text-yellow-dark font-extrabold">+50.000</span> cafés
          entregados no último ano
        </span>
      </div>
    </>
  );
};

export default Testimonials;
