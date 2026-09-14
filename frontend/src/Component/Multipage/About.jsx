
import React from "react";
import {
  ShieldCheck,
  Users,
  MapPinned,
  FileCheck,
  HeartHandshake,
  Eye,
  Target,
  CheckCircle2,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure & Transparent",
      description:
        "Your land information and documents are handled through a secure and transparent digital process.",
    },
    {
      icon: MapPinned,
      title: "Track Your Land",
      description:
        "Easily view your land details, acquisition status and project information from your dashboard.",
    },
    {
      icon: FileCheck,
      title: "Digital Documentation",
      description:
        "Submit and manage important land-related documents through one simple platform.",
    },
    {
      icon: HeartHandshake,
      title: "Citizen Support",
      description:
        "Raise grievances and stay informed about the progress of your requests and cases.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">

        {/* Blue background glow */}
        <div className="absolute -top-24 -left-20 w-80 h-80
          rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute top-20 -right-20 w-80 h-80
          rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-blue-500/10
            border border-blue-500/30
            text-blue-400
            text-sm font-medium mb-6">

            <Landmark size={17} />

            About Our Platform
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">

            Making Land Acquisition

            <span className="block mt-2 text-transparent bg-clip-text
              bg-gradient-to-r from-blue-500 to-cyan-400">

              Simple & Transparent

            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400
            text-base md:text-lg leading-8">

            We provide a digital platform that helps landowners
            understand, submit, monitor and manage their land
            acquisition journey in one convenient place.

          </p>

        </div>
      </section>


      {/* ================= ABOUT INTRO ================= */}
      <section className="px-6 pb-20">

        <div className="max-w-6xl mx-auto
          grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <p className="text-blue-400 font-semibold tracking-wide mb-3">
              WHO WE ARE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">

              A Digital Platform for

              <span className="text-blue-400">
                {" "}Better Land Management
              </span>

            </h2>

            <p className="text-gray-400 mt-6 leading-8">

              Our platform is designed to make the land acquisition
              process easier for landowners and other stakeholders.
              Users can access important land-related information
              digitally instead of depending on scattered information
              and lengthy manual processes.

            </p>

            <p className="text-gray-400 mt-4 leading-8">

              From submitting land information and documents to
              tracking acquisition status and raising grievances,
              our goal is to bring everything together in one
              simple and user-friendly platform.

            </p>

            <button
              className="mt-7 flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-600 to-cyan-500
                font-semibold
                hover:scale-105
                transition duration-300
                shadow-lg shadow-blue-500/20"
            >

              Explore the Platform

              <ArrowRight size={18} />

            </button>

          </div>


          {/* RIGHT CARD */}
          <div className="relative">

            <div className="rounded-3xl p-8 md:p-10
              bg-gray-950
              border border-blue-500/20
              shadow-2xl shadow-blue-900/10">

              <div className="w-20 h-20 rounded-2xl
                bg-gradient-to-br from-blue-600 to-cyan-500
                flex items-center justify-center mb-7">

                <Landmark size={40} />

              </div>

              <h3 className="text-2xl font-bold">
                One Platform.
              </h3>

              <h3 className="text-2xl font-bold text-blue-400">
                Complete Visibility.
              </h3>

              <p className="text-gray-400 mt-5 leading-7">

                Access your land records, application information,
                acquisition progress and important updates through
                a single digital platform.

              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">

                <div className="p-4 rounded-xl bg-gray-900
                  border border-gray-800">

                  <p className="text-2xl font-bold text-blue-400">
                    01
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Unified Platform
                  </p>

                </div>

                <div className="p-4 rounded-xl bg-gray-900
                  border border-gray-800">

                  <p className="text-2xl font-bold text-cyan-400">
                    100%
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Digital Process
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MISSION / VISION ================= */}
      <section className="px-6 py-20 bg-gray-950 border-y border-gray-900">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-400 font-semibold mb-2">
              OUR PURPOSE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              What Drives Us
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

            {/* MISSION */}
            <div className="group p-8 rounded-3xl
              bg-black
              border border-gray-800
              hover:border-blue-500/50
              transition duration-300">

              <div className="w-14 h-14 rounded-xl
                bg-blue-500/10
                text-blue-400
                flex items-center justify-center mb-6">

                <Target size={28} />

              </div>

              <h3 className="text-2xl font-bold">
                Our Mission
              </h3>

              <p className="text-gray-400 mt-4 leading-7">

                To simplify the land acquisition journey by
                providing accessible digital tools that help
                landowners submit information, track progress,
                understand their cases and communicate their
                concerns effectively.

              </p>

            </div>


            {/* VISION */}
            <div className="group p-8 rounded-3xl
              bg-black
              border border-gray-800
              hover:border-cyan-500/50
              transition duration-300">

              <div className="w-14 h-14 rounded-xl
                bg-cyan-500/10
                text-cyan-400
                flex items-center justify-center mb-6">

                <Eye size={28} />

              </div>

              <h3 className="text-2xl font-bold">
                Our Vision
              </h3>

              <p className="text-gray-400 mt-4 leading-7">

                To create a more transparent, accessible and
                citizen-friendly land acquisition ecosystem where
                people can easily access information and stay
                informed throughout the process.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="px-6 py-20">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-400 font-semibold mb-2">
              WHY USE OUR PLATFORM
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Built Around Your Needs
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Everything you need to manage and understand your
              land acquisition journey.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl
                    bg-gray-950
                    border border-gray-800
                    hover:-translate-y-2
                    hover:border-blue-500/50
                    hover:shadow-xl
                    hover:shadow-blue-900/10
                    transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-xl
                    bg-blue-500/10
                    text-blue-400
                    flex items-center justify-center
                    group-hover:bg-blue-600
                    group-hover:text-white
                    transition">

                    <Icon size={27} />

                  </div>

                  <h3 className="text-lg font-bold mt-6">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 text-sm
                    leading-6 mt-3">

                    {feature.description}

                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= VALUES ================= */}
      <section className="px-6 py-20 bg-gray-950 border-y border-gray-900">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-400 font-semibold mb-3">
            OUR VALUES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            What We Believe In
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

            {/* Citizen First */}
            <div className="p-7 rounded-2xl
              bg-black
              border border-gray-800
              hover:border-blue-500/40
              transition">

              <Users
                size={32}
                className="mx-auto text-blue-400"
              />

              <h3 className="font-bold text-xl mt-5">
                Citizen First
              </h3>

              <p className="text-gray-500 text-sm mt-3 leading-6">

                We focus on creating a simple experience that
                puts users and their needs first.

              </p>

            </div>


            {/* Transparency */}
            <div className="p-7 rounded-2xl
              bg-black
              border border-gray-800
              hover:border-cyan-500/40
              transition">

              <ShieldCheck
                size={32}
                className="mx-auto text-cyan-400"
              />

              <h3 className="font-bold text-xl mt-5">
                Transparency
              </h3>

              <p className="text-gray-500 text-sm mt-3 leading-6">

                We believe users should have clear access to
                information about their case and its progress.

              </p>

            </div>


            {/* Simplicity */}
            <div className="p-7 rounded-2xl
              bg-black
              border border-gray-800
              hover:border-blue-500/40
              transition">

              <CheckCircle2
                size={32}
                className="mx-auto text-blue-400"
              />

              <h3 className="font-bold text-xl mt-5">
                Simplicity
              </h3>

              <p className="text-gray-500 text-sm mt-3 leading-6">

                Complex processes should feel simple, accessible
                and easy to understand.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-20">

        <div className="max-w-4xl mx-auto text-center
          rounded-3xl p-10 md:p-14
          bg-gradient-to-br from-blue-950 to-gray-950
          border border-blue-500/20
          shadow-2xl shadow-blue-900/10">

          <div className="w-16 h-16 mx-auto rounded-2xl
            bg-blue-600/10
            text-blue-400
            flex items-center justify-center">

            <Landmark size={32} />

          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-6">
            Have Questions About Your Land?
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">

            Explore the platform to understand your land
            acquisition process, track your case and stay updated.

          </p>

          <div className="flex flex-col sm:flex-row
            justify-center gap-4 mt-8">

            <button
              className="px-7 py-3 rounded-xl
                bg-gradient-to-r from-blue-600 to-cyan-500
                font-semibold
                hover:scale-105
                transition"
            >
              Get Started
            </button>
            <Link to="/Contact">
            <button
              className="px-7 py-3 rounded-xl
                border border-gray-700
                hover:border-blue-500
                hover:bg-blue-500/10
                transition"
            >
              Contact Us
            </button>
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
};

export default About;
