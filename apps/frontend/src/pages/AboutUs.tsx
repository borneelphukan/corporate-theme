"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import OurTeam from "@/components/AboutUs/OurTeam";
import Services from "@/components/AboutUs/Services";
import ChooseUs from "@/components/AboutUs/ChooseUs";
import Breadcrumb from "@/components/breadcrumb";
import AboutUsBanner from "@/components/AboutUs/AboutUsBanner";

const AboutUs = () => {
  return (
    <DefaultLayout>
      <AboutUsBanner />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      <ChooseUs />
      <Services />
      <OurTeam />
    </DefaultLayout>
  );
};

export default AboutUs;
