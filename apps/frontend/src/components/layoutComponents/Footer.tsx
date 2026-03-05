import React from "react";
import contactData from "@/data/contact-data.json";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-8 relative">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 flex-grow">
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
            <h1 className="text-xl font-semibold py-2">Contact Info</h1>
            <p className="text-sm">
              Email: <span className="text-slate-400">{contactData.email}</span>
            </p>
            <p className="text-sm my-1">
              Address:{" "}
              <span className="text-slate-400">{contactData.address}</span>
            </p>
            <p className="text-sm my-1">
              Phone: <span className="text-slate-400">{contactData.fax}</span>
            </p>
          </div>

          {/* Column 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Customer</h2>
            {/* Your content for column 2 */}
            <ul className="text-left px-24">
              <li className="py-2">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="#"
                >
                  Get BDESIGN
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="#"
                >
                  Documentation
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="#"
                >
                  Pricing
                </Link>
              </li>
              <li className="py-1">
                <li className="py-1">
                  <Link
                    className="text-sm text-slate-400 hover:text-orange-500"
                    href="/Contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            {/* Your content for column 3 */}
            <ul className="text-left px-24">
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="/AboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="#"
                >
                  Career
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="#"
                >
                  Projects
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="#"
                >
                  Join Our Team
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-400 hover:text-orange-500"
                  href="#"
                >
                  Our Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Location</h2>
            {/* Your content for column 4 */}
            <Image
              src={"/images/footer-map.jpg"}
              alt="Map"
              width={500}
              height={500}
            />
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
