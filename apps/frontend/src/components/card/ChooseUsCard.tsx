import React from "react";

const ChooseUsCard = ({ number, statement, description }) => {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white py-10 px-5 m-1">
      <div className="p-5">
        <h1 className="font-extrabold text-5xl text-orange-500">{number}+</h1>
        <p className="text-normal font-semibold pt-2">{statement}</p>
        <p className=" max-w-md mx-auto text-sm md:text-sm lg:text-neutral-400 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
