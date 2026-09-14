import React, { useState } from "react";
import {
  User,
  MapPin,
  Building2,
  FileText,
  Upload,
  IndianRupee,
  Image,
  CheckCircle,
} from "lucide-react";
import DaskNav from "./DaskNavbar";

const SellProperty = ({ sendData }) => {
  const [formData, setFormData] = useState({
    ownerName: "",
    fatherName: "",
    mobile: "",
    email: "",
    aadharNumber: "",
    panNumber: "",

    state: "",
    district: "",
    village: "",
    address: "",
    pincode: "",

    propertyType: "",
    landArea: "",
    areaUnit: "Acres",
    khasraNumber: "",
    plotNumber: "",
    ownershipType: "",

    expectedPrice: "",
    description: "",

    aadharDocument: null,
    panDocument: null,
    ownershipDocument: null,
    registryDocument: null,
    propertyTaxDocument: null,
    nocDocument: null,

    propertyImages: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      if (name === "propertyImages") {
        setFormData({
          ...formData,
          [name]: Array.from(files),
        });
      } else {
        setFormData({
          ...formData,
          [name]: files[0],
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Property Sale Data:", formData);

    if (sendData) {
      sendData(formData);
    }

    localStorage.setItem(
      "sellPropertyData",
      JSON.stringify({
        ...formData,

        aadharDocument: formData.aadharDocument?.name || "",
        panDocument: formData.panDocument?.name || "",
        ownershipDocument: formData.ownershipDocument?.name || "",
        registryDocument: formData.registryDocument?.name || "",
        propertyTaxDocument: formData.propertyTaxDocument?.name || "",
        nocDocument: formData.nocDocument?.name || "",

        propertyImages: formData.propertyImages.map(
          (file) => file.name
        ),
      })
    );

    setSubmitted(true);
  };

  return (
   <div className="flex h-dvh w-screen overflow-hidden"> 
  {/* Sidebar Navigation */}
  <DaskNav /> 
  
  {/* Main Scrollable Content */}
  <main className="flex-1 overflow-y-scroll bg-gray-50 p-6">
    <div className="scroll-zoom min-h-screen text-black bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-950 to-black p-7 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/10 p-4">
              <Building2 size={38} />
            </div>

            <div>
              <p className="text-sm text-blue-300">
                BhoomiSetu
              </p>

              <h1 className="text-3xl font-bold">
                Sell Your Property
              </h1>

              <p className="mt-1 text-sm text-gray-300">
                Submit your property and owner information
              </p>
            </div>
          </div>
        </div>

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
            <CheckCircle size={25} />

            <div>
              <p className="font-semibold">
                Property submitted successfully
              </p>

              <p className="text-sm">
                Your property sale information has been saved.
              </p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-7"
        >

          {/* OWNER INFORMATION */}
          <div className="rounded-2xl bg-white p-6 shadow-md">

            <div className="mb-6 flex items-center gap-3 border-b pb-4">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <User size={23} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Owner Information
                </h2>

                <p className="text-sm text-gray-500">
                  Enter the legal owner's information
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Owner Name *
                </label>

                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                  placeholder="Enter owner name"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Father / Husband Name *
                </label>

                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                  placeholder="Enter father / husband name"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="Enter mobile number"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Aadhaar Number *
                </label>

                <input
                  type="text"
                  name="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter Aadhaar number"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  PAN Number *
                </label>

                <input
                  type="text"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter PAN number"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

            </div>
          </div>


          {/* PROPERTY LOCATION */}
          <div className="rounded-2xl bg-white p-6 shadow-md">

            <div className="mb-6 flex items-center gap-3 border-b pb-4">
              <div className="rounded-xl bg-purple-100 p-3 text-purple-700">
                <MapPin size={23} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Property Location
                </h2>

                <p className="text-sm text-gray-500">
                  Enter complete property location
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  State *
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  placeholder="Enter state"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  District *
                </label>

                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  placeholder="Enter district"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Village / City *
                </label>

                <input
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  required
                  placeholder="Enter village / city"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  PIN Code *
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  placeholder="Enter PIN code"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Complete Address *
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  placeholder="Enter complete property address"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

            </div>
          </div>


          {/* PROPERTY DETAILS */}
          <div className="rounded-2xl bg-white p-6 shadow-md">

            <div className="mb-6 flex items-center gap-3 border-b pb-4">
              <div className="rounded-xl bg-green-100 p-3 text-green-700">
                <Building2 size={23} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Property Details
                </h2>

                <p className="text-sm text-gray-500">
                  Enter details about the property
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Property Type *
                </label>

                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border bg-white px-4 py-3"
                >
                  <option value="">
                    Select Property Type
                  </option>

                  <option value="Agricultural Land">
                    Agricultural Land
                  </option>

                  <option value="Residential Land">
                    Residential Land
                  </option>

                  <option value="Commercial Land">
                    Commercial Land
                  </option>

                  <option value="Residential House">
                    Residential House
                  </option>

                  <option value="Commercial Property">
                    Commercial Property
                  </option>

                  <option value="Apartment">
                    Apartment
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Property Area *
                </label>

                <input
                  type="number"
                  name="landArea"
                  value={formData.landArea}
                  onChange={handleChange}
                  required
                  placeholder="Enter area"
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Area Unit
                </label>

                <select
                  name="areaUnit"
                  value={formData.areaUnit}
                  onChange={handleChange}
                  className="w-full rounded-xl border bg-white px-4 py-3"
                >
                  <option>Acres</option>
                  <option>Hectares</option>
                  <option>Bigha</option>
                  <option>Gaj</option>
                  <option>Square Feet</option>
                  <option>Square Meter</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Khasra Number *
                </label>

                <input
                  type="text"
                  name="khasraNumber"
                  value={formData.khasraNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter Khasra number"
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Plot Number
                </label>

                <input
                  type="text"
                  name="plotNumber"
                  value={formData.plotNumber}
                  onChange={handleChange}
                  placeholder="Enter plot number"
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Ownership Type
                </label>

                <select
                  name="ownershipType"
                  value={formData.ownershipType}
                  onChange={handleChange}
                  className="w-full rounded-xl border bg-white px-4 py-3"
                >
                  <option value="">
                    Select Ownership
                  </option>

                  <option value="Individual">
                    Individual
                  </option>

                  <option value="Joint">
                    Joint Ownership
                  </option>

                  <option value="Inherited">
                    Inherited
                  </option>
                </select>
              </div>

            </div>
          </div>


          {/* SALE INFORMATION */}
          <div className="rounded-2xl bg-white p-6 shadow-md">

            <div className="mb-6 flex items-center gap-3 border-b pb-4">
              <div className="rounded-xl bg-yellow-100 p-3 text-yellow-700">
                <IndianRupee size={23} />
              </div>

              <h2 className="text-xl font-bold">
                Sale Information
              </h2>
            </div>

            <label className="mb-2 block text-sm font-semibold">
              Expected Selling Price *
            </label>

            <input
              type="number"
              name="expectedPrice"
              value={formData.expectedPrice}
              onChange={handleChange}
              required
              placeholder="Enter expected selling price"
              className="mb-5 w-full rounded-xl border px-4 py-3"
            />

            <label className="mb-2 block text-sm font-semibold">
              Property Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Describe your property..."
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>


          {/* OWNER DOCUMENTS */}
          <div className="rounded-2xl bg-white p-6 shadow-md">

            <div className="mb-6 flex items-center gap-3 border-b pb-4">
              <div className="rounded-xl bg-red-100 p-3 text-red-600">
                <FileText size={23} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Owner Documents
                </h2>

                <p className="text-sm text-gray-500">
                  Upload owner's identity documents
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold">
                  Aadhaar Card *
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed p-5 hover:border-blue-500">
                  <Upload className="text-blue-600" />

                  <span className="text-sm text-gray-600">
                    {formData.aadharDocument?.name ||
                      "Upload Aadhaar PDF/Image"}
                  </span>

                  <input
                    type="file"
                    name="aadharDocument"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="hidden"
                  />
                </label>
              </div>


              <div>
                <label className="mb-2 block font-semibold">
                  PAN Card *
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed p-5 hover:border-blue-500">
                  <Upload className="text-blue-600" />

                  <span className="text-sm text-gray-600">
                    {formData.panDocument?.name ||
                      "Upload PAN PDF/Image"}
                  </span>

                  <input
                    type="file"
                    name="panDocument"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="hidden"
                  />
                </label>
              </div>


              <div>
                <label className="mb-2 block font-semibold">
                  Ownership Proof *
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed p-5 hover:border-blue-500">
                  <Upload className="text-blue-600" />

                  <span className="text-sm text-gray-600">
                    {formData.ownershipDocument?.name ||
                      "Upload ownership proof"}
                  </span>

                  <input
                    type="file"
                    name="ownershipDocument"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="hidden"
                  />
                </label>
              </div>


              <div>
                <label className="mb-2 block font-semibold">
                  Registered Sale Deed *
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed p-5 hover:border-blue-500">
                  <Upload className="text-blue-600" />

                  <span className="text-sm text-gray-600">
                    {formData.registryDocument?.name ||
                      "Upload registered deed"}
                  </span>

                  <input
                    type="file"
                    name="registryDocument"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="hidden"
                  />
                </label>
              </div>

            </div>
          </div>


          {/* PROPERTY DOCUMENTS */}
          <div className="rounded-2xl bg-white p-6 shadow-md">

            <div className="mb-6 flex items-center gap-3 border-b pb-4">
              <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                <FileText size={23} />
              </div>

              <h2 className="text-xl font-bold">
                Property Documents
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold">
                  Property Tax Receipt
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed p-5 hover:border-orange-500">
                  <Upload className="text-orange-600" />

                  <span className="text-sm text-gray-600">
                    {formData.propertyTaxDocument?.name ||
                      "Upload property tax receipt"}
                  </span>

                  <input
                    type="file"
                    name="propertyTaxDocument"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                  />
                </label>
              </div>


              <div>
                <label className="mb-2 block font-semibold">
                  NOC / No Objection Certificate
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed p-5 hover:border-orange-500">
                  <Upload className="text-orange-600" />

                  <span className="text-sm text-gray-600">
                    {formData.nocDocument?.name ||
                      "Upload NOC"}
                  </span>

                  <input
                    type="file"
                    name="nocDocument"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                  />
                </label>
              </div>

            </div>
          </div>


          {/* PROPERTY IMAGES */}
          <div className="rounded-2xl bg-white p-6 shadow-md">

            <div className="mb-6 flex items-center gap-3 border-b pb-4">
              <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                <Image size={23} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Property Images
                </h2>

                <p className="text-sm text-gray-500">
                  Upload clear images of your property
                </p>
              </div>
            </div>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 text-center hover:border-purple-500">

              <Image
                size={35}
                className="mb-3 text-purple-600"
              />

              <p className="font-semibold">
                Upload Property Images
              </p>

              <p className="text-sm text-gray-500">
                Select multiple images
              </p>

              <input
                type="file"
                name="propertyImages"
                onChange={handleChange}
                accept=".jpg,.jpeg,.png"
                multiple
                className="hidden"
              />
            </label>

            {formData.propertyImages.length > 0 && (
              <div className="mt-4 space-y-2">
                {formData.propertyImages.map((file, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-gray-100 p-3 text-sm"
                  >
                    📷 {file.name}
                  </div>
                ))}
              </div>
            )}
          </div>


          {/* DECLARATION */}
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">

            <div className="flex gap-3">

              <input
                type="checkbox"
                required
                className="mt-1 h-5 w-5"
              />

              <p className="text-sm leading-6 text-gray-700">
                I confirm that all information provided above is
                correct and that I am the legal owner or authorized
                person to sell this property.
              </p>

            </div>
          </div>


          {/* SUBMIT */}
          <div className="flex justify-end pb-10">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800"
            >
              <CheckCircle size={21} />

              Submit Property
            </button>

          </div>

        </form>
      </div>
    </div>
    </main>
    </div>
  );
};

export default SellProperty;
