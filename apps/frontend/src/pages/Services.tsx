"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import RoleCardStack from "@/components/Services/RoleCardStack";
import ServiceBanner from "@/components/Services/ServiceBanner";
import ServiceCrumb from "@/components/breadcrumbs/ServiceCrumb";

const Services = () => {
  return (
    <DefaultLayout>
      <ServiceBanner />
      <div className="container mx-auto">
        <ServiceCrumb />
        <div className="max-w-8xl mx-auto text-center text-lg">
          <RoleCardStack />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Services;
