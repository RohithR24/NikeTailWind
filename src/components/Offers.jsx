import Button from "./Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";


const Offers = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className="flex-1">
      <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h4 className="text-4xl font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h4>
        <p className="mt-11 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-11 info-text">
         Navigate a realm of
          possibilities designed to fulfill your unique desires, surpassing the
          loftiest expectations. Your journey with us is nothing short of
          exceptional.
        </p>
        <div className="flex flex-row gap-4">
        <Button title='Shop Now' imgURL={arrowRight}/>
        <Button title='Learn More' bgColor={true}/>
        </div>
        
      </div>
    </section>
  );
};

export default Offers;
