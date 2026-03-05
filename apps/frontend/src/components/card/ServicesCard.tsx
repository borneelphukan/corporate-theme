import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";

const ServicesCard = ({ avatar, serviceName, description }) => {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white py-10 px-5">
      <Link href="/">
        <div className="h-32 w-32 mx-auto rounded-full flex items-center justify-center overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={avatar}
            alt="Avatar"
            width={500}
            height={500}
          />
        </div>
      </Link>

      <div className="px-6 py-4">
        <a
          href="#"
          className="text-normal font-semibold pt-2 hover:text-orange-500 transition-colors duration-300"
        >
          {serviceName}
        </a>
        <p className=" max-w-md mx-auto text-sm md:text-sm lg:text-neutral-400 ">
          {description}
        </p>
        <Button bgColor="white" textColor="black" text="Read More" />
      </div>
    </div>
  );
};

export default ServicesCard;
