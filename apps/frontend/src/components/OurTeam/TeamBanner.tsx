import React from "react";
import MembersCrumb from "../breadcrumbs/MembersCrumb";

const TeamBanner = () => {
  return (
    <div className="team-cover">
      <div className="container mx-auto px-10">
        {/*Banner Goes Here*/}
        <div className=" py-10 md:py-10 lg:py-10 xl:py-10">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h1 className="justify-center mt-5 md:mt-10 md:ml-20 md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl mb-4">
              Members
            </h1>
            <div className="flex items-center justify-center">
              <p className="md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl">
                <MembersCrumb />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
