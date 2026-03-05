import React from "react";
import OurTeamCard from "../card/OurTeamCard";
import Member1 from "../AboutUs/assets/member-1.jpg";
import Member2 from "../AboutUs/assets/member-2.jpg";
import Member3 from "../AboutUs/assets/member-3.jpg";
import Button from "../buttons/Button";

const OurTeam = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 mt-10">
        <p className="text-base md:text-lg lg:text-neutral-500">OUR TEAM</p>
        <h1 className="text-4xl font-semibold mb-10">Company Leadership</h1>

        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-1">
          {/* First Card */}
          <OurTeamCard
            avatar={Member1}
            name="Tomasz Treflerzan"
            role="CEO"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat sagittis massa. Duis et cursus elit. Morbi lacinia luctus dui, lacinia imperdiet velit. Vestibulum eu dui turpis."
          />
          {/* Second Card */}
          <OurTeamCard
            avatar={Member2}
            name="Viktoriia Demianenko"
            role="Co-Founder"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat sagittis massa. Duis et cursus elit. Morbi lacinia luctus dui, lacinia imperdiet velit. Vestibulum eu dui turpis."
          />
          {/* Third Card */}
          <OurTeamCard
            avatar={Member3}
            name="Robin Doe"
            role="CFO"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat sagittis massa. Duis et cursus elit. Morbi lacinia luctus dui, lacinia imperdiet velit. Vestibulum eu dui turpis."
          />
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <Button bgColor="white" textColor="black" text="Contact Us" />
      </div>
    </div>
  );
};

export default OurTeam;
