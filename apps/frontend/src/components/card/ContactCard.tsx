import React from "react";
import "font-awesome/css/font-awesome.min.css";

const ContactCard = ({ icon, title, address }) => {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg py-10 px-5">
      <div className="text-4xl px-5">
        <i className={`text-4xl fa ${icon} mb-4`}></i>
      </div>

      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-base">{address}</p>
      </div>
    </div>
  );
};

export default ContactCard;
