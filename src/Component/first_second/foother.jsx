import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-950 via-blue-400 to-black text-white">

      {/* Decorative Background */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>


      {/* ================= Newsletter ================= */}
      <div className="relative mx-auto max-w-7xl px-5 pt-10">

        <div className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:flex-row md:items-center md:px-8">

          {/* Gradient Line */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-400 via-blue-700 to-blue-800"></div>

          {/* Mail Icon */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 via-blue-950 to-black shadow-lg shadow-purple-500/30">

            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

          </div>


          {/* Text */}
          <div className="flex-1">
            <h2 className="text-lg font-bold tracking-wide">
              Stay Updated with{" "}
              <span className="text-cyan-300">
                BhoomiSetu
              </span>
            </h2>

            <p className="mt-1 text-sm text-white/70">
              Subscribe to our newsletter for latest updates and notifications.
            </p>
          </div>


          {/* Input */}
          <div className="flex  max-w-md rounded-xl border border-white/20 bg-white/10 p-1 backdrop-blur-md">
            <Link to='/Contact'>
              <button className="rounded-lg bg-gradient-to-r from-cyan-700 to-blue-600 px-5 py-2.5 text-sm font-bold shadow-lg transition duration-300 hover:scale-105 hover:shadow-green-500/30">
                Contact Us
              </button>
            </Link>

          </div>

        </div>
      </div>


      {/* ================= Main Footer ================= */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">


        {/* BhoomiSetu */}
        <div>

          <div className="mb-5 flex items-center gap-3">
            <div className="h-9 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>

            <h3 className="text-lg font-bold">
              BhoomiSetu
            </h3>
          </div>

          <p className="text-sm leading-6 text-white/60">
            An integrated digital platform for end-to-end management of
            land acquisition, compensation, rehabilitation and resettlement.
          </p>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-white/70">
              © 2026 Government of India.
            </p>

            <p className="mt-1 text-xs text-white/50">
              All Rights Reserved.
            </p>
          </div>

        </div>


        {/* Important Links */}
        <div>

          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-cyan-300">
            Important Links
          </h3>

          {/* Important Links */}
          <div className="space-y-3">
            {[
              {
                name: "Ministry of Rural Development",
                link: "https://rural.gov.in/",
              },
              {
                name: "Department of Land Resources",
                link: "https://dolr.gov.in/",
              },
              {
                name: "National Portal of India",
                link: "https://www.india.gov.in/",
              },
              {
                name: "Digital India",
                link: "https://www.digitalindia.gov.in/",
              },
              {
                name: "India.gov.in",
                link: "https://www.india.gov.in/",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-sm text-white/60 transition hover:translate-x-1 hover:text-white"
              >
                <span className="mr-2 text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  →
                </span>

                {item.name}
              </a>
            ))}
          </div>


        </div>


        {/* Help & Support */}
        <div>

          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-cyan-300">
            Help & Support
          </h3>

          <div className="space-y-3">

            {[{ name: "FAQs", link: "/faq", }, 
            { name: "Contact Us", link: "/Contact", },].
            map((item) => (
            <Link key={item.name} 
            to={item.link}
             className="group flex items-center text-sm text-white/60 transition hover:translate-x-1 hover:text-white" >
               <span 
               className="mr-2 text-cyan-400 opacity-0 transition group-hover:opacity-100"> → 
               </span> {item.name}
                </Link>
            ))}

          </div>

        </div>


        {/* Stay Connected */}
        <div>

          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-cyan-300">
            Stay Connected
          </h3>





          {/* Contact */}
          <div className="mt-6 space-y-3">

            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="text-cyan-400">☎</span>
              1800-XXX-XXXX
            </div>

            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="text-cyan-400">✉</span>
              support@bhoomisetu.gov.in
            </div>

          </div>

        </div>

      </div>


      {/* ================= Bottom ================= */}
      <div className="relative border-t border-white/10 bg-black/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-wrap gap-x-2 gap-y-1">

            <a href="#" className="transition hover:text-white">
              Accessibility Statement
            </a>

            <span>|</span>

            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <span>|</span>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>

            <span>|</span>

            <a href="#" className="transition hover:text-white">
              Hyperlinking Policy
            </a>

            <span>|</span>

            <a href="#" className="transition hover:text-white">
              Website Policy
            </a>

          </div>

          <div className="whitespace-nowrap">
            Last Updated: 03 September 2026
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;