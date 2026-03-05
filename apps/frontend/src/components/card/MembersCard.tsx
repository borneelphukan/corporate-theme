import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const MembersCard = ({ avatar, name, role, description }) => {
  return (
    <div className="container mx-auto">
      <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white py-10 px-5">
        <div className="h-48 w-48 mx-auto rounded-full flex items-center justify-center overflow-hidden">
          <Image
            className="hover:scale-125 transition-all duration-500 cursor-pointer w-full h-full object-cover"
            src={avatar}
            alt="Avatar"
            width={500}
            height={500}
          />
        </div>

        <div className="px-6 py-4">
          <a
            href="#"
            className="text-normal text-gray-800 font-semibold pt-2 hover:text-orange-500 transition-colors duration-300"
          >
            {name}
          </a>
          <p className="text-gray-400 text-sm mb-3 hover:text-orange-500">
            {role}
          </p>
          <p className=" max-w-md mx-auto text-sm md:text-sm lg:text-gray-800 ">
            {description}
          </p>

          <div className="mt-10">
            <a href="#" target="_blank">
              <FontAwesomeIcon
                className="mx-3 text-gray-800 hover:text-blue-400"
                icon={faFacebook}
                target="_blank"
              />
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon
                className="mx-3 text-gray-800 hover:text-blue-400"
                icon={faTwitter}
                target="_blank"
              />
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon
                className="mx-3 text-gray-800 hover:text-blue-400"
                icon={faLinkedin}
                target="_blank"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
