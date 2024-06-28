import RequestForm from "./ContactUs/RequestForm";
import ThankYouMessage from "./ThankyouMessage";
// import FindAnExpert from "./SellSection/FindAnExpert"

function ContactPage() {
  return (
    <>
      <div className="bg-[#002349] text-[#fff] flex items-center justify-around">
        <div className="">
          <div className="text-3xl w-[200px] text-center cursor-pointer TimesNewRoman tracking-tight">
            Real Estate<p className="text-xl tracking-tight">EverHome</p>
          </div>
        </div>
        <div className="">
          <p>EVERHOME'S INTERNATIONAL REALTY GLOBAL CARE</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <img
          className="w-full h-[300px] object-cover"
          src="../src/assets/sir-background.png"
          alt="High Quality Image"
        />
      </div>
      <ThankYouMessage />
      <RequestForm />

      <div className="text-sm text-gray-500 flex flex-col justify-center items-center py-4 w-[90%] m-auto my-10">
        <p>©Everhome. All Rights Reserved.</p>
        <p>Texas Real Estate Commission Consumer Protection Notice</p>
        <p>
          Everhome fully supports the principles of the Fair Housing Act and the
          Equal Opportunity Act. Each Office is Independently Owned and
          Operated. Everhome, the Everhome logo, "For the Ongoing Collection of
          Life" and RESIDE are registered (or unregistered) service marks owned
          or licensed to Everhome.
        </p>
        <p>
          The information set forth on this site is based upon information which
          we consider reliable, but because it has been supplied by third
          parties to our franchisees (who in turn supplied it to us), we cannot
          represent that it is accurate or complete, and it should not be relied
          upon as such. The offerings are subject to errors, omissions, changes,
          including price, or withdrawal without notice. All dimensions are
          approximate and have not been verified by the selling party and cannot
          be verified by Everhome. It is recommended that you hire a
          professional in the business of determining dimensions, such as an
          appraiser, architect, or civil engineer, to determine such
          information.
        </p>
        <p>Texas Real Estate Commission Information About Brokerage Services</p>
      </div>
    </>
  );
}
export default ContactPage;
