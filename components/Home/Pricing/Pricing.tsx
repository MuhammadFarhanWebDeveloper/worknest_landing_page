import React from "react";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <div className="py-10 ">
      <h1
        data-aos="fade-right"
        className="text-center text-2xl md:text-3xl py-10 font-bold"
      >
        Meet Our Exciting Pricing Plans
      </h1>
      <div className="grid lg:gap-10 gap-5 grid-cols-1 lg:grid-cols-2 p-2  sm:p-5 md:px-32">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PricingCard price={15} plan="Starter" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <PricingCard price={45} plan="Business" />
        </div>
      </div>
    </div>
  );
}
