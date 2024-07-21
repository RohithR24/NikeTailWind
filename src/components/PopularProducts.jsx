import React from "react";
import { products } from "../constants/index";
import { star } from "../assets/icons/index";

const PopularProducts = () => {
  return (
    <section className="flex flex-col">
      <h2 className="text-4xl font-semibold pb-6">
        Our <span className="text-coral-red"> Popular </span> Products{" "}
      </h2>
      <p className="text-md font-montserrat text-slate-600">
        Experience top-notch quality and style with our sought-after <br />{" "}
        selections. Discover a world of comfort, design, and value
      </p>
      <div className="flex flex-row gap-4 justify-center items-center">
        {products.map((item, index) => (
          <div className="flex flex-col justify-center items-start" key={index}>
            <img src={item.imgURL} alt={"Shoe Image"} />
            <span className="flex flex-row gap-1 justify-center items-center">
              <img src={star} alt={"rating star"} />
              {item.rating}
            </span>
            <span>{item.name}</span>
            <span className="text-coral-red font-bold">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
