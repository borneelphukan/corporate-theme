import DefaultLayout from "@/layout/DefaultLayout";
import Head from "next/head";

import Banner from "@/components/Home/Banner";
import MainCardStack from "@/components/Home/MainCardStack";
import Features from "@/components/Home/Features";
import Recruitment from "@/components/Home/Recruitment";
import Feedbacks from "@/components/Home/Feedbacks";
import PriceStack from "@/components/Home/PriceStack";
import Jumbotron from "@/components/Home/Jumbotron";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <MainCardStack />
      <Features />
      <Recruitment />
      <Jumbotron />
      <PriceStack />
      <Feedbacks />
    </DefaultLayout>
  );
};

export default Home;
