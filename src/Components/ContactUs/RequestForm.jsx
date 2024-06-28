// RequestForm.js
import React, { useState } from "react";

function RequestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "United States",
    state: "",
    city: "",
    office: "",
    agent: "",
    agentName: "",
    incidentDate: "2024-06-26",
    concernType: "",
    issueDescription: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="max-w-[70%] mx-auto p-4 space-y-6 bg-white rounded shadow-md">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            In what country is the office located?
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="United States">United States</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            In which state is the office located?
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a State</option>
            {/* Add more state options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            In which city is the office located?
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select City</option>
            {/* Add more city options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Which office do you have an issue with?
          </label>
          <select
            name="office"
            value={formData.office}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Office</option>
            {/* Add more office options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Which agent or broker do you have an issue with?
          </label>
          <select
            name="agent"
            value={formData.agent}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Agent or Broker</option>
            {/* Add more agent options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Or, manually type the agent or broker’s name here.
          </label>
          <input
            type="text"
            name="agentName"
            value={formData.agentName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            What was the date of the incident?
          </label>
          <input
            type="date"
            name="incidentDate"
            value={formData.incidentDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            How would you categorize your concern?
          </label>
          <select
            name="concernType"
            value={formData.concernType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Concern Type</option>
            {/* Add more concern type options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Please describe the issue you had
          </label>
          <textarea
            name="issueDescription"
            value={formData.issueDescription}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            File Upload
          </label>
          <input
            type="file"
            name="fileUpload"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-[#002349] text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default RequestForm;
