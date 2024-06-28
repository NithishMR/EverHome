// ThankYouMessage.js
import React from "react";

function ThankYouMessage() {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        THANK YOU FOR CONTACTING EVERHOME'S INTERNATIONAL REALTY
      </h2>
      <p className="mt-4 text-gray-600 text-center">
        Using the form below, please provide as much detailed information as
        possible. The information you submit may be shared with our
        independently owned and operated franchisee so that your concerns can be
        addressed.
      </p>
      <p className="mt-4 text-gray-600 text-center">
        Please note that by providing your phone number and email address, you
        are providing consent for us to reach out to you via this method.
      </p>
      <p className="mt-4 text-gray-600 text-center">
        If this is a Data Privacy related matter, please
        <a href="#" className="text-blue-500 underline">
          {" "}
          click here.
        </a>
      </p>
    </div>
  );
}

export default ThankYouMessage;
