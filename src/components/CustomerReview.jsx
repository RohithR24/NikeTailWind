import React from "react";
import {reviews} from '../constants/index';

const CustomerReview = () => {
  return (
    <section className="flex  flex-col justify-center items-center">
      <h4 className="text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h4>
      <p className="info-text text-center">
        Hear genuine stories from our satisfied customers about <br/>
        their
        exceptional experiences with us.
      </p>

      <div>
        {reviews.map(review, item)}
      </div>
    </section>
  );
};

export default CustomerReview;
