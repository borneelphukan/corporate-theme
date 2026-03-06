import React from "react";
import Breadcrumb from "../breadcrumb";

const TeamBanner = () => {
  return (
    <div className="team-cover">
      <div className="container mx-auto px-10">
        {/*Banner Goes Here*/}
        <div className="pt-28 pb-10 md:pt-36 md:pb-12 lg:pt-40 lg:pb-16 xl:pt-48 xl:pb-20">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h1 className="justify-center mt-5 md:mt-10 md:ml-20 md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl mb-4">
              Members
            </h1>
            <div className="flex items-center justify-center">
              <p className="md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl">
                <Breadcrumb 
                  items={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
                  olClasses="container inline-flex items-center space-x-1 md:space-x-3 md:pl-20 pl-4"
                  linkClasses="inline-flex items-center text-sm font-normal hover:text-white"
                  activeClasses="ml-1 text-sm font-normal md:ml-2"
                  svgClasses="w-3 h-3 text-gray-400"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
