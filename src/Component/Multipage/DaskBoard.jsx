import React, { useState } from "react";
import LandInformationForm from "./LandInformationForm";
import Dask1 from "../../DaskBoard/Dask1";
import Dask2 from "../../DaskBoard/Dask2";
import DaskNav from "../../DaskBoard/DaskNavbar";
import Dask3 from "../../DaskBoard/Dask3";
import { Link } from "react-router-dom";
const DaskBoard = ({ login, useda }) => {

  const [condition, setCondition] = useState(false);
  const [userData, setUserData] = useState(null);

  const funData = (data) => {
    console.log("LAND DATA RECEIVED:", data);

    setUserData(data);

    if (data !== null) {
      setCondition(true);
    }
  };

  return (
    <div className="min-h-screen scroll-zoom bg-[#f4f5f7]">

      {!condition ? (

        <LandInformationForm sendData={funData} />

      ) : (

        /* ================= MAIN LAYOUT ================= */
        <div className="flex min-h-screen w-full">

          {/* ================= LEFT SIDEBAR ================= */}
          <div className="w-[230px]  shrink-0">
            <DaskNav />
          </div>

          {/* ================= RIGHT DASHBOARD ================= */}
          <div className=" min-w-0">

            <main className="w-full px-5 py-3">
            <Dask2 userData={userData} />
              {/* TOP DASHBOARD */}
              
            </main>

          </div>

        </div>

      )}
      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-200 bg-white mt-4">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">

          <p className="text-sm text-center w-full text-gray-400">
            © 2026 Government of India. All Rights Reserved.
            <span className="mx-2">|</span>
            Privacy
            <span className="mx-2">|</span>
            Terms & Conditions
            <span className="mx-2">|</span>
            Accessibility
            <span className="mx-2">|</span>
            Contact Us
          </p>

        </div>

      </footer>
    </div>
  );
};

export default DaskBoard;