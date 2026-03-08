import React from "react";

type BannerProps = {
  title: string;
  subtitle: string;
  bgClass?: string;
  theme?: "light" | "dark" | "maintenance";
};

const Banner: React.FC<BannerProps> = ({ title, subtitle, bgClass = "", theme = "dark" }) => {
  if (theme === "maintenance") {
    return (
      <div className="w-full relative bg-slate-900 overflow-hidden">
        {/* Dynamic Background Pattern / Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900 z-0"></div>
        
        <div className="container mx-auto px-10 relative z-10">
          <div className="pt-28 pb-10 md:pt-36 md:pb-12 lg:pt-40 lg:pb-16 xl:pt-48 xl:pb-20 text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="my-5 md:my-10 md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl mb-4 text-gray-300">
                {title}
              </h1>

              <p className="max-w-md text-3xl md:text-lg lg:text-5xl text-white font-bold w-[50%] text-center mx-auto tracking-tight">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className={`${bgClass} w-full`}>
      <div className="container mx-auto px-10">
        <div className={`pt-28 pb-10 md:pt-36 md:pb-12 lg:pt-40 lg:pb-16 xl:pt-48 xl:pb-20 ${isDark ? "text-white" : "text-black"}`}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className={`my-5 md:my-10 md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl mb-4 ${isDark ? "text-gray-200" : "text-gray-400"}`}>
              {title}
            </h1>

            <p className={`max-w-md text-3xl md:text-lg lg:text-5xl w-[50%] text-center mx-auto ${isDark ? "text-gray-100" : "text-gray-300"}`}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
