"use client";
import React, { useState, useEffect } from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import TestimonialsBanner from "@/components/Testimonials/TestimonialsBanner";
import Breadcrumb from "@/components/breadcrumb";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/testimonials"); // Assuming you have set up the API route as mentioned in the previous example
        const data = await response.json();
        setTestimonialsData(data.testimonialsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <TestimonialsBanner />
      <div className="container mx-auto">
        <Breadcrumb 
          items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
          olClasses="container inline-flex items-center space-x-1 md:space-x-3 m-4"
          linkClasses="inline-flex items-center text-sm font-normal text-gray-700 hover:text-orange-500"
          activeClasses="ml-1 text-sm font-normal text-gray-700 md:ml-2"
        />
        <div className="max-w-8xl mx-auto text-center text-lg p-5 my-10">

        </div>
      </div>
    </DefaultLayout>
  );
};

export default Testimonials;
