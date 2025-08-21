import React from "react";
import { NumberTicker } from "./Icons";

const ExperienceCard = ({ number, string,prifix }) => {
  return (
    <>
      <div className=" grid-default-color p-6 flex flex-col justify-center text-center gap-3">
        <h2 className="text-[#dfdfdf] font-bold text-2xl md:text-4xl">
         {prifix}<NumberTicker value={number}  />
        </h2>
        <p className="text-neutral-600 text-shadow-sm text-sm md:text-sm text-pretty">
          {string}
        </p>
      </div>
    </>
  );
};

export default ExperienceCard;
