import React from "react";
import { services } from "../constants/index";
import { ServicesCard } from "../components/index";
const Services = () => {
  return (
    <section>
      {services.map((item, index) => (
        // 
        <img src={item.imgURL} alt={item.label} width={24} height={24} />

      ))}
    </section>
  );
};

export default Services;
