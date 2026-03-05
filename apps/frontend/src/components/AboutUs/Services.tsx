import React from "react";
import ServicesCard from "../card/ServicesCard";
import Service1 from "../AboutUs/assets/service-1.png";
import Service2 from "../AboutUs/assets/service-2.png";
import Service3 from "../AboutUs/assets/service-3.png";

const Services = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 my-10">
        <p className="text-base md:text-lg lg:text-neutral-500 mb-3">
          SERVICES
        </p>
        <h1 className="max-w-md text-4xl mx-auto font-semibold mb-10">
          We provide high quality services
        </h1>

        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-1">
          {/* First Card */}
          <ServicesCard
            avatar={Service1}
            serviceName="Solid Build"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat sagittis massa. Duis et cursus elit. Morbi lacinia luctus dui, lacinia imperdiet velit. Vestibulum eu dui turpis."
          />
          {/* Second Card */}
          <ServicesCard
            avatar={Service2}
            serviceName="Ongoing Support"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat sagittis massa. Duis et cursus elit. Morbi lacinia luctus dui, lacinia imperdiet velit. Vestibulum eu dui turpis."
          />
          {/* Third Card */}
          <ServicesCard
            avatar={Service3}
            serviceName="SEO Review"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat sagittis massa. Duis et cursus elit. Morbi lacinia luctus dui, lacinia imperdiet velit. Vestibulum eu dui turpis."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
