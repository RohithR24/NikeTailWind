import React from "react";
import { reviews } from "../constants/index";
import { star } from "../assets/icons";
const CustomerReview = () => {
  return (
    <section className="flex  flex-col justify-center items-center">
      <h4 className="text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h4>
      <p className="info-text text-center">
        Hear genuine stories from our satisfied customers about <br />
        their exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <div
            className="flex justify-center items-center flex-col"
            key={index}
          >
            <img
              className="rounded-full object-cover w-[120px] h-[120px]"
              src={review.imgURL}
              alt={review.customerName}
              h={24}
              w={24}
            />
            <p className="info-text text-center max-w-sm">{review.feedback}</p>
            <div className="flex flex-row  items-center justify-center gap-2">
              <img src={star} alt="Star" className="object-contain m-0" />
              <p className="info-text ">({review.rating})</p>
            </div>

            <h4 className="text-xl font-bold">{review.customerName}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
