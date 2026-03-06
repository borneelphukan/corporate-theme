"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import Head from "next/head";
import Breadcrumb from "@/components/breadcrumb";
import Banner from "@/components/banner";
import Button from "@/components/button";

const societyFees = [
  { item: "Common Area Electricity", amount: "₹ 1,200" },
  { item: "Water Supply & Pumping", amount: "₹ 800" },
  { item: "Cleaning & Housekeeping", amount: "₹ 900" },
  { item: "Elevator AMC", amount: "₹ 500" },
  { item: "Sinking Fund Contribution", amount: "₹ 1,100" },
];
const totalSocietyFee = "₹ 4,500";

const securityFees = [
  { item: "24/7 Gate Security Guard", amount: "₹ 3,500" },
  { item: "CCTV Network & Surveillance AMC", amount: "₹ 1,000" },
  { item: "Biometric Access System Maint.", amount: "₹ 500" },
];
const totalSecurityFee = "₹ 5,000";

const MaintenancePay = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Contributions | Our Society</title>
      </Head>

      <div className="relative min-h-screen w-full bg-slate-50/50 overflow-hidden">
        {/* Radiant blurred background elements (Consistency with other pages) */}
        <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-[20%] -right-[10%] w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute -bottom-[10%] left-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="relative z-10 pb-20">
          {/* Banner component */}
          <Banner title="Services" subtitle="Contributions" theme="maintenance" />
          
          <Breadcrumb items={[{ label: "Services", href: "/" }, { label: "Contributions" }]} />

          <div className="max-w-4xl mx-auto px-6 md:px-12 mt-16">
            {/* Monthly fees section */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-black mb-4 tracking-tight">
                Monthly <span className="text-blue-500">Society Fees</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Breakdown of the monthly society maintenance charges applicable to each residential unit.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden mb-16">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-100">
                      <th className="py-5 px-6 md:px-10 text-gray-500 font-semibold tracking-wider uppercase text-sm">
                        Charge Category
                      </th>
                      <th className="py-5 px-6 md:px-10 text-gray-500 font-semibold tracking-wider uppercase text-sm text-right">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {societyFees.map((fee, idx) => (
                      <tr 
                        key={idx} 
                        className="border-b border-gray-50 hover:bg-slate-50/70 transition-colors duration-200"
                      >
                        <td className="py-4 px-6 md:px-10 text-gray-700 font-medium">
                          {fee.item}
                        </td>
                        <td className="py-4 px-6 md:px-10 text-gray-800 font-bold text-right font-mono">
                          {fee.amount}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-blue-50/50">
                      <td className="py-6 px-6 md:px-10 text-blue-900 font-extrabold text-lg md:text-xl">
                        Total Monthly Maintenance
                      </td>
                      <td className="py-6 px-6 md:px-10 text-blue-600 font-black text-xl md:text-2xl text-right font-mono tracking-tight">
                        {totalSocietyFee}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Annual security fee section */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-black mb-4 tracking-tight">
                Annual <span className="text-orange-500">Security Fees</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Breakdown of our comprehensive yearly security network maintenance and management.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-orange-900/5 border border-gray-100 overflow-hidden mb-20">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-100">
                      <th className="py-5 px-6 md:px-10 text-gray-500 font-semibold tracking-wider uppercase text-sm">
                        Charge Category
                      </th>
                      <th className="py-5 px-6 md:px-10 text-gray-500 font-semibold tracking-wider uppercase text-sm text-right">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {securityFees.map((fee, idx) => (
                      <tr 
                        key={idx} 
                        className="border-b border-gray-50 hover:bg-slate-50/70 transition-colors duration-200"
                      >
                        <td className="py-4 px-6 md:px-10 text-gray-700 font-medium">
                          {fee.item}
                        </td>
                        <td className="py-4 px-6 md:px-10 text-gray-800 font-bold text-right font-mono">
                          {fee.amount}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-orange-50/50">
                      <td className="py-6 px-6 md:px-10 text-orange-900 font-extrabold text-lg md:text-xl">
                        Total Annual Security Fee
                      </td>
                      <td className="py-6 px-6 md:px-10 text-orange-600 font-black text-xl md:text-2xl text-right font-mono tracking-tight">
                        {totalSecurityFee}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payment Call To Action Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl flex flex-col items-center justify-center border border-blue-400/30">
              
              {/* Background abstract circles for CTA block */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white/20 p-4 rounded-full mb-6 relative">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-4xl font-black mb-3 drop-shadow-sm tracking-tight">
                  Haven&apos;t paid your fees yet?
                </h3>
                
                <p className="text-blue-100 md:text-lg mb-8 max-w-lg font-light">
                  Ensure seamless services and avoid late penalties. Click below to proceed to our secure payment gateway and clear your dues instantly.
                </p>

                <Button 
                  variant="secondary"
                  icon={{ right: <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg> }}
                >
                  Pay Now
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MaintenancePay;
