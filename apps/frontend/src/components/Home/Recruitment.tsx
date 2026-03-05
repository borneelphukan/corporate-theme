import React from "react";
import Button from "../buttons/Button";

const Recruitment = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="max-w-5xl mx-auto text-center text-lg">
        <h1 className="text-4xl font-semibold mb-3">
          Steps of Recruitment Process
        </h1>

        <p className="max-w-md mx-auto text-base md:text-lg lg:text-neutral-400">
          We can help you with picking out the best people for your company
        </p>

        <div className="overflow-x-auto">
          <div className="flex space-x-16">
            <div className="text-center p-8">
              <div className="w-28 h-28 shadow-lg  bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-2xl font-semibold">
                  01
                </span>
              </div>
              <h5 className="text-xl font-semibold mt-4">Web Design</h5>
              <p className="text-base md:text-base lg:text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                erat orci.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-28 h-28 shadow-lg  bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-2xl font-semibold">
                  02
                </span>
              </div>
              <h5 className="text-xl font-semibold mt-4">Apps Development</h5>
              <p className="text-base md:text-base lg:text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                erat orci.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-28 h-28 shadow-lg bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-2xl font-semibold">
                  03
                </span>
              </div>
              <h5 className="text-xl font-semibold mt-4">Digital Marketing</h5>
              <p className="text-base md:text-base lg:text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                erat orci.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-28 h-28 shadow-lg  bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-2xl font-semibold">
                  04
                </span>
              </div>

              <h5 className="text-xl font-semibold mt-4">UI/UX Design</h5>
              <p className="text-base md:text-base lg:text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                erat orci.
              </p>
            </div>
          </div>
        </div>

        <Button bgColor="white" textColor="black" text="Online Application" />
      </div>
    </div>
  );
};

export default Recruitment;
