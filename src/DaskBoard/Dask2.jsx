import React , {useEffect , useState} from "react";
import {
  Bell,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  FileText,
  FileCheck2,
  IndianRupee,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  ArrowRight,
  AlertCircle,
  Download,
  HelpCircle,
} from "lucide-react";
import Dask1 from "./Dask1";
import {Link, Links} from 'react-router-dom'

const Dask2 = (props) => {
    const [user, setUser] = useState([])
     useEffect(()=>{
        setUser(props.userData);
      },[props.userData])
  const progress = [
    {
      title: "Progress",
      date: "12 Jan 2026",
      completed: true,
    },
    {
      title: "Notification",
      date: "18 Jan 2026",
      completed: true,
    },
    {
      title: "Verification",
      date: "25 Jan 2026",
      completed: true,
    },
    {
      title: "Award",
      date: "10 Feb 2026",
      completed: true,
    },
    {
      title: "Compensation",
      date: "In Progress",
      active: true,
    },
    {
      title: "Possession",
      date: "Pending",
      completed: false,
    },
    {
      title: "Process",
      date: "Pending",
      completed: false,
    },
  ];

  return (
    <div className="scroll-right min-h-screen bg-[#f5f7f8] text-gray-800">

      {/* ================= HEADER ================= */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-between ">
          <div className="flex flex-wrap items-center justify-center">

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Hi! ,{user.oname} 
              </h1>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Track the status of your land acquisition case on BhoomiSetu
              </p>
            </div>

            
          </div>
          <Link to='/sell' className="cursor-pointer rounded-2xl bg-linear-to-tr from-blue-800 via-blue-900 to-black px-5 py-3 active:scale-95 hover:bg-blue-950">
            <div className="text-white font-semibold ">
              <span>For Sale</span>
              </div>
          </Link>
          <div className="">
            <Dask1 userData={user} />
          </div>
        </div>
      </header>


      <main className="scroll-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

        {/* ================= TOP CARDS ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">

          <SummaryCard
            title="Case Reference"
            value="LA/2026/10234"
            subtitle="12.5 Hectares"
          />

          <SummaryCard
            title="State"
            value={user.State}
            subtitle="Aya Nagar"
          />

          <SummaryCard
            title="₹ 24,75,000"
            value="Estimated Compensation"
            icon={<IndianRupee size={16} />}
          />

          <SummaryCard
            title="Compensation"
            value="Disbursement"
            subtitle="In Progress"
            highlight
          />

        </div>


        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-4">

            {/* ================= PROGRESS ================= */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">

              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">
                    Land Acquisition Progress
                  </h2>

                  <p className="text-[11px] text-gray-400">
                    Last updated on 6 September
                  </p>
                </div>

                <span className="bg-green-100 text-green-700 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full">
                  In Progress
                </span>
              </div>


              {/* Desktop progress */}
              <div className="hidden sm:flex items-start relative">

                {/* line */}
                <div className="absolute top-[15px] left-6 right-6 h-[3px] bg-gray-200" />

                <div
                  className="absolute top-[15px] left-6 w-[61%] h-[3px] bg-green-500"
                />

                {progress.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex-1 flex flex-col items-center ${
                      item.active
                        ? "bg-orange-50 rounded-lg py-2 -mt-2"
                        : ""
                    }`}
                  >

                    <div
                      className={`z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                        item.active
                          ? "bg-orange-500 border-orange-500 text-white"
                          : item.completed
                          ? "bg-green-500 border-green-500 text-white"
                          : "bg-white border-orange-400 text-orange-500"
                      }`}
                    >
                      {item.completed ? (
                        <Check size={15} strokeWidth={3} />
                      ) : item.active ? (
                        <Clock3 size={14} />
                      ) : (
                        <Circle size={10} fill="currentColor" />
                      )}
                    </div>

                    <p
                      className={`text-[9px] mt-2 font-semibold text-center ${
                        item.active
                          ? "text-orange-700"
                          : item.completed
                          ? "text-green-700"
                          : "text-gray-500"
                      }`}
                    >
                      {item.title}
                    </p>

                    <span className="text-[8px] text-gray-400 mt-1 text-center">
                      {item.date}
                    </span>

                  </div>
                ))}
              </div>


              {/* Mobile progress */}
              <div className="sm:hidden space-y-3">

                {progress.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center ${
                        item.active
                          ? "bg-orange-500 text-white"
                          : item.completed
                          ? "bg-green-500 text-white"
                          : "bg-gray-100 text-orange-500"
                      }`}
                    >
                      {item.completed ? (
                        <Check size={14} />
                      ) : (
                        <Circle size={9} fill="currentColor" />
                      )}
                    </div>

                    <div>
                      <p className="text-xs font-semibold">
                        {item.title}
                      </p>

                      <p className="text-[10px] text-gray-400">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

            </section>


            {/* ================= BOTTOM CARDS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Case Status */}
              <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">

                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-sm">
                    Case Status Overview
                  </h2>

                  <MoreHorizontal size={18} className="text-gray-400" />
                </div>

                <div className="space-y-3">

                  <InfoRow
                    label="Case Ref"
                    value="LA/2026/10234"
                  />

                  <InfoRow
                    label="State"
                    value={user.State}
                  />

                  <InfoRow
                    label="Land Area"
                    value="12.5 Hectares"
                  />

                  <InfoRow
                    label="Status"
                    value="Compensation"
                    valueClass="text-orange-600"
                  />

                </div>

              </section>


              {/* Next Action */}
              <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">

                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle
                    size={18}
                    className="text-orange-500"
                  />

                  <h2 className="font-bold text-sm">
                    Next Action Required
                  </h2>
                </div>

                <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">

                  <p className="text-xs font-semibold text-gray-800">
                    Complete verification to access payment
                    information.
                  </p>

                  <button className="mt-4 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-md flex items-center gap-2 transition">
                    View Details
                    <ArrowRight size={14} />
                  </button>

                </div>

              </section>

            </div>

          </div>


          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="space-y-4">

            {/* Latest Updates */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">

              <div className="flex items-center justify-between mb-4">

                <h2 className="font-bold text-sm flex items-center gap-2">
                  <Bell size={16} />
                  Latest Updates
                </h2>

                <button className="text-[10px] text-green-600 font-semibold">
                  View All
                </button>

              </div>


              <UpdateItem
                icon={<CheckCircle2 size={14} />}
                title="Preliminary Notification"
                date="06 Sep 2026"
                green
              />

              <UpdateItem
                icon={<IndianRupee size={14} />}
                title="Award Documents"
                date="02 Sep 2026"
              />

              <UpdateItem
                icon={<FileCheck2 size={14} />}
                title="Compensation Processing"
                date="28 Aug 2026"
                orange
              />

              <UpdateItem
                icon={<MapPin size={14} />}
                title="Land Verification"
                date="21 Aug 2026"
              />

            </section>


            {/* Important Documents */}
           
          </div>

        </div>

      </main>


      


      {/* ================= HELP BUTTON ================= */}
      <div className="fixed bottom-4 right-4">

        <button className="bg-[#281477] hover:bg-[#351c92] text-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 transition">

          <div className="bg-white/20 p-2 rounded-lg">
            <HelpCircle size={20} />
          </div>

          <div className="text-left">
            <p className="text-xs font-bold">
              Need Assistance?
            </p>

            <p className="text-[9px] text-white/70">
              Contact Support
            </p>
          </div>

        </button>

      </div>

    </div>
  );
};


/* =====================================================
   COMPONENTS
===================================================== */

const SummaryCard = ({
  title,
  value,
  subtitle,
  icon,
  highlight,
}) => {
  return (
    <div
      className={`bg-white rounded-lg border shadow-sm p-3 ${
        highlight
          ? "border-orange-200"
          : "border-gray-200"
      }`}
    >

      <p className="text-[10px] text-gray-500 mb-1">
        {title}
      </p>

      <div className="flex items-center gap-1">

        {icon && (
          <span className="text-green-700">
            {icon}
          </span>
        )}

        <p
          className={`text-sm font-bold ${
            highlight
              ? "text-orange-600"
              : "text-gray-800"
          }`}
        >
          {value}
        </p>

      </div>

      {subtitle && (
        <p className="text-[9px] text-gray-400 mt-1">
          {subtitle}
        </p>
      )}

    </div>
  );
};


const InfoRow = ({
  label,
  value,
  valueClass = "text-gray-700",
}) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-2">

      <span className="text-[10px] text-gray-400">
        {label}
      </span>

      <span className={`text-[10px] font-semibold ${valueClass}`}>
        {value}
      </span>

    </div>
  );
};


const UpdateItem = ({
  icon,
  title,
  date,
  green,
  orange,
}) => {
  return (
    <div className="flex gap-3 py-2 border-b border-gray-100 last:border-0">

      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
          green
            ? "bg-green-100 text-green-600"
            : orange
            ? "bg-orange-100 text-orange-600"
            : "bg-gray-100 text-gray-500"
        }`}
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-[10px] font-semibold truncate">
          {title}
        </p>

        <p className="text-[9px] text-gray-400">
          {date}
        </p>

      </div>

    </div>
  );
};


const DocumentCard = ({
  icon,
  title,
  subtitle,
}) => {
  return (
    <button className="bg-gray-50 hover:bg-green-50 border border-gray-100 rounded-lg p-3 text-left transition">

      <div className="w-7 h-7 bg-green-100 text-green-700 rounded-md flex items-center justify-center mb-2">

        {React.cloneElement(icon, {
          size: 15,
        })}

      </div>

      <p className="text-[9px] font-semibold text-gray-700">
        {title}
      </p>

      <p className="text-[8px] text-gray-400">
        {subtitle}
      </p>

    </button>
  );
};


export default Dask2;