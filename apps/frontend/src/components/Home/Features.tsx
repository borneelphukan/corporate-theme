import React from "react";
import Button from "../buttons/Button";
import FeatureBanner from "../Home/assets/features-banner.png";
import Image from "next/image";

const Features = () => {
  return (
    <div className="container mt-20 mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="py-4 md:py-24 lg:py-32 xl:py-8 flex flex-col md:flex-row items-center">
        <div className="max-w-7xl mx-auto md:w-1/2 text-center md:text-left md:pr-8">
          <h1 className="text-base md:text-xl lg:text-xl xl:text-base font-semibold mb-2 text-gray-400 uppercase">
            Features
          </h1>
          <h1 className="text-4xl font-semibold mb-3">
            Create your own unique
          </h1>
          <h1 className="md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-4xl mb-4">
            website & have fun doing it!
          </h1>
          <p className="text-base md:text-lg lg:text-neutral-400">
            BDesign was released more than 6 years ago. And it is a very
            powerful theme which suits both users with no programming background
            as well as professional web designers.
          </p>
          <Button bgColor="white" textColor="black" text="View More" />
        </div>
        <div className="mt-4 md:mt-0 md:ml-4">
          <Image
            src={FeatureBanner}
            alt="Image Description"
            className="w-64 h-64 md:w-96 md:h-96" // Adjust the size for mobile and larger screens
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
