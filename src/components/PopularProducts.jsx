import React from "react";
import { products } from "../constants/index";
import { star } from "../assets/icons/index";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
    <div className="flex flex-col justify-start">
      <h2 className="text-4xl font-semibold pb-6">
        Our <span className="text-coral-red"> Popular </span> Products{" "}
      </h2>
      <p className="text-lg text-md font-montserrat text-slate-600">
        Experience top-notch quality and style with our sought-after <br />{" "}
        selections. Discover a world of comfort, design, and value
      </p>
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ">
        {products.map((item, index) => (
          <div
            className="flex flex-col justify-center leading-relaxed items-start font-montserrat text-2xl font-medium"
            key={index}
          >
            <img src={item.imgURL} alt={"Shoe Image"} />
            <span className="flex flex-row gap-1 justify-center items-center">
              <img src={star} alt={"rating star"} />({item.rating})
            </span>
            <span className="font-bold">
              {item.name} <br/>
              <span className="text-coral-red">{item.price}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default PopularProducts;
