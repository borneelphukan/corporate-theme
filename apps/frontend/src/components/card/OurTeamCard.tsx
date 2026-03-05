import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurTeamCard = ({ avatar, name, role, description }) => {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white py-10 px-5">
      <Link href="/">
        <div className="h-48 w-48 mx-auto rounded-full flex items-center justify-center overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={avatar}
            alt="Avatar"
            width={100}
            height={100}
          />
        </div>
      </Link>

      <div className="px-6 py-4">
        <a
          href="#"
          className="text-normal font-semibold pt-2 hover:text-orange-500 transition-colors duration-300"
        >
          {name}
        </a>
        <p className="text-gray-400 text-sm mb-3 hover:text-orange-500">
          {role}
        </p>
        <p className=" max-w-md mx-auto text-sm md:text-sm lg:text-neutral-400 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OurTeamCard;
