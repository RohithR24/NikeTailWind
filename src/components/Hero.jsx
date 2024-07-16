import React from "react";
import { Button, Statistics } from "./index";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className=" xl:2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="pb-8 text-orange-600 text-xl font-montserrat">
          Our Summer collections
        </p>

        <h1 className="text-8xl font-semibold">
          <span>The New Arrival</span> <br />
          <span className=" text-orange-600">Nike</span> Shoes
        </h1>

        <p className="pb-10 pt-8 text-xl font-montserrat text-slate-600">
          Discover stylish Nike arrivals, quality <br /> comfort, and innovation
          for your active life.
        </p>
        <Button className="" title="Show now" imgURL={arrowRight} />

        <Statistics />
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={bigShoe1}
            alt="shoe"
            width={610}
            height={502}
            className="object-contain relative z-10"
          />
        </div>
    </section>
  );
};

export default Hero;
