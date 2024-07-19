import React from "react";
import { useState } from "react";

const ShoeCard = ({ ImgURL, setDisplayShoe }) => {
  const [isBorder, setBorder] = useState(false);
  
  const handleClick = (ImgURL) => {
    setDisplayShoe(ImgURL);
    setBorder(true);
  };
  return (
    <div
      className={`bg-card bg-cover bg-center border-2 ${
        isBorder ? `border-coral-red` : ``
      } rounded-md`}
    >
      <img
        src={ImgURL}
        alt="Shoe"
        className="object-contain"
        width={207}
        height={123.34}
        onClick={() => handleClick(ImgURL)}
      />
    </div>
  );
};

export default ShoeCard;
