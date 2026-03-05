import React from "react";
import PriceCard from "../card/PriceCard";

const PriceStack = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-8xl mx-auto text-center text-lg p-5">
        <p className="text-base md:text-lg lg:text-neutral-500 mb-3">
          PREDICTABLE PRICING
        </p>
        <h1 className="max-w-xl mx-auto text-4xl font-semibold py-2">
          Choose the right plan for your business
        </h1>
        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
          {/* First Card */}
          <PriceCard
            price="$29"
            plan={"Basic Plan"}
            packageName="Starter Design"
            products="5 Products"
            storage="5GB Storage"
            bandwidth="10GB Bandwidth"
          />

          {/* Second Card */}
          <PriceCard
            price="$49"
            plan={"Normal Plan"}
            packageName="Medium Design"
            products="15 Products"
            storage="30GB Storage"
            bandwidth="50GB Bandwidth"
          />

          {/* Third Card */}
          <PriceCard
            price="$69"
            plan={"Pros Plan"}
            packageName="Premium Design"
            products="Unlimited Products"
            storage="Unlimited Storage"
            bandwidth="Unlimited Bandwidth"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceStack;
