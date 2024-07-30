import React from "react";
import { shoe8 } from "../assets/images";
import Button from "./Button";

const ProductFeatures = () => {
  return (
    <section className="flex max-lg:flex-col w-full justify-between items-center max-container">
      <div className="flex flex-1 flex-col font-montserrat">
        <h4 className="text-4xl font-semibold">
          We Provide You{" "}
          <span className=" text-coral-red">
            Super <br />
            Quality
          </span>{" "}
          Shoes
        </h4>
        <p className="mt-16 lg:max-w-lg text-slate-600 leading-7">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br />
          <p className="pt-6" >Our dedication to detail and excellence ensures your satisfaction</p>
        </p>
        <div className="mt-11">
          <Button title={"View details"} />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img className="object-contain" src={shoe8} />
      </div>
    </section>
  );
};

export default ProductFeatures;
