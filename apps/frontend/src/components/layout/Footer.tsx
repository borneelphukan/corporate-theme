import React from "react";
import contactData from "@/data/contact-data.json";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-8 relative">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 flex-grow">
          {/* Column 1 */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">
              <span className="text-orange-500">B</span>DESIGN
            </h2>
            {/* Your content for column 1 */}
            <p className="text-sm text-slate-400">
              This site has been set up purely for demonstration purposes and
              more.
            </p>
          </div>

          {/* Column 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Society</h2>
            {/* Your content for column 2 */}
            <ul className="text-left px-24">
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/committee"
                >
                  Committee
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/amenities"
                >
                  Amenities
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/rules"
                >
                  Rules
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/maintenance-pay"
                >
                  Maintenance Pay
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/help-desk"
                >
                  Help Desk
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/vendors"
                >
                  Vendors
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/upcoming-events"
                >
                  Upcoming Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Tenants</h2>
            {/* Your content for column 3 */}
            <ul className="text-left px-24">
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/leasing-info"
                >
                  Leasing Info
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/move-in-guidelines"
                >
                  Move-in Guidelines
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/tenant-portal"
                >
                  Tenant Portal
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/notice-board"
                >
                  Notice Board
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* All Rights Reserved tagline */}
      <p className="mt-8 text-sm text-slate-400">
        Borneel Bikash Phukan &copy; {new Date().getFullYear()} All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
