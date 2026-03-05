import React from "react";
import ourTeamData from "@/data/ourteam-data.json"; // Update the path accordingly
import MembersCard from "../card/MembersCard.js";

const MemberStack = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 mt-10">
        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 p-1">
          {ourTeamData.map((data, index) => (
            <MembersCard
              key={index}
              avatar={data.avatar}
              role={data.role}
              name={data.name}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberStack;
