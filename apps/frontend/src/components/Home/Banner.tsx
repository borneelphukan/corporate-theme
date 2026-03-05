import React from "react";
import Button from "../buttons/Button";

const Banner = () => {
  return (
    <div className="home-container">
      <div className="container mx-auto px-20">
        {/*Banner Goes Here*/}
        <div className=" py-16 md:py-24 lg:py-32 xl:py-48 text-black">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-base md:text-xl lg:text-xl xl:text-base font-semibold mb-2 text-white">
              Welcome to BDESIGN!
            </h1>
            <h1 className="text-5xl font-semibold text-white">
              Join over{" "}
              <span className="text-6xl font-bold text-orange-500">50K+</span>
            </h1>
            <h1 className="md:text-5xl lg:text-5xl xl:text-5xl font-semibold  text-5xl mb-4 text-white">
              Customers who Love It!
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-neutral-400">
              Offering web solutions since June 04. 2011
            </p>
            <Button bgColor="black" textColor="white" text="View More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
