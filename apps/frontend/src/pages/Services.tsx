"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import RoleCardStack from "@/components/Services/RoleCardStack";
import ServiceBanner from "@/components/Services/ServiceBanner";
import Breadcrumb from "@/components/breadcrumb";

const Services = () => {
  return (
    <DefaultLayout>
      <ServiceBanner />
      <div className="container mx-auto">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <div className="max-w-8xl mx-auto text-center text-lg">
          <RoleCardStack />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Services;
