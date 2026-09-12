
import React, { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Eye,
  Clock3,
  CheckCircle2,
  AlertCircle,
  FileText,
  Filter,
  MapPin,
  CalendarDays,
  X,
} from "lucide-react";

import DaskNav from "../DaskBoard/DaskNavbar";

const Dask6 = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedGrievance, setSelectedGrievance] = useState(null);

  const [grievances] = useState([
    {
      id: "GRV-1001",
      subject: "Compensation amount not received",
      description:
        "The compensation amount for the acquired land has not been credited yet.",
      owner: "Rahul Kumar",
      khasraNo: "K-102",
      location: "Seelampur, Delhi",
      date: "12 Sep 2026",
      status: "Pending",
      priority: "High",
    },
    {
      id: "GRV-1002",
      subject: "Incorrect land area mentioned",
      description:
        "The land area mentioned in the acquisition record is different from the actual area.",
      owner: "Amit Sharma",
      khasraNo: "K-205",
      location: "Shahdara, Delhi",
      date: "10 Sep 2026",
      status: "Under Review",
      priority: "Medium",
    },
    {
      id: "GRV-1003",
      subject: "Request for document correction",
      description:
        "Requesting correction of the owner's name in the land acquisition documents.",
      owner: "Vikas Singh",
      khasraNo: "K-501",
      location: "Ghaziabad, Uttar Pradesh",
      date: "08 Sep 2026",
      status: "Resolved",
      priority: "Low",
    },
    {
      id: "GRV-1004",
      subject: "Delay in land acquisition process",
      description:
        "The acquisition process has not moved forward despite submitting all required documents.",
      owner: "Priya Verma",
      khasraNo: "K-304",
      location: "Noida, Uttar Pradesh",
      date: "06 Sep 2026",
      status: "Pending",
      priority: "High",
    },
    {
      id: "GRV-1005",
      subject: "Document verification issue",
      description:
        "Land ownership documents are still showing as pending verification.",
      owner: "Suresh Kumar",
      khasraNo: "K-410",
      location: "Greater Noida",
      date: "04 Sep 2026",
      status: "Under Review",
      priority: "Medium",
    },
  ]);

  const filteredGrievances = useMemo(() => {
    return grievances.filter((grievance) => {
      const matchesSearch =
        grievance.id.toLowerCase().includes(search.toLowerCase()) ||
        grievance.subject.toLowerCase().includes(search.toLowerCase()) ||
        grievance.owner.toLowerCase().includes(search.toLowerCase()) ||
        grievance.khasraNo.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || grievance.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter, grievances]);

  const getStatusStyle = (status) => {
    if (status === "Resolved") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Under Review") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-orange-100 text-orange-700";
  };

  const getPriorityStyle = (priority) => {
    if (priority === "High") {
      return "bg-red-100 text-red-700";
    }

    if (priority === "Medium") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="flex min-h-screen bg-[#f5f6f8] text-gray-900">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-[230px] shrink-0 min-h-screen">
        <DaskNav />
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 min-w-0 p-6">

        {/* HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Grievances
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage and track land acquisition grievances
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-violet-700 hover:-translate-y-0.5">
            <Plus size={18} />
            New Grievance
          </button>

        </div>


        {/* ================= STATISTICS ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">

          {/* Total */}
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Total Grievances
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {grievances.length}
                </h2>
              </div>

              <div className="rounded-xl bg-violet-100 p-3 text-violet-600">
                <FileText size={24} />
              </div>

            </div>
          </div>


          {/* Pending */}
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Pending
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {grievances.filter(
                    (item) => item.status === "Pending"
                  ).length}
                </h2>
              </div>

              <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                <Clock3 size={24} />
              </div>

            </div>
          </div>


          {/* Under Review */}
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Under Review
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {grievances.filter(
                    (item) => item.status === "Under Review"
                  ).length}
                </h2>
              </div>

              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <AlertCircle size={24} />
              </div>

            </div>
          </div>


          {/* Resolved */}
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Resolved
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {grievances.filter(
                    (item) => item.status === "Resolved"
                  ).length}
                </h2>
              </div>

              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                <CheckCircle2 size={24} />
              </div>

            </div>
          </div>

        </div>


        {/* ================= SEARCH + FILTER ================= */}
        <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100 mb-6">

          <div className="flex flex-col gap-3 md:flex-row">

            {/* Search */}
            <div className="relative flex-1">

              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search grievance, owner or Khasra number..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />

            </div>


            {/* Filter */}
            <div className="relative">

              <Filter
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 text-sm outline-none focus:border-violet-500 md:w-[190px]"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Under Review">
                  Under Review
                </option>
                <option value="Resolved">Resolved</option>
              </select>

            </div>

          </div>

        </div>


        {/* ================= GRIEVANCE TABLE ================= */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">

          <div className="border-b border-gray-100 px-6 py-5">

            <h2 className="text-lg font-bold">
              Grievance Records
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredGrievances.length} grievance
              {filteredGrievances.length !== 1 ? "s" : ""} found
            </p>

          </div>


          {/* Desktop table */}
          <div className="hidden overflow-x-auto lg:block">

            <table className="w-full text-left">

              <thead className="bg-gray-50 text-xs uppercase text-gray-500">

                <tr>
                  <th className="px-6 py-4">Grievance</th>
                  <th className="px-6 py-4">Owner</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Priority</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>

              </thead>

              <tbody className="divide-y divide-gray-100">

                {filteredGrievances.map((grievance) => (

                  <tr
                    key={grievance.id}
                    className="transition hover:bg-gray-50"
                  >

                    {/* Grievance */}
                    <td className="px-6 py-5">

                      <div>
                        <p className="font-semibold text-gray-900">
                          {grievance.subject}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {grievance.id} • Khasra{" "}
                          {grievance.khasraNo}
                        </p>
                      </div>

                    </td>


                    {/* Owner */}
                    <td className="px-6 py-5">
                      <p className="font-medium">
                        {grievance.owner}
                      </p>
                    </td>


                    {/* Location */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <MapPin size={15} />
                        {grievance.location}
                      </div>

                    </td>


                    {/* Date */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <CalendarDays size={15} />
                        {grievance.date}
                      </div>

                    </td>


                    {/* Priority */}
                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityStyle(
                          grievance.priority
                        )}`}
                      >
                        {grievance.priority}
                      </span>

                    </td>


                    {/* Status */}
                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                          grievance.status
                        )}`}
                      >
                        {grievance.status}
                      </span>

                    </td>


                    {/* Action */}
                    <td className="px-6 py-5 text-right">

                      <button
                        onClick={() =>
                          setSelectedGrievance(grievance)
                        }
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
                      >
                        <Eye size={16} />
                        View
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* Mobile cards */}
          <div className="space-y-4 p-4 lg:hidden">

            {filteredGrievances.map((grievance) => (

              <div
                key={grievance.id}
                className="rounded-xl border border-gray-100 p-4"
              >

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <p className="font-semibold">
                      {grievance.subject}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {grievance.id}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                      grievance.status
                    )}`}
                  >
                    {grievance.status}
                  </span>

                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-600">

                  <p>
                    <b>Owner:</b> {grievance.owner}
                  </p>

                  <p>
                    <b>Khasra:</b> {grievance.khasraNo}
                  </p>

                  <p>
                    <b>Location:</b> {grievance.location}
                  </p>

                  <p>
                    <b>Priority:</b>{" "}
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${getPriorityStyle(
                        grievance.priority
                      )}`}
                    >
                      {grievance.priority}
                    </span>
                  </p>

                </div>

                <button
                  onClick={() =>
                    setSelectedGrievance(grievance)
                  }
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-violet-50 py-2.5 text-sm font-semibold text-violet-600"
                >
                  <Eye size={16} />
                  View Details
                </button>

              </div>

            ))}

          </div>


          {/* Empty */}
          {filteredGrievances.length === 0 && (
            <div className="px-6 py-16 text-center">

              <FileText
                size={40}
                className="mx-auto text-gray-300"
              />

              <h3 className="mt-3 font-semibold">
                No grievances found
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Try changing your search or status filter.
              </p>

            </div>
          )}

        </div>

      </main>


      {/* ================= DETAILS MODAL ================= */}
      {selectedGrievance && (

        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 p-4">

          <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

              <div>
                <p className="text-xs font-semibold text-violet-600">
                  {selectedGrievance.id}
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Grievance Details
                </h2>
              </div>

              <button
                onClick={() => setSelectedGrievance(null)}
                className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              >
                <X size={20} />
              </button>

            </div>


            {/* Modal Body */}
            <div className="space-y-5 p-6">

              <div>
                <p className="text-xs font-semibold uppercase text-gray-400">
                  Subject
                </p>

                <p className="mt-1 font-semibold">
                  {selectedGrievance.subject}
                </p>
              </div>


              <div>
                <p className="text-xs font-semibold uppercase text-gray-400">
                  Description
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {selectedGrievance.description}
                </p>
              </div>


              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-400">
                    Owner
                  </p>

                  <p className="mt-1 font-semibold">
                    {selectedGrievance.owner}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-400">
                    Khasra Number
                  </p>

                  <p className="mt-1 font-semibold">
                    {selectedGrievance.khasraNo}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 font-semibold">
                    {selectedGrievance.location}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-400">
                    Submitted
                  </p>

                  <p className="mt-1 font-semibold">
                    {selectedGrievance.date}
                  </p>
                </div>

              </div>


              <div className="flex flex-wrap gap-3">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityStyle(
                    selectedGrievance.priority
                  )}`}
                >
                  Priority: {selectedGrievance.priority}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                    selectedGrievance.status
                  )}`}
                >
                  {selectedGrievance.status}
                </span>

              </div>

            </div>


            {/* Modal Footer */}
            <div className="border-t border-gray-100 px-6 py-4 text-right">

              <button
                onClick={() => setSelectedGrievance(null)}
                className="rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Dask6;
