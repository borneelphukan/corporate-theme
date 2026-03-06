"use client";
import React, { useState, useEffect } from "react";
import Button from "../buttons/Button";

const images = [
  "/images/banners/banner-background.jpg",
  "/images/banners/about-banner.jpeg",
  "/images/banners/contact-banner.jpeg",
  "/images/banners/ourteam-banner.jpg",
  "/images/banners/service-banner.jpeg",
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="home-container transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="container mx-auto px-20">
        {/*Banner Goes Here*/}
        <div className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 xl:pt-64 xl:pb-48 text-black">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-base md:text-xl lg:text-xl xl:text-base font-semibold mb-2 text-white">
              Welcome to BDESIGN!
            </h1>
            <h1 className="text-5xl font-semibold text-white">
              Join over{" "}
              <span className="text-6xl font-bold text-orange-500">50K+</span>
            </h1>
            <h1 className="md:text-5xl lg:text-5xl xl:text-5xl font-semibold  text-5xl mb-4 text-white">
              Customers who Love It!
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-neutral-400">
              Offering web solutions since June 04. 2011
            </p>
            <Button bgColor="black" textColor="white" text="View More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
