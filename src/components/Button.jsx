import React from "react";

const Button = ({ title, imgURL, bgColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center border items-center px-10 gap-2 py-4 font-montserrat leading-none text-xl rounded-full ${
        bgColor ? "text-slate-900 border-slate-900" : "bg-coral-red text-white }"
      } ${fullWidth && "w-full"}`}
    >
      {title}

      {imgURL && (
        <img
          src={imgURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
