import React from "react";
import Button from "./Button";
const Subscribe = () => {
  return (
    <section className="flex lg:flex-row flex-xol justify-between items-center">
      <div>
        <h4 className="text-4xl font-bold mb-10 font-palanquin">
          Sign Up for <span className="text-coral-red">Updates</span> & <br/>
          Newsletter
        </h4>
      </div>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button title="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
