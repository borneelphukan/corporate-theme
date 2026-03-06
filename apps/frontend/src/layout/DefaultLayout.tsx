import Navbar from "@/components/layout/Navbar";
import CircularProgressBar from "@/components/layout/CircularProgressBar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import Head from "next/head";
import React, { useState, useEffect } from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Rely immediately on Loader completing to hide it
  }, []);

  return (
    <div>
      <Head>
        <title>Welcome | Borneel Bikash Phukan</title>
      </Head>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen relative">
          <Navbar />

          <main className="">
            {children}
            <CircularProgressBar />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
