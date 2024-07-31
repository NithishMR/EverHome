import React from "react";
import agentData from "../../public/Agents.json";
import imageSrc from "/src/assets/Image13.jpg";

function Agents() {
  return (
    <div className="">
      <div className="">
        <img src={imageSrc} alt="background Image" className="" />
      </div>
      <div className="w-[94%] m-auto">
        {agentData.map((agent, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between py-4 custom-border5"
          >
            <div className="flex flex-col ">
              <div className="py-4">
                <div className="font-bold text-[20px] TimesNewRoman py-2">
                  {agent.name}
                </div>
                <div className="font-semibold text-[18px] text-gray-400">
                  {agent.title}
                </div>
              </div>
              <div className="py-4 custom-border">
                <div className="TimesNewRoman py-2">{agent.branch}</div>
                <div className="text-gray-400">{agent.address}</div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col">
                <div className="TimesNewRoman">CONTACT</div>
                <div className="py-2">{agent.contacts.contact1}</div>
                <div className="py-2">{agent.contacts.contact2}</div>
              </div>
              <div className="pt-8 m-auto">
                <div className="cursor-pointer inline-block">SEND MESSAGE </div>
                <button type="button" className="font-[40px] ml-3 p-2">
                  <span>&#x2192;</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agents;
