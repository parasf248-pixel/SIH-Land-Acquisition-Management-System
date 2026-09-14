import React from "react";
import { useNavigate } from "react-router-dom";

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("bhoomi_user") || "{}"
  );

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center px-4">

      {/* TOP STEPS */}

      <div className="mt-5 bg-white rounded-lg shadow-md px-3 py-2 flex items-center gap-2 text-[10px]">

        <span className="bg-gray-200 rounded px-2 py-1">
          01
        </span>

        <span>
          Officer Details ✓
        </span>

        <span className="text-gray-300">|</span>

        <span className="bg-gray-200 rounded px-2 py-1">
          02
        </span>

        <span>
          Organization & Role ✓
        </span>

        <span className="text-gray-300">|</span>

        <span className="bg-gray-200 rounded px-2 py-1">
          03
        </span>

        <span>
          Access & Login ✓
        </span>

        <span className="text-gray-300">|</span>

        <span className="bg-gray-200 rounded px-2 py-1">
          04
        </span>

        <span>
          Review & Submit ✓
        </span>

      </div>


      {/* SUCCESS ICON */}

      <div className="mt-8">

        <div className="w-24 h-24 rounded-full border-2 border-green-600 flex items-center justify-center">

          <div className="w-20 h-20 rounded-full border-2 border-green-600 flex items-center justify-center">

            <div className="text-green-700 text-5xl">
              🛡️
            </div>

          </div>

        </div>

      </div>


      {/* TITLE */}

      <h1 className="mt-4 text-[21px] md:text-2xl font-bold text-black">
        Registration Successful
      </h1>

      <p className="text-sm md:text-base text-center text-gray-800 mt-1">
        Your BhoomiSetu officer account has been created successfully
      </p>


      {/* ACCOUNT SUMMARY */}

      <div className="mt-3 w-full max-w-[285px] bg-white border border-gray-200 rounded-md shadow-md px-3 py-2">

        <h2 className="text-center text-sm font-medium mb-1">
          Account Summary
        </h2>

        <p className="text-sm">
          <b>User ID:</b>{" "}
          {user.userId || user.username || "BhoomiSetu User"}
        </p>

        <p className="text-sm">
          <b>Role:</b>{" "}
          {user.role || "Central Officer"}
        </p>

        <p className="text-sm">
          <b>Organization:</b>{" "}
          {user.organization || "Central Department"}
        </p>

      </div>


      {/* DESCRIPTION */}

      <p className="mt-4 text-sm text-center max-w-[420px] leading-4">
        You can now access your authorized dashboard and land
        acquisition management tools.
      </p>


      {/* BUTTONS */}

      <div className="flex gap-3 mt-3">

        <button
          onClick={() => navigate("/profile")}
          className="border border-green-500 text-green-600 hover:bg-green-50 px-6 py-1.5 rounded-md text-sm transition"
        >
          View Profile
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md text-sm transition shadow-sm"
        >
          Go to Dashboard →
        </button>

      </div>


      {/* SECURITY */}

      <div className="mt-2 flex items-center gap-1 text-[10px] text-gray-700">
        <span>🔒</span>
        <span>
          Your account is protected by BhoomiSetu's secure access controls
        </span>
      </div>

    </div>
  );
};

export default RegistrationSuccess;