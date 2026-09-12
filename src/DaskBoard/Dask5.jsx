import React from "react";
import {
  Bell,
  UserCircle,
  ChevronDown,
  ArrowLeft,
  Check,
  CircleAlert,
  Headphones,
  Home,
  IndianRupee,
  Users,
  GraduationCap,
} from "lucide-react";

import DaskNav from "./DaskNavbar";

const Dask5 = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f6f8] text-gray-900">

      {/* ================= SIDEBAR ================= */}

      <aside className="w-[230px] shrink-0 min-h-screen">
        <DaskNav />
      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="flex-1 min-w-0 px-6 py-4">

        {/* Back */}

        <button className="flex items-center gap-1 text-blue-700 text-sm font-medium mb-1 hover:underline">
          <ArrowLeft size={16} />
          Back to dashboard
        </button>


        {/* ================= HEADER ================= */}

        <div className="flex items-start justify-between mb-3">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dask5 & Resettlement
            </h1>

            <p className="text-base text-gray-700 mt-1">
              Under your Dask5 benefit, assistance and pending requirements
            </p>
          </div>


          {/* User */}

          <div className="flex items-center gap-4">

            <Bell
              size={23}
              className="text-black cursor-pointer"
            />

            <div className="flex items-center gap-2">

              <UserCircle
                size={27}
                className="text-black"
              />

              <div className="leading-tight">
                <p className="text-sm font-semibold">
                  Sanjana Singh
                </p>

                <p className="text-[10px] text-gray-500">
                  Landowner/Citizen
                </p>
              </div>

              <ChevronDown size={18} />

            </div>

          </div>

        </div>


        {/* ================= R&R STATUS ================= */}

        <section className="bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-3 mb-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Status */}

            <div className="border-r-0 md:border-r border-gray-300">

              <p className="text-sm font-bold">
                Your R&R Status:
              </p>

              <div className="flex items-center gap-2 mt-1">

                <span className="w-5 h-5 rounded-full bg-orange-500" />

                <span className="text-xl font-bold text-orange-500">
                  Under Verification
                </span>

              </div>

              <p className="text-xs text-gray-600 mt-1">
                Your Dask5 and resettlement benefits are currently
                being supervised
              </p>

            </div>


            {/* Authority */}

            <div className="flex flex-col justify-center md:pl-4">

              <p className="text-sm text-gray-700">
                R&R Authority:
              </p>

              <p className="text-sm font-bold">
                District Dask5 Officer
              </p>

              <div className="flex justify-end mt-2">

                <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-md transition">
                  View Status Details →
                </button>

              </div>

            </div>

          </div>

        </section>


        {/* ================= BENEFITS + SUPPORT ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">


          {/* ================= BENEFITS ================= */}

          <section className="bg-white border border-gray-300 rounded-lg shadow-sm p-4">

            <div className="flex justify-between mb-3">

              <h2 className="text-base font-bold">
                Your Benefits
              </h2>

              <h2 className="text-base font-bold">
                Status
              </h2>

            </div>


            <BenefitRow
              icon={<Home size={18} />}
              title="Resettlement Assistance"
              subtitle="Assistance available for relocation"
              status="Eligible"
              statusType="eligible"
            />

            <BenefitRow
              icon={<IndianRupee size={18} />}
              title="R&R Financial Assistance"
              subtitle="₹2,50,000"
              status="Pending"
              statusType="pending"
            />

            <BenefitRow
              icon={<Home size={18} />}
              title="Housing / Site Assistance"
              subtitle="Housing / Site support, if applicable"
              status="Under Review"
              statusType="review"
            />

            <BenefitRow
              icon={<Users size={18} />}
              title="Affected Family Support"
              subtitle="Support available to verified affected family"
              status="Eligible"
              statusType="eligible"
            />

            <BenefitRow
              icon={<GraduationCap size={18} />}
              title="Livelihood / Skill Support"
              subtitle="Skill training / livelihood assistance"
              status="Available"
              statusType="available"
            />

          </section>


          {/* ================= R&R SUPPORT ================= */}

          <section className="bg-white border border-gray-300 rounded-lg shadow-sm p-4">

            <h2 className="text-base font-bold mb-4">
              Your R&R Support
            </h2>


            <div className="flex items-center gap-2 mb-4">

              <span className="w-5 h-5 rounded-full bg-orange-500" />

              <span className="text-base font-bold">
                Partially Processed
              </span>

            </div>


            <SupportItem
              text="2 Benefits Eligible"
              type="check"
            />

            <SupportItem
              text="1 Benefit Pending"
              type="check"
            />

            <SupportItem
              text="1 Under Review"
              type="pending"
            />


            <div className="flex items-end justify-between mt-5">

              <div>

                <p className="text-xs font-medium">
                  Last Updated:
                </p>

                <p className="text-xs text-gray-600">
                  02 September 2026
                </p>

              </div>


              <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-md transition">
                View Support Details →
              </button>

            </div>

          </section>

        </div>


        {/* ================= ATTENTION ================= */}

        <section className="bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-3">

          <div className="flex items-center gap-2">

            <CircleAlert
              size={19}
              className="text-red-500 fill-red-100"
            />

            <p className="text-sm font-bold">
              WHAT NEEDS YOUR ATTENTION?
            </p>

          </div>


          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-1">

            <p className="text-sm text-gray-700">
              R&R verification documents required are:
              <span className="font-medium">
                {" <Name_of_documents>"}
              </span>
            </p>


            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-md whitespace-nowrap transition">
              Submit Documents →
            </button>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="text-[11px] text-gray-500">

            © &nbsp; 2026 Government of India.
            All Rights Reserved
            <span className="mx-1">|</span>
            Privacy
            <span className="mx-1">|</span>
            Terms & Conditions
            <span className="mx-1">|</span>
            Accessibility
            <span className="mx-1">|</span>
            Contact Us

          </div>


          {/* Assistance */}

          <button className="bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg px-5 py-3 flex items-center gap-3 transition">

            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">

              <Headphones size={19} />

            </div>

            <div className="text-left">

              <p className="text-sm font-bold">
                Need Assistance?
              </p>

              <p className="text-xs text-white/80">
                Contact Support →
              </p>

            </div>

          </button>

        </footer>

      </main>

    </div>
  );
};


/* =========================================================
   BENEFIT ROW
========================================================= */

const BenefitRow = ({
  icon,
  title,
  subtitle,
  status,
  statusType,
}) => {

  const statusClasses = {
    eligible: "text-green-600",
    pending: "text-orange-500",
    review: "text-orange-500",
    available: "text-green-600",
  };

  const dotClasses = {
    eligible: "text-green-500",
    pending: "text-orange-500",
    review: "text-orange-500",
    available: "text-green-600",
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">

      <div className="flex items-center gap-2 min-w-0">

        <span className="text-orange-500 shrink-0">
          {icon}
        </span>

        <div>

          <p className="text-sm font-bold leading-tight">
            {title}
          </p>

          <p className="text-[11px] text-gray-500">
            {subtitle}
          </p>

        </div>

      </div>


      <div
        className={`flex items-center gap-1 text-xs font-medium ml-3 whitespace-nowrap ${statusClasses[statusType]}`}
      >

        <span className={dotClasses[statusType]}>
          {statusType === "eligible" && "✓"}
          {statusType === "available" && "●"}
          {(statusType === "pending" || statusType === "review") && "●"}
        </span>

        {status}

      </div>

    </div>
  );
};


/* =========================================================
   SUPPORT ITEM
========================================================= */

const SupportItem = ({ text, type }) => {

  return (
    <div className="flex items-center gap-3 mb-3">

      {type === "check" ? (
        <Check
          size={21}
          strokeWidth={3}
          className="text-green-600"
        />
      ) : (
        <span className="w-5 h-5 rounded-full bg-orange-500" />
      )}

      <span className="text-sm font-semibold">
        {text}
      </span>

    </div>
  );
};


export default Dask5;