import React from "react";
import ChooseUsCard from "../card/ChooseUsCard";

const ChooseUs = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 mt-10">
        <p className="text-base md:text-lg lg:text-neutral-500 pb-2">
          WHY CHOOSE US
        </p>
        <h1 className="max-w-md text-4xl mx-auto font-semibold mb-10">
          Long-term vision and grow your business
        </h1>

        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Card */}
          <ChooseUsCard
            number={35}
            statement="Years Experience"
            description="We were released 6 years ago and it still stays on top."
          />
          {/* Second Card */}
          <ChooseUsCard
            number={250}
            statement="Satisfied Clients"
            description="We have many returning customers that got to trust us a solid partner."
          />
          {/* Third Card */}
          <ChooseUsCard
            number={300}
            statement="Project Done"
            description="Join the 50,000+ happy BDesign users and learn why we've been for so long"
          />
        </div>
      </div>
      <div className="mx-auto flex justify-center"></div>
    </div>
  );
};

export default ChooseUs;
