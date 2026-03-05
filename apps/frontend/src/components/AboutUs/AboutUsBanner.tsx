import React from "react";

const AboutUsBanner = () => {
  return (
    <div className="about-cover">
      <div className="container mx-auto px-10">
        {/*Banner Goes Here*/}
        <div className=" py-10 md:py-10 lg:py-10 xl:py-10 text-black">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="my-5 md:my-10 md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl mb-4 text-gray-400">
              About Us
            </h1>

            <p className="max-w-md text-3xl md:text-lg lg:text-5xl text-gray-300 w-[50%] text-center mx-auto">
              Loud Appearance For Your Brands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
