import React from "react";
import RoleCard from "../card/RoleCard";
import roleCard from "@/data/role-card-data.json"; // Update the path accordingly

const RoleCardStack = () => {
  return (
    <div className="container my-5 px-auto overflow-hidden mx-auto -m-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
      {roleCard.map((data, index) => (
        <RoleCard
          key={index}
          avatar={data.avatar}
          service={data.service}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default RoleCardStack;
