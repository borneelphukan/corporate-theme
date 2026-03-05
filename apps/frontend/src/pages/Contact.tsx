"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import DetailsStack from "@/components/Contact/DetailsStack";
import ContactCrumb from "@/components/breadcrumbs/ContactCrumb";
import ContactBanner from "@/components/Contact/ContactBanner";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <DefaultLayout>
      <ContactBanner />
      <ContactCrumb />
      <DetailsStack />
      <ContactForm/>
    </DefaultLayout>
  );
};

export default Contact;
