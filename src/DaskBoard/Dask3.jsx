import React from "react";
import {
  UserCircle,
  MapPin,
  ShieldCheck,
  Edit,
  FileText,
  Home,
  Ruler,
  Building2,
  CheckCircle2,
  ArrowRight,
  Headphones,
} from "lucide-react";

import DaskNav from "../DaskBoard/DaskNavbar";

const Dask3 = (props) => {

  // Get the user's saved land data
  const user = JSON.parse(
    localStorage.getItem("landUserData") || "{}"
  );

  const ownerName = user.ownerName || user.name || "User";
  const state = user.state || "Not Available";
  const district = user.district || "Not Available";
  const village = user.village || "Not Available";
  const area = user.area || "Not Available";
  const khasraNo = props.khasraNo || "Not Available";

  const caseNumber =
    user.caseReference || "LA/2026/10234";


  return (
    <div className="scroll-right min-h-screen text-black bg-[#f5f6f8]">

      {/* ==================================================
          MAIN DASHBOARD
      ================================================== */}

      <div className="flex min-h-screen">

        {/* ==================================================
            LEFT NAVBAR
        ================================================== */}

        <aside className=" shrink-0  min-h-screen">

          <DaskNav />

        </aside>


        {/* ==================================================
            RIGHT CONTENT
        ================================================== */}

        <main className="flex-1 min-w-0 overflow-x-hidden">

          <div className="px-3 sm:px-5 py-2 max-w-[1200px] mx-auto">


            {/* ================= BACK ================= */}

            <button className="text-xs text-purple-700 mb-1">
              ← Back to Dashboard
            </button>


            {/* ================= PAGE HEADER ================= */}

            <div className="scroll-zoom mb-2">

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                My Land Case
              </h1>

              <p className="text-sm text-gray-500">
                Track the status of your land acquisition case on BhoomiSetu
              </p>

            </div>


            {/* ================= CASE HEADER ================= */}

            <div className="scroll-left bg-white border border-gray-200 rounded-lg shadow-sm px-3 py-2 mb-3">

              <div className="flex items-center justify-between gap-3">

                {/* USER INFORMATION */}

                <div className="flex items-center gap-2">

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-800 flex items-center justify-center shrink-0">

                    <UserCircle
                      size={31}
                      strokeWidth={1.5}
                    />

                  </div>


                  <div>

                    <div className="flex items-center gap-2">

                      <h2 className="text-lg sm:text-xl font-bold">
                        {caseNumber}
                      </h2>

                      <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 border border-green-200">
                        Active
                      </span>

                    </div>


                    <p className="text-xs text-gray-700">
                      {village}, {district}, {state}
                    </p>

                    <p className="text-xs text-gray-500">
                      Land Area: {area}
                    </p>

                  </div>

                </div>


                {/* SECURITY */}

                <div className="scroll-up hidden md:flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">

                  <ShieldCheck
                    size={18}
                    className="text-green-600"
                  />

                  <div>

                    <p className="text-xs font-semibold text-green-700">
                      Your Data is Secure
                    </p>

                    <p className="text-[10px] text-gray-500 max-w-[180px]">
                      Your information is protected and used only
                      for your land acquisition case.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* ==================================================
                TWO COLUMN CONTENT
            ================================================== */}

            <div className=" grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-3">


              {/* ==================================================
                  CASE STATUS
              ================================================== */}

              <div className="scroll-left bg-white rounded-lg border border-gray-200 shadow-sm p-3">

                <div className="flex items-center justify-between mb-3">

                  <h2 className="text-sm font-bold">
                    Case Status Overview
                  </h2>

                  <button className="flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-purple-100 text-purple-700">

                    <Edit size={9} />

                    Edit

                  </button>

                </div>


                <div className="space-y-2">

                  <StatusRow
                    label="Case Reference No"
                    value={caseNumber}
                  />

                  <StatusRow
                    label="Owner Name"
                    value={ownerName}
                  />

                  <StatusRow
                    label="State"
                    value={state}
                  />

                  <StatusRow
                    label="District"
                    value={district}
                  />

                  <StatusRow
                    label="Village"
                    value={village}
                  />

                  <StatusRow
                    label="Land Area"
                    value={area}
                  />

                  <StatusRow
                    label="Khasra No."
                    value={khasraNo}
                  />

                  <StatusRow
                    label="Current Stage"
                    value="Compensation Disbursement"
                    valueClass="text-orange-600"
                  />

                  <StatusRow
                    label="Case Status"
                    value="In Progress"
                    valueClass="text-green-600"
                  />

                </div>

              </div>


              {/* ==================================================
                  LAND LOCATION / DETAILS
              ================================================== */}

              <div className="scroll-right bg-white rounded-lg border border-gray-200 shadow-sm p-3">

                <div className="flex items-center justify-between mb-3">

                  <div className="flex items-center gap-1.5">

                    <div className="w-6 h-6 rounded bg-purple-100 flex items-center justify-center">

                      <MapPin
                        size={14}
                        className="text-purple-700"
                      />

                    </div>

                    <h2 className="text-sm font-bold text-[#21177d]">
                      Land Location
                    </h2>

                  </div>


                  <span className="text-xs text-gray-500">
                    Property Details
                  </span>

                </div>


                {/* LOCATION */}

                <div className=" border border-gray-200 rounded-lg p-3 bg-gray-50">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center">

                      <MapPin
                        size={18}
                        className="text-purple-700"
                      />

                    </div>


                    <div>

                      <p className="text-sm font-bold text-gray-800">
                        {village}
                      </p>

                      <p className="text-xs text-gray-500">
                        {district}, {state}
                      </p>

                      <p className="text-xs text-gray-500">
                        India
                      </p>

                    </div>

                  </div>

                </div>


                {/* PROPERTY DETAILS */}

                <div className=" grid grid-cols-2 gap-2 mt-2">

                  <PropertyItem
                    icon={<Home size={13} />}
                    label="Property Type"
                    value={user.propertyType || "Land"}
                  />

                  <PropertyItem
                    icon={<Ruler size={13} />}
                    label="Land Area"
                    value={area}
                  />

                  <PropertyItem
                    icon={<Building2 size={13} />}
                    label="District"
                    value={district}
                  />

                  <PropertyItem
                    icon={<FileText size={13} />}
                    label="Khasra No."
                    value={khasraNo}
                  />

                </div>


                {/* VERIFIED */}

                <div className="mt-2 rounded-lg bg-green-50 border border-green-200 p-2 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <CheckCircle2
                      size={15}
                      className="text-green-600"
                    />

                    <div>

                      <p className="text-xs font-semibold text-green-700">
                        Land Information Submitted
                      </p>

                      <p className="text-[10px] text-gray-500">
                        Your submitted land details are displayed here
                      </p>

                    </div>

                  </div>

                  <ArrowRight
                    size={13}
                    className="text-green-600"
                  />

                </div>

              </div>

            </div>


            {/* ==================================================
                DOCUMENTS
            ================================================== */}

            <div className="scroll-zoom bg-white border border-gray-200 rounded-lg shadow-sm p-3 mt-3">

              <div className="flex items-center justify-between mb-2">

                <h2 className="text-sm font-bold">
                  Property Documents
                </h2>

                <button className="text-xs text-purple-700">
                  View All →
                </button>

              </div>


              <div className="grid  grid-cols-2 md:grid-cols-4  gap-2">

                <Document
                  title="Aadhaar"
                  file={user.aadhar}
                />

                <Document
                  title="PAN Card"
                  file={user.panCard}
                />

                <Document
                  title="Property Paper"
                  file={user.propertyPaper}
                />

                <Document
                  title="Land Record"
                  file={user.landRecord}
                />

              </div>

            </div>


            {/* ==================================================
                FOOTER
            ================================================== */}

            <div className="mt-3 pb-3">

              <p className="text-[10px] sm:text-xs text-center text-gray-400">

                © 2026 Government of India. All Rights Reserved

                <span className="mx-1.5">|</span>

                Privacy

                <span className="mx-1.5">|</span>

                Terms & Conditions

                <span className="mx-1.5">|</span>

                Accessibility

                <span className="mx-1.5">|</span>

                Contact Us

              </p>

            </div>

          </div>


          {/* ==================================================
              HELP BUTTON
          ================================================== */}

          <div className="fixed bottom-4 right-4">

            <button className="bg-[#281477] hover:bg-[#351c92] text-white rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">

              <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center">

                <Headphones size={15} />

              </div>

              <div className="text-left">

                <p className="text-xs font-semibold">
                  Need Assistance?
                </p>

                <p className="text-[10px] text-white/70">
                  Contact Support →
                </p>

              </div>

            </button>

          </div>

        </main>

      </div>

    </div>
  );
};


/* ==================================================
   STATUS ROW
================================================== */

const StatusRow = ({
  label,
  value,
  valueClass = "text-gray-700",
}) => {

  return (
    <div className="flex justify-between gap-2 border-b border-gray-100 pb-1">

      <span className="text-xs text-gray-500">
        {label}
      </span>

      <span
        className={`text-xs font-medium text-right ${valueClass}`}
      >
        {value}
      </span>

    </div>
  );
};


/* ==================================================
   PROPERTY ITEM
================================================== */

const PropertyItem = ({
  icon,
  label,
  value,
}) => {

  return (
    <div className="border border-gray-100 rounded-md bg-gray-50 p-2">

      <div className="flex items-center gap-2">

        <span className="text-purple-600">
          {icon}
        </span>

        <div>

          <p className="text-[10px] text-gray-400">
            {label}
          </p>

          <p className="text-xs font-semibold text-gray-700 truncate">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
};


/* ==================================================
   DOCUMENT
================================================== */

const Document = ({
  title,
  file,
}) => {

  const uploaded =
    file !== null &&
    file !== undefined &&
    file !== "";

  return (
    <div className="border border-gray-200 rounded-md p-2">

      <div className="flex items-center gap-2">

        <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center">

          <FileText
            size={12}
            className="text-green-700"
          />

        </div>

        <div>

          <p className="text-xs font-semibold">
            {title}
          </p>

          <p
            className={`text-[10px] ${
              uploaded
                ? "text-green-600"
                : "text-gray-400"
            }`}
          >
            {uploaded
              ? "Uploaded"
              : "Not Uploaded"}
          </p>

        </div>

      </div>

    </div>
  );
};

export default Dask3;