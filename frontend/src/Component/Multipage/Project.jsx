
import React, { useState } from "react";
import {
  Search,
  MapPin,
  CalendarDays,
  ArrowRight,
  Building2,
  TrainFront,
  Plane,
  Factory,
  Route,
  X,
} from "lucide-react";

const Projects = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Delhi–Mumbai Expressway",
      category: "Highways",
      location: "Delhi to Mumbai",
      status: "Ongoing",
      progress: 72,
      startDate: "2022",
      expected: "2027",
      description:
        "A major national highway project connecting Delhi and Mumbai through a high-speed expressway network.",
      icon: Route,
    },
    {
      id: 2,
      name: "Dedicated Freight Corridor",
      category: "Railways",
      location: "Uttar Pradesh",
      status: "Ongoing",
      progress: 64,
      startDate: "2021",
      expected: "2026",
      description:
        "A large-scale railway infrastructure project designed to improve freight transportation and logistics connectivity.",
      icon: TrainFront,
    },
    {
      id: 3,
      name: "Noida International Airport",
      category: "Airports",
      location: "Jewar, Uttar Pradesh",
      status: "Ongoing",
      progress: 58,
      startDate: "2022",
      expected: "2026",
      description:
        "An international airport project focused on improving air connectivity and supporting economic development in the region.",
      icon: Plane,
    },
    {
      id: 4,
      name: "Industrial Corridor Development",
      category: "Industrial",
      location: "Uttar Pradesh",
      status: "Ongoing",
      progress: 46,
      startDate: "2023",
      expected: "2028",
      description:
        "Development of industrial infrastructure to encourage manufacturing, investment, employment and regional growth.",
      icon: Factory,
    },
    {
      id: 5,
      name: "Eastern Peripheral Highway",
      category: "Highways",
      location: "Haryana & Uttar Pradesh",
      status: "Completed",
      progress: 100,
      startDate: "2015",
      expected: "2024",
      description:
        "A strategic highway project designed to improve regional connectivity and reduce traffic congestion.",
      icon: Route,
    },
    {
      id: 6,
      name: "Regional Rail Connectivity",
      category: "Railways",
      location: "Delhi NCR",
      status: "Planned",
      progress: 18,
      startDate: "2026",
      expected: "2030",
      description:
        "A proposed regional rail infrastructure project aimed at improving transportation connectivity across the region.",
      icon: TrainFront,
    },
  ];

  const categories = [
    "All",
    "Highways",
    "Railways",
    "Airports",
    "Industrial",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || project.category === category;

    return matchesSearch && matchesCategory;
  });

  const getStatusStyle = (status) => {
    if (status === "Completed") {
      return "border-green-400/20 bg-green-400/10 text-green-400";
    }

    if (status === "Planned") {
      return "border-yellow-400/20 bg-yellow-400/10 text-yellow-400";
    }

    return "border-cyan-400/20 bg-cyan-400/10 text-cyan-400";
  };

  return (
    <div className="min-h-screen bg-blue-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <Building2
              size={32}
              className="text-cyan-400"
            />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Infrastructure Development
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Our <span className="text-cyan-400">Projects</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Explore major infrastructure projects, their locations,
            development status and land acquisition progress.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-2xl">

            <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-xl transition focus-within:border-cyan-400/50">

              <Search
                size={21}
                className="mr-3 shrink-0 text-white/40"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects or locations..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30 md:text-base"
              />

            </div>

          </div>

        </div>
      </section>

      {/* ================= PROJECT SECTION ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* Categories */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                category === item
                  ? "border-cyan-400 bg-cyan-400 text-gray-950"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:border-cyan-400/30 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Result Count */}
        <div className="mb-6 flex items-center justify-between">

          <div>
            <p className="text-sm text-white/40">
              Showing
            </p>

            <h2 className="text-xl font-bold">
              {filteredProjects.length} Projects
            </h2>
          </div>

          <div className="hidden items-center gap-2 text-sm text-white/40 sm:flex">
            <Building2 size={17} />
            Infrastructure Projects
          </div>

        </div>

        {/* Project Cards */}
        {filteredProjects.length > 0 ? (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredProjects.map((project) => {

              const Icon = project.icon;

              return (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                >

                  {/* Card Header */}
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent">

                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/10 blur-2xl" />

                    <div className="relative flex h-full items-center justify-between p-6">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gray-950/50">
                        <Icon
                          size={28}
                          className="text-cyan-400"
                        />
                      </div>

                      <span
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusStyle(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>

                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">

                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {project.category}
                    </p>

                    <h3 className="text-xl font-bold transition group-hover:text-cyan-300">
                      {project.name}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-sm text-white/50">
                      <MapPin
                        size={16}
                        className="text-cyan-400"
                      />
                      {project.location}
                    </div>

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/50">
                      {project.description}
                    </p>

                    {/* Progress */}
                    <div className="mt-6">

                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-white/40">
                          Project Progress
                        </span>

                        <span className="font-semibold text-cyan-400">
                          {project.progress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">

                        <div
                          className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />

                      </div>

                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                      <div className="flex items-center gap-2 text-xs text-white/40">
                        <CalendarDays size={15} />
                        {project.startDate} – {project.expected}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group/btn flex items-center gap-1 text-sm font-semibold text-cyan-400"
                      >
                        View
                        <ArrowRight
                          size={17}
                          className="transition-transform group-hover/btn:translate-x-1"
                        />
                      </button>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>

        ) : (

          /* No Results */
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center">

            <Search
              size={45}
              className="mx-auto mb-5 text-white/20"
            />

            <h3 className="text-xl font-semibold">
              No projects found
            </h3>

            <p className="mt-2 text-sm text-white/40">
              Try searching for another project or location.
            </p>

          </div>
        )}

      </section>

      {/* ================= STATS ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] md:grid-cols-4">

          {[
            ["50+", "Total Projects"],
            ["28", "Ongoing Projects"],
            ["15", "States Covered"],
            ["7", "Project Categories"],
          ].map(([number, label]) => (

            <div
              key={label}
              className="border-b border-white/10 p-7 text-center last:border-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-3xl font-bold text-cyan-400">
                {number}
              </p>

              <p className="mt-2 text-sm text-white/40">
                {label}
              </p>
            </div>

          ))}

        </div>

      </section>

      {/* ================= PROJECT MODAL ================= */}
      {selectedProject && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm">

          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl border border-white/10 bg-gray-900 p-7 shadow-2xl">

            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                {React.createElement(selectedProject.icon, {
                  size: 28,
                  className: "text-cyan-400",
                })}
              </div>

              <div className="pr-10">
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  {selectedProject.category}
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {selectedProject.name}
                </h2>
              </div>

            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs text-white/40">
                  Location
                </p>

                <div className="mt-2 flex items-center gap-2 font-medium">
                  <MapPin
                    size={17}
                    className="text-cyan-400"
                  />
                  {selectedProject.location}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs text-white/40">
                  Status
                </p>

                <span
                  className={`mt-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyle(
                    selectedProject.status
                  )}`}
                >
                  {selectedProject.status}
                </span>
              </div>

            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

              <p className="text-xs text-white/40">
                About Project
              </p>

              <p className="mt-3 text-sm leading-7 text-white/60">
                {selectedProject.description}
              </p>

            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

              <div className="flex justify-between text-sm">

                <span className="text-white/50">
                  Development Progress
                </span>

                <span className="font-semibold text-cyan-400">
                  {selectedProject.progress}%
                </span>

              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{
                    width: `${selectedProject.progress}%`,
                  }}
                />

              </div>

            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-7 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-gray-950 transition hover:bg-cyan-300"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default Projects;