import React, { useState } from "react";
import {
  FileText,
  Download,
  Search,
  BookOpen,
  Scale,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import {Link} from 'react-router-dom'

const Resources = () => {
  const [search, setSearch] = useState("");
  // Add like in this section in link so in download or view click the document willl open
  const resources = [
    {
      icon: FileText,
      title: "Land Acquisition Guide",
      description:
        "A simple guide explaining the land acquisition process from notification to possession.",
      category: "Guides",
      type: "PDF",
      link: "https://bhoomirashi.gov.in/auth/revamp/la_act.pdf",
    },
    {
      icon: Scale,
      title: "Right to Fair Compensation Act",
      description:
        "Learn about the legal framework, compensation and rehabilitation provisions.",
      category: "Laws",
      type: "PDF",
      link: "https://prsindia.org/files/bills_acts/bills_states/assam/2026/AS_Land_Acquisition_Bill_2026.pdf",
    },
    {
      icon: BookOpen,
      title: "Compensation Guidelines",
      description:
        "Understand how compensation is calculated and the different factors considered.",
      category: "Guides",
      type: "PDF",
      link: "https://www.labour.gov.in/static/uploads/2025/06/1b4d1fe9eb74e8aaad19585bb5e531fb.pdf",
    },
    {
      icon: FileText,
      title: "Required Documents",
      description:
        "Complete checklist of documents required for land acquisition and compensation.",
      category: "Documents",
      type: "PDF",
      link: "https://www.centralcoalfields.in/indsk/pdf/employ_land/land_rules/21_01_2015/Check%20List%20For%20Proposals%20In%20Land%20Compensation0001.pdf",
    },
    {
      icon: ShieldCheck,
      title: "Rehabilitation & Resettlement",
      description:
        "Information about rehabilitation and resettlement benefits available to affected families.",
      category: "R&R",
      type: "PDF",
      link: "https://dms.hp.gov.in/ViewPDF.aspx?fn=qm486oBcZEz4vmwZvQ%2BZ3g0oBnN2WfHf%2FhxFEAEPeig4EoxLqLb2TxxJxbBnAjyR&ot=2LiD6ggCMIp9mzvYCQJmrg%3D%3D",
    },
    {
      icon: HelpCircle,
      title: "Frequently Asked Questions",
      description:
        "Find answers to common questions about land acquisition and compensation.",
      category: "FAQ",
      type: "Web",
      link: "https://www.finelite.cn/uploads/soft/20230509/1-23050Z9332IY.pdf",
    },
  ];

  const filteredResources = resources.filter((item) => {
    const text =
      `${item.title} ${item.description} ${item.category}`.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-bl from-blue-950 via-blue-900 to-[#000000] text-white">

        <div className="absolute -top-24 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">

          <p className="text-sm font-semibold text-indigo-200">
            BHOOMISETU
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Resources
          </h1>

          <p className="mt-4 max-w-2xl text-indigo-100 leading-relaxed">
            Access useful guides, documents, laws, FAQs and other
            information related to land acquisition, compensation
            and rehabilitation.
          </p>

          {/* Search */}

          <div className="relative max-w-xl mt-8">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources..."
              className="w-full bg-white text-gray-800 rounded-xl pl-12 pr-4 py-4 outline-none shadow-lg"
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          QUICK CATEGORIES
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <CategoryCard
            icon={BookOpen}
            title="Guides"
            count="12 Resources"
          />

          <CategoryCard
            icon={FileText}
            title="Documents"
            count="18 Resources"
          />

          <CategoryCard
            icon={Scale}
            title="Laws & Policies"
            count="9 Resources"
          />

          <CategoryCard
            icon={HelpCircle}
            title="FAQs"
            count="25 Questions"
          />

        </div>

      </section>

      {/* =====================================================
          RESOURCE LIST
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">

        <div className="flex items-center justify-between mb-6">

          <div>

            <p className="text-sm font-semibold text-indigo-600">
              KNOWLEDGE CENTER
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
              Useful Resources
            </h2>

          </div>

          <span className="text-sm text-gray-500">
            {filteredResources.length} resources
          </span>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredResources.map((resource, index) => {

            const Icon = resource.icon;

            return (
              <ResourceCard
                key={index}
                icon={Icon}
                title={resource.title}
                description={resource.description}
                category={resource.category}
                type={resource.type}
                link={resource.link}
              />
            );
          })}

        </div>

        {/* No result */}

        {filteredResources.length === 0 && (

          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">

            <Search
              size={40}
              className="mx-auto text-gray-300"
            />

            <h3 className="font-bold text-gray-700 mt-4">
              No resources found
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Try searching with another keyword.
            </p>

          </div>

        )}

      </section>

      {/* =====================================================
          IMPORTANT INFORMATION
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left */}

            <div className="bg-gradient-to-br from-blue-900  via-blue-950 to-black p-8 md:p-10 text-white">

              <Landmark size={34} />

              <h2 className="text-2xl font-bold mt-5">
                Need help understanding your case?
              </h2>

              <p className="text-indigo-100 mt-3 leading-relaxed text-sm">
                Explore our guides or contact the BhoomiSetu
                helpdesk if you need assistance with your land
                acquisition process.
              </p>
              <Link to='/Contact'>
              <button
                className="mt-6 px-5 py-3 rounded-xl bg-white text-blue-800 font-semibold text-sm hover:bg-gray-100 transition flex items-center gap-2"
              >
                Contact Support
                <ChevronRight size={17} />
              </button>
              </Link>
            </div>

            {/* Right */}

            <div className="p-8 md:p-10">

              <h3 className="text-xl font-bold text-gray-900">
                Important information
              </h3>

              <div className="mt-5 space-y-4">

                <InfoRow text="Keep your land ownership documents updated." />

                <InfoRow text="Check your dashboard regularly for case updates." />

                <InfoRow text="Verify compensation details before accepting payment." />

                <InfoRow text="Use official channels for submitting grievances." />

              </div>

            </div>

          </div>

        </div>

      </section>

    
    </div>
  );
};

// ============================================================
// CATEGORY CARD
// ============================================================

const CategoryCard = ({
  icon: Icon,
  title,
  count,
}) => {

  return (
    <button className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition text-left">

      <div className="flex items-center gap-4">

        <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">

          <Icon
            size={21}
            className="text-[#3038a0]"
          />

        </div>

        <div>

          <h3 className="font-bold text-gray-800">
            {title}
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            {count}
          </p>

        </div>

      </div>

    </button>
  );
};

// ============================================================
// RESOURCE CARD
// ============================================================

const ResourceCard = ({
  icon: Icon,
  title,
  description,
  category,
  type,
  link,
}) => {

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition p-6">

      <div className="flex items-start justify-between">

        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">

          <Icon
            size={23}
            className="text-[#3038a0]"
          />

        </div>

        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold">
          {type}
        </span>

      </div>

      <span className="inline-block mt-5 text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
        {category}
      </span>

      <h3 className="text-lg font-bold text-gray-900 mt-3">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        {description}
      </p>

      <div className="flex gap-2 mt-6">

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-blue-800 text-white text-sm font-semibold hover:bg-[#252c87] transition flex items-center justify-center gap-2"
        >
          {type === "PDF" ? (
            <Download size={16} />
          ) : (
            <ExternalLink size={16} />
          )}

          {type === "PDF" ? "Download" : "Open"}
        </a>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 transition flex items-center justify-center"
        >
          <ChevronRight size={17} />
        </a>

      </div>

    </div>
  );
};

// ============================================================
// INFO ROW
// ============================================================

const InfoRow = ({ text }) => {

  return (
    <div className="flex items-start gap-3">

      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">

        <div className="w-2 h-2 rounded-full bg-green-600" />

      </div>

      <p className="text-sm text-gray-600">
        {text}
      </p>

    </div>
  );
};

export default Resources;