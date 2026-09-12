
import React, { useState } from "react";

const LandInformationForm = ({sendData}) => {
  const [formData, setFormData] = useState({
    oname: "",
    fname: "",
    mname: "",
    phone: "",
    adhar: "",
    pan: "",
    district: "",
    khasra: "",
    ca: "",
    addresh: "",
    State:"",
    County:"",
    Email: "",
    Pin_Code:"",
  });

  // Common change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitData = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    sendData(formData);
    // You can send formData to dashboard here
    // Example:
    // onComplete(formData);
  };

  return (
    <div className="text-black">
      <form
        onSubmit={submitData}
        className="flex flex-col gap-3 w-full max-w-2xl mx-auto p-6 bg-gray-100 rounded-2xl shadow-sm"
      >
        {/* Owner Name + Phone */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Owner Name <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="oname"
              value={formData.oname}
              onChange={handleChange}
              placeholder="Enter Owner Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Phone Number <span className="text-xs">💥</span>
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          
          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Email ID <span className="text-xs">💥</span>
            </label>

            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Enter Email ID"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Electricity Bill CA Number{" "}
              <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="ca"
              value={formData.ca}
              onChange={handleChange}
              placeholder="Enter CA Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Father + Mother */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Father Name <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="Enter Father Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Mother Name <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              placeholder="Enter Mother Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Address + Khasra */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Address-1 <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="addresh"
              value={formData.addresh}
              onChange={handleChange}
              placeholder="Enter Address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Khasra Number <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="khasra"
              value={formData.khasra}
              onChange={handleChange}
              placeholder="Enter Khasra Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              State <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="State"
              value={formData.State}
              onChange={handleChange}
              placeholder="Enter PAN Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Cuntry
              <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="County"
              value={formData.County}
              onChange={handleChange}
              placeholder="Enter CA Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* District + Aadhar */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              District <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter District"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Pin Code <span className="text-xs">💥</span>
            </label>

            <input
              type="number"
              name="Pin_Code"
              value={formData.Pin_Code}
              onChange={handleChange}
              maxLength={10}
              placeholder="Enter Aadhar Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* PAN + CA */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              PAN Number <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              placeholder="Enter PAN Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="mb-2 font-serif text-sm text-gray-700">
              Aadhar Number <span className="text-xs">💥</span>
            </label>

            <input
              type="text"
              name="adhar"
              value={formData.adhar}
              onChange={handleChange}
              placeholder="Enter Aadhar Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="text-white py-2 rounded-2xl bg-linear-to-tl from-blue-500 via-blue-900 to-blue-950 active:scale-95"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LandInformationForm;
