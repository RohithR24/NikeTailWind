import React from "react";
import { useState } from "react";

const ShoeCard = ({ ImgURL, setDisplayShoe, displayShoe }) => {
  const [isBorder, setBorder] = useState(false);

  const handleClick = (img) => {

    if(ImgURL === img)
    {
      setDisplayShoe(ImgURL);
      setBorder(true);
    }
    
  };
  return (
    <div
      className={`flex justify-center items-center bg-card bg-cover bg-center border-2 ${
        ImgURL === displayShoe ? `border-coral-red` : `border-transparent`
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
