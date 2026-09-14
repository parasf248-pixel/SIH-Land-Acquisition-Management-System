
import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ShieldCheck,
  Handshake,
  BadgeIndianRupee,
  Users,
  HousePlus,
  ArrowBigRight,
  CornerDownLeft,
  Brain,
  MapPinned,
  HeartHandshake,
  ChartNoAxesCombined,
  House,
} from "lucide-react";

const Home3 = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
      {/* ================================================= */}
      {/* 1. ONGOING LAND ACQUISITION PROCESS */}
      {/* ================================================= */}

      <div className="xl text-black flex flex-col rounded-2xl py-4 gap-6 border border-gray-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center px-4 gap-3">
          <span className="text-2xl text-green-800 font-bold">
            Ongoing Land Acquisition Process
          </span>

          <div className="flex items-center gap-1 font-semibold text-violet-600 cursor-pointer hover:text-violet-800">
            <span>View All</span>
            <ArrowRight size={25} />
          </div>
        </div>

        {/* Process */}
        <div className="flex flex-col gap-8">

          {/* ---------- ROW 1 ---------- */}
          <div className="flex justify-center items-center gap-5 px-5">

            {/* Proposal */}
            <div className=" flex flex-col gap-2 items-center justify-between text-center min-w-[100px]">
              <BriefcaseBusiness size={30} />

              <span className="text-blue-700 font-bold">
                Proposal
              </span>

              <span>48 Projects</span>
            </div>

            <ArrowBigRight size={30} className="shrink-0" />

            {/* Verification */}
            <div className="flex flex-col gap-2 items-center justify-between text-center min-w-[100px]">
              <ShieldCheck size={30} />

              <span className="text-blue-700 font-bold">
                Verification
              </span>

              <span>62 Projects</span>
            </div>

            <ArrowBigRight size={30} className="shrink-0" />

            {/* Acquisition */}
            <div className="flex flex-col gap-2 items-center justify-between text-center min-w-[100px]">
              <Handshake size={30} />

              <span className="text-blue-700 font-bold">
                Acquisition
              </span>

              <span>118 Projects</span>
            </div>

          </div>

          {/* ---------- ROW 2 ---------- */}
          <div className="flex justify-center items-center gap-5 px-5">

            {/* Possession */}
            <div className="flex flex-col gap-2 items-center justify-between text-center min-w-[100px]">
              <HousePlus size={30} />

              <span className="text-blue-700 font-bold">
                Possession
              </span>

              <span>38 Projects</span>
            </div>

            <ArrowBigRight size={30} className="rotate-180 shrink-0" />

            {/* R&R */}
            <div className="flex flex-col gap-2 items-center justify-between text-center min-w-[100px]">
              <Users size={30} />

              <span className="text-blue-700 font-bold">
                R&R
              </span>

              <span>54 Projects</span>
            </div>

            <ArrowBigRight size={30} className="rotate-180 shrink-0" />

            {/* Compensation */}
            <div className="flex flex-col gap-2 items-center justify-between text-center min-w-[100px]">
              <BadgeIndianRupee size={30} />

              <span className="text-blue-700 font-bold">
                Compensation
              </span>

              <span>76 Projects</span>
            </div>

            <CornerDownLeft size={45} className="shrink-0" />

          </div>

        </div>
      </div>


      {/* ================================================= */}
      {/* 2. BHOOMISETU INTELLIGENCE */}
      {/* ================================================= */}

      <div className="w-full flex flex-col transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg justify-between gap-6 bg-violet-500/30 p-5 text-black rounded-2xl border border-violet-300">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4">

          <span className="text-blue-700 font-bold text-2xl">
            BhoomiSetu Intelligence
          </span>

          <span className="bg-violet-600/30 border-2 border-blue-700 rounded-2xl px-3 py-2 hover:bg-gray-500/20 cursor-pointer">
            AI Powered
          </span>

        </div>


        {/* AI Description */}
        <div className="flex items-center gap-5">

          <Brain size={50} className="shrink-0" />

          <div className="transition-all delay-150 duration-300 ease-in-out hover:text-xl hover:text-blue-500 font-medium cursor-pointer flex flex-col">
            <span>
              AI-driven insights to identify delays,
            </span>

            <span>
              risks and factors requiring attention.
            </span>
          </div>

        </div>


        {/* Immediate Attention */}
        <div className=" transition-all delay-150 duration-300 ease-in-out hover:text-xl hover:text-blue-500 font-medium cursor-pointer flex items-center gap-5">

          <span className="text-3xl font-bold text-red-600">
            12
          </span>

          <span>
            Projects require immediate attention
          </span>

        </div>


        {/* High Risk */}
        <div className="transition-all delay-150 duration-300 ease-in-out hover:text-xl hover:text-blue-500 font-medium cursor-pointer flex items-center gap-5">

          <span className="text-3xl font-bold text-orange-600">
            3
          </span>

          <span>
            High risk projects identified
          </span>

        </div>


        {/* View Insights */}
        <div className="flex justify-between items-center border-t border-violet-400 pt-4 cursor-pointer text-blue-700 font-semibold">

          <span>
            View AI Insights
          </span>

          <ArrowRight size={30} />

        </div>

      </div>
      </div>

      {/* ================================================= */}
      {/* 3. KEY HIGHLIGHTS */}
      {/* ================================================= */}
      <div className="w-full flex flex-col justify-between gap-5 bg-amber-200/30 p-5 text-black rounded-2xl border border-amber-300 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        {/* Heading */}
        <span className="font-extrabold text-3xl text-red-950">
          Key Highlights
        </span>


        {/* Highlight 1 */}
        <div className="flex items-center gap-4">
          <span className="mr-2 text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  →
          </span>
          <House size={30} className="shrink-0" />

          <span className="transition-all delay-150 duration-300 ease-in-out hover:text-xl hover:text-blue-500 font-medium cursor-pointer">
            Transparent & accountable land acquisition process
          </span>

        </div>


        {/* Highlight 2 */}
        <div className="flex items-center gap-4">
          <span className="mr-2 text-cyan-400  opacity-0 transition group-hover:opacity-100">
                  →
                </span>
          <ChartNoAxesCombined
            size={30}
            className="shrink-0"
          />

          <span className="transition-all delay-150 duration-300 ease-in-out hover:text-xl hover:text-blue-500 font-medium cursor-pointer">
            Real-time monitoring & decision support
          </span>

        </div>


        {/* Highlight 3 */}
        <div className="flex items-center gap-4">
          <span className="mr-2 text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  →
                </span>
          <HeartHandshake
            size={30}
            className="shrink-0"
          />

          <span className="transition-all delay-150 duration-300 ease-in-out hover:text-xl hover:text-blue-500 font-medium cursor-pointer">
            Timely compensation & rehabilitation
          </span>

        </div>


        {/* Highlight 4 */}
        <div className="flex items-center gap-4">
<span className="mr-2 text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  →
                </span>
          <MapPinned
            size={30}
            className="shrink-0"
          />

          <span className="transition-all delay-150 duration-300 ease-in-out hover:text-xl hover:text-blue-500 font-medium cursor-pointer">
            Integrated GIS based land parcel tracking
          </span>

        </div>

      </div>

    </div>
  );
};

export default Home3;
