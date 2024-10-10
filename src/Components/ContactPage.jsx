import RequestForm from "./ContactUs/RequestForm";
import ThankYouMessage from "./ThankyouMessage";

function ContactPage() {
  return (
    <>
      <div className="bg-[#002349] text-[#fff] flex flex-col md:flex-row items-center justify-around p-4">
        <div className="mb-2 md:mb-0">
          <div className="text-3xl w-[200px] text-center cursor-pointer TimesNewRoman tracking-tight">
            Real Estate<p className="text-xl tracking-tight">EverHome</p>
          </div>
        </div>
        <div className="text-center">
          <p>GLOBAL CLIENT SERVICES AT EVERHOME REALTY</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="w-full h-[200px] md:h-[300px] object-cover"
          src="../src/assets/sir-background.png"
          alt="High Quality Image"
        />
      </div>
      <ThankYouMessage />
      <RequestForm />

      <div className="text-sm text-gray-500 flex flex-col justify-center items-center py-4 w-[90%] m-auto my-10">
        <p>©EverHome. All rights reserved.</p>
        <p>Notice: Texas Real Estate Commission Consumer Protection</p>
        <p>
          EverHome Realty is fully committed to promoting the Fair Housing Act
          and Equal Opportunity regulations. Every office operates
          independently, and EverHome, the EverHome logo, and associated
          trademarks are property of EverHome or its licensors.
        </p>
        <p>
          Information provided on this website is based on reliable sources, but
          since it may come from third parties or other sources, accuracy and
          completeness cannot be guaranteed. Listings and offers are subject to
          change, errors, or removal without prior notice. All measurements are
          approximate and should be independently verified by professionals,
          such as architects, appraisers, or surveyors.
        </p>
        <p>
          For more details, visit: Texas Real Estate Commission - Brokerage
          Information
        </p>
      </div>
    </>
  );
}

export default ContactPage;
