import React from "react";
import { Button, Statistics } from "./index";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import {shoes} from '../constants/index';

const Hero = () => {
  return (
    <section
      id="home"
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="pb-8 text-coral-red text-xl font-montserrat">
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10' >The New Arrival</span> <br />
          <span className=" text-coral-red">Nike</span> Shoes
        </h1>

        <p className="pb-10 pt-8 text-xl font-montserrat text-slate-600">
          Discover stylish Nike arrivals, quality <br /> comfort, and innovation
          for your active life.
        </p>
        <Button className="" title="Show now" imgURL={arrowRight} />

        <Statistics />
        </div>

        <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={bigShoe1}
            alt="shoe"
            width={610}
            height={502}
            className="object-contain relative z-10"
          />

          {
            shoes.map((item, index) => (
              <div key={index} className="">
                  <img src={item.bigShoe} alt='Shoe' height={5000} width={5000} />
              </div>
            ))
          }

        </div>
    </section>
  );
};

export default Hero;
