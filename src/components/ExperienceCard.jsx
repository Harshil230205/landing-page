import React, { memo } from "react";
import { NumberTicker } from "./Icons";

const ExperienceCard = memo(({ number, string, prifix }) => {
  return (
    <div className="grid-default-color p-2 md:p-6 flex flex-col justify-center text-center gap-1 md:gap-3">
      <h2 className="text-[#dfdfdf] font-bold text-base md:text-3xl">
       {prifix}<NumberTicker value={number}  />
      </h2>
      <p className="text-neutral-600 text-shadow-sm text-[10px] md:text-sm text-pretty">
        {string}
      </p>
    </div>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

export default ExperienceCard;
