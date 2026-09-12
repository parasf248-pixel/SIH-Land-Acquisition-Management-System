
import React from "react";
import {
  LogIn,
  FileText,
  Upload,
  ShieldCheck,
  Search,
  MapPinned,
  IndianRupee,
  MessageSquare,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: LogIn,
      title: "Create Account / Login",
      description:
        "Create your account or login using your registered credentials to access your land acquisition dashboard.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Submit Land Information",
      description:
        "Enter your land details such as owner name, state, district, village, area and Khasra number.",
    },
    {
      number: "03",
      icon: Upload,
      title: "Upload Documents",
      description:
        "Upload required documents such as Aadhaar, PAN card and property papers for verification.",
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Document Verification",
      description:
        "Your submitted information and documents are reviewed and verified by the concerned authorities.",
    },
    {
      number: "05",
      icon: Search,
      title: "Track Acquisition Status",
      description:
        "Track the current status of your land acquisition case directly from your dashboard.",
    },
    {
      number: "06",
      icon: MapPinned,
      title: "View Land & Project Details",
      description:
        "View your land location, project information, acquisition details and important updates.",
    },
    {
      number: "07",
      icon: IndianRupee,
      title: "Compensation Process",
      description:
        "Check compensation information and track the progress of your compensation process.",
    },
    {
      number: "08",
      icon: MessageSquare,
      title: "Raise a Grievance",
      description:
        "If you have any issue, submit a grievance and track its resolution from your account.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">

        {/* Background glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-violet-500/10 border border-blue-500/30
            text-blue-500 text-sm font-medium mb-6">

            <CheckCircle2 size={17} />

            Simple & Transparent Process
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r
              from-blue-700 to-blue-400">
              Works
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-base md:text-lg leading-8">
            Our platform makes the land acquisition process simple,
            transparent and easy to track. Follow these steps to manage
            your land acquisition journey.
          </p>

        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="px-6 pb-20">

        <div className="max-w-5xl mx-auto">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div key={step.number}>

                {/* Step */}
                <div className="group flex flex-col md:flex-row gap-6 md:gap-10">

                  {/* Number / Icon */}
                  <div className="flex md:flex-col items-center gap-4">

                    <div className="relative shrink-0">

                      <div className="w-16 h-16 md:w-20 md:h-20
                        rounded-2xl
                        bg-gradient-to-br from-blue-700 via-blue-800 to-blue-500
                        flex items-center justify-center
                        shadow-lg shadow-violet-500/10
                        group-hover:scale-110
                        transition duration-300">

                        <Icon size={30} />
                      </div>

                      <span className="absolute -top-3 -right-3
                        w-8 h-8 rounded-full
                        bg-gray-900 border border-gray-700
                        flex items-center justify-center
                        text-xs font-bold text-green-400">

                        {step.number}
                      </span>

                    </div>

                    {/* Desktop line */}
                    {index !== steps.length - 1 && (
                      <div className="hidden md:block w-px h-16
                        bg-gradient-to-b from-blue-500/60 to-red-500/20" />
                    )}

                  </div>


                  {/* Content */}
                  <div className="flex-1 pb-12 md:pt-2">

                    <div className="bg-gray-900/70 border border-gray-800
                      rounded-2xl p-6 md:p-7
                      hover:border-red-500/40
                      hover:bg-gray-900
                      transition duration-300">

                      <h2 className="text-xl md:text-2xl font-bold
                        text-white group-hover:text-green-400
                        transition">

                        {step.title}

                      </h2>

                      <p className="mt-3 text-gray-400 leading-7">
                        {step.description}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Mobile arrow */}
                {index !== steps.length - 1 && (
                  <div className="flex justify-center md:hidden -mt-7 mb-5">
                    <ArrowDown
                      size={22}
                      className="text-violet-500"
                    />
                  </div>
                )}

              </div>
            );
          })}

        </div>
      </section>


      {/* ================= SIMPLE PROCESS ================= */}
      <section className="px-6 py-20 bg-gray-900/50 border-y border-gray-800">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-300 font-semibold mb-2">
              AT A GLANCE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Your Journey in 4 Simple Stages
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {[
              {
                icon: LogIn,
                title: "Register",
                text: "Create your account",
              },
              {
                icon: FileText,
                title: "Submit",
                text: "Provide land information",
              },
              {
                icon: Search,
                title: "Track",
                text: "Monitor your case",
              },
              {
                icon: CheckCircle2,
                title: "Resolve",
                text: "Complete the process",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative text-center p-7 rounded-2xl
                    bg-gray-950 border border-gray-800
                    hover:border-green-500/40
                    transition duration-300"
                >

                  <div className="w-14 h-14 mx-auto rounded-xl
                    bg-blue-500/10 text-blue-400
                    flex items-center justify-center mb-5">

                    <Icon size={26} />

                  </div>

                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    {item.text}
                  </p>

                  {index !== 3 && (
                    <div className="hidden md:block absolute
                      top-1/2 -right-4 text-green-500">
                      →
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-20">

        <div className="max-w-4xl mx-auto text-center
          rounded-3xl p-10 md:p-14
          bg-gradient-to-br from-blue-900/50 to-black/30
          border border-violet-500/20">

          <CheckCircle2
            size={45}
            className="mx-auto text-blue-400 mb-5"
          />

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Login to your account and start managing your land
            acquisition information from one convenient dashboard.
          </p>

          <button
            className="mt-8 px-8 py-3 rounded-xl
              bg-gradient-to-r from-blue-600 via-blue-800 to-black
              font-semibold
              hover:scale-105
              transition duration-300
              shadow-lg shadow-violet-500/20"
          >
            Go to Dashboard
          </button>

        </div>

      </section>

    </div>
  );
};

export default HowItWorks;
