import React from "react";

const Button = ({ title, imgURL, bgColor }) => {
  return (
    <button className={`flex justify-center border items-center px-10 gap-2  ${bgColor?'text-slate-900 border-slate-900':'bg-coral-red text-white' } py-4 font-montserrat leading-normal text-xl rounded-full`}>
      {title}
      <img className=" rounded-full" src={imgURL} />
    </button>
  );
};

export default Button;