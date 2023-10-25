import React from "react";
import Image from "next/image";
import RatingStars from "../RatingStars";

const FeedbackCard = ({ avatar, name, comment, stars, role }) => {
  return (
  <div class="max-w-xl rounded overflow-hidden shadow-lg bg-white py-10 px-5">
  <div className=" mx-auto bg-white rounded-full flex items-center justify-center">
   <Image
   src={avatar}
   alt="Avatar"
    width={100}
    height={100}/>
  </div>
  
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base">{comment}</p>
    <RatingStars numStars={stars}/>
    <h2 class="text-normal font-semibold pt-2">{name}</h2>
    <p class="text-gray-700 text-sm">{role}</p>
  </div>
</div>
  );
};

export default FeedbackCard;
