import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <div className="">
          <ServiceCard key={index} {...service} />
        </div>
      ))}
    </section>
  );
};

export default Services;
