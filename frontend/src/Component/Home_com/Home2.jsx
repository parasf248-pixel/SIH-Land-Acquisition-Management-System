import React, { useMemo, useState } from "react";
import landData from "./filedata/landData.json";

const Home2 = () => {
  const [selectedState, setSelectedState] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Statistics across all dataset
  const statistics = useMemo(() => {
    return {
      totalProjects: landData.reduce(
        (total, item) => total + Number(item.projects || 0),
        0
      ),

      totalLand: landData.reduce(
        (total, item) => total + Number(item.land || 0),
        0
      ),

      onTrack: landData.filter(
        (item) => item.status === "On Track"
      ).length,

      moderate: landData.filter(
        (item) => item.status === "Moderate"
      ).length,

      delayed: landData.filter(
        (item) => item.status === "Delayed"
      ).length,

      noProjects: landData.filter(
        (item) => item.status === "No Projects"
      ).length,
    };
  }, []);

  // Filter dataset
  const filteredData = useMemo(() => {
    if (!selectedState) return [];

    return landData.filter((item) => {
      const matchesState = item.state === selectedState;

      const matchesStatus =
        statusFilter === "All" ||
        item.status === statusFilter;

      return matchesState && matchesStatus;
    });
  }, [selectedState, statusFilter]);

  // Status styling
  const getStatusStyle = (status) => {
    switch (status) {
      case "On Track":
        return {
          badge:
            "bg-green-100 text-green-700 border border-green-300",
          dot: "bg-green-500",
          card: "border-green-200",
        };

      case "Moderate":
        return {
          badge:
            "bg-yellow-100 text-yellow-700 border border-yellow-300",
          dot: "bg-yellow-500",
          card: "border-yellow-200",
        };

      case "Delayed":
        return {
          badge:
            "bg-red-100 text-red-700 border border-red-300",
          dot: "bg-red-500",
          card: "border-red-200",
        };

      case "No Projects":
        return {
          badge:
            "bg-gray-100 text-gray-600 border border-gray-300",
          dot: "bg-gray-400",
          card: "border-gray-200",
        };

      default:
        return {
          badge: "bg-gray-100 text-gray-600",
          dot: "bg-gray-400",
          card: "border-gray-200",
        };
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-6">

      {/* ================= HEADER ================= */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          National Land Acquisition Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Real-time overview of land acquisition projects across India
        </p>
      </div>

      {/* ================= STATISTICS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

        {/* Total Projects */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition">
          <p className="text-sm text-slate-500">
            Total Projects
          </p>

          <h2 className="text-3xl font-bold text-blue-600 mt-2">
            {statistics.totalProjects.toLocaleString()}
          </h2>

          <p className="text-xs text-slate-400 mt-1">
            Across {landData.length} States/UTs
          </p>
        </div>

        {/* Total Land */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition">
          <p className="text-sm text-slate-500">
            Total Land
          </p>

          <h2 className="text-3xl font-bold text-purple-600 mt-2">
            {statistics.totalLand.toLocaleString()}
          </h2>

          <p className="text-xs text-slate-400 mt-1">
            Hectares
          </p>
        </div>

        {/* On Track */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition">
          <p className="text-sm text-slate-500">
            On Track
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {statistics.onTrack}
          </h2>

          <p className="text-xs text-green-500 mt-1">
            States / UTs
          </p>
        </div>

        {/* Delayed */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition">
          <p className="text-sm text-slate-500">
            Delayed
          </p>

          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {statistics.delayed}
          </h2>

          <p className="text-xs text-red-500 mt-1">
            Requires attention
          </p>
        </div>

      </div>

      {/* ================= FILTER + DETAILS ================= */}
      <div className="flex items-center w-full">

        <div className="flex flex-col w-full">

          {/* ================= FILTER ================= */}
          <div className="w-full  bg-white rounded-2xl p-5 shadow-sm border border-slate-200 mb-6">

            <div className="flex flex-wrap items-end gap-4">

              {/* STATE DROPDOWN */}
              <div className="flex-1 ">

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Select State / UT
                </label>

                <select
                  value={selectedState}
                  onChange={(e) =>
                    setSelectedState(e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer transition"
                >

                  {/* FIXED: value is now empty */}
                  <option value="">
                    -- Select a State or UT --
                  </option>

                  {landData.map((item) => (
                    <option
                      key={item.state}
                      value={item.state}
                    >
                      {item.state}
                    </option>
                  ))}

                </select>

              </div>

              {/* STATUS DROPDOWN */}
              <div className="flex-1">

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Status
                </label>

                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer transition"
                >

                  <option value="All">
                    All Status
                  </option>

                  <option value="On Track">
                    On Track
                  </option>

                  <option value="Moderate">
                    Moderate
                  </option>

                  <option value="Delayed">
                    Delayed
                  </option>

                  <option value="No Projects">
                    No Projects
                  </option>

                </select>

              </div>

            </div>

          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
            {/* ================= SELECTED DATA ================= */}
            <div className="w-full">

              {/* NO STATE SELECTED */}
              {!selectedState ? (

                <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-sm">

                  <div className="text-4xl mb-3">
                    🗺️
                  </div>

                  <h3 className="text-lg font-bold text-slate-700">
                    Select a State
                  </h3>

                  <p className="flex flex-col text-slate-500 mt-1">
                    <span>
                      Please choose a state or UT from the dropdown
                    </span>

                    <span>
                      above to view its land acquisition data.
                    </span>
                  </p>

                </div>

              ) : filteredData.length === 0 ? (

                /* NO DATA */
                <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-sm">

                  <div className="text-4xl mb-3">
                    🔍
                  </div>

                  <h3 className="text-lg font-bold text-slate-700">
                    No data found
                  </h3>

                  <p className="text-slate-500 mt-1">
                    No results match the selected status for{" "}
                    <span className="font-semibold">
                      {selectedState}
                    </span>.
                  </p>

                </div>

              ) : (

                /* DATA CARD */
                <div>

                  <div className="text-center mb-5">

                    <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
                      State Details
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800">
                      {selectedState}
                    </h2>

                  </div>

                  {/* CARD CENTER */}
                  <div className="flex justify-center">

                    {filteredData.map((item) => {

                      const style =
                        getStatusStyle(item.status);

                      return (

                        <div
                          key={item.state}
                          className={`w-full max-w-md bg-white rounded-2xl p-6 border ${style.card} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                        >

                          {/* CARD HEADER */}
                          <div className="flex items-center justify-between gap-3 mb-6">

                            <h3 className="font-bold text-xl text-slate-800">
                              {item.state}
                            </h3>

                            <span
                              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold ${style.badge}`}
                            >

                              <span
                                className={`inline-block w-2 h-2 rounded-full ${style.dot} mr-2`}
                              ></span>

                              {item.status}

                            </span>

                          </div>

                          {/* CARD DATA */}
                          <div className="grid grid-cols-2 gap-4">

                            {/* PROJECTS */}
                            <div className="bg-blue-50 rounded-xl p-4 text-center">

                              <p className="text-xs text-slate-500 uppercase tracking-wide">
                                Projects
                              </p>

                              <p className="text-2xl font-bold text-blue-600 mt-1">
                                {Number(
                                  item.projects || 0
                                ).toLocaleString()}
                              </p>

                            </div>

                            {/* LAND */}
                            <div className="bg-purple-50 rounded-xl p-4 text-center">

                              <p className="text-xs text-slate-500 uppercase tracking-wide">
                                Land
                              </p>

                              <p className="text-2xl font-bold text-purple-600 mt-1">
                                {Number(
                                  item.land || 0
                                ).toLocaleString()}
                              </p>

                              <p className="text-[10px] text-slate-400">
                                hectares
                              </p>

                            </div>

                          </div>

                        </div>

                      );
                    })}

                  </div>

                </div>

              )}

            </div>

            {/* ================= LATEST UPDATES ================= */}
            <div className="w-full max-w-3xl ">

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 overflow-y-scroll">

                <div className="flex items-center justify-between mb-3">

                  <h2 className="text-lg font-bold text-slate-800">
                    Latest Updates
                  </h2>

                  <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    Update
                  </span>

                </div>

                <hr className="border-slate-200 " />
                <div className=" h-52">

                  <div className="flex flex-col gap-2">

                    <span className="text-xs font-semibold text-blue-600">
                      30 Aug 2026
                    </span>

                    <p className="text-slate-700 font-medium">
                      Guidelines for Social Impact Assessment
                      notified for all new projects.
                    </p>

                    <button className="text-left text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
                      Read More →
                    </button>

                  </div>
                  <hr className="border-slate-200 " />

                  <div className="flex flex-col gap-2">

                    <span className="text-xs font-semibold text-blue-600">
                      30 Aug 2026
                    </span>

                    <p className="text-slate-700 font-medium">
                      Guidelines for Social Impact Assessment
                      notified for all new projects.
                    </p>

                    <button className="text-left text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
                      Read More →
                    </button>

                  </div>
                  <hr className="border-slate-200 " />
                  <div className="flex flex-col gap-2">

                    <span className="text-xs font-semibold text-blue-600">
                      30 Aug 2026
                    </span>

                    <p className="text-slate-700 font-medium">
                      Guidelines for Social Impact Assessment
                      notified for all new projects.
                    </p>

                    <button className="text-left text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
                      Read More →
                    </button>

                  </div>
                  <hr className="border-slate-200 " />
                  <div className="flex flex-col gap-2">

                    <span className="text-xs font-semibold text-blue-600">
                      30 Aug 2026
                    </span>

                    <p className="text-slate-700 font-medium">
                      Guidelines for Social Impact Assessment
                      notified for all new projects.
                    </p>

                    <button className="text-left text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
                      Read More →
                    </button>

                  </div>
                  <hr className="border-slate-200 " />
                  <div className="flex flex-col gap-2">

                    <span className="text-xs font-semibold text-blue-600">
                      30 Aug 2026
                    </span>

                    <p className="text-slate-700 font-medium">
                      Guidelines for Social Impact Assessment
                      notified for all new projects.
                    </p>

                    <button className="text-left text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
                      Read More →
                    </button>

                  </div>
                  <hr className="border-slate-200 " />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home2;