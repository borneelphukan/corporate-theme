"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import TeamBanner from "@/components/OurTeam/TeamBanner";
import MemberStack from "@/components/OurTeam/MemberStack";

const OurTeam = () => {
  return (
    <DefaultLayout>
      <TeamBanner />
      <MemberStack />
    </DefaultLayout>
  );
};

export default OurTeam;
