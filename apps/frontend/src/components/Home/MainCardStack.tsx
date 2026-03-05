import React from "react";
import Card from "../card/Card";
import cardStackData from "@/data/main-card-data.json"; // Update the path accordingly

const MainCardStack = () => {
  return (
    <div className="container px-auto overflow-hidden mx-auto -m-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
      {cardStackData.map((data, index) => (
        <Card
          key={index}
          icon={data.icon}
          title={data.title}
          content={data.content}
        />
      ))}
    </div>
  );
};

export default MainCardStack;
