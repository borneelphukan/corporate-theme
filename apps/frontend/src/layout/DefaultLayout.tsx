import Navbar from "@/components/layoutComponents/Navbar";
import CircularProgressBar from "@/components/layoutComponents/CircularProgressBar";
import Footer from "@/components/layoutComponents/Footer";
import Loader from "@/components/layoutComponents/Loader";
import Head from "next/head";
import React, { useState, useEffect } from "react";

const DefaultLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <Head>
        <title>BDesign | Corporate Theme Template</title>
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          {/* Main content */}
          <main>
            {children}
            <CircularProgressBar />
          </main>

          <footer>
            {/* Footer will go here */}
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
