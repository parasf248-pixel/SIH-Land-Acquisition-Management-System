
import React, { useState } from "react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageCircleQuestion,
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const faqs = [
    {
      question: "What is the Land Acquisition Portal?",
      answer:
        "The Land Acquisition Portal is an online platform that allows landowners to access information about land acquisition, submit property details, track applications, view project information, and raise grievances.",
    },
    {
      question: "How can I submit my land information?",
      answer:
        "After logging in to your account, open the Dashboard and complete the Land Information Form. Enter the required property and owner details and upload the necessary documents before submitting the form.",
    },
    {
      question: "What documents are required for land acquisition?",
      answer:
        "Commonly required documents may include identity proof, PAN card, ownership or property documents, and other documents requested for the particular land acquisition case.",
    },
    {
      question: "How can I check my land acquisition status?",
      answer:
        "Log in to your account and open the Dashboard. Your submitted property information and available case status can be viewed from the dashboard.",
    },
    {
      question: "Can I update my submitted property information?",
      answer:
        "If editing is enabled for your application, you can update the available information from your Dashboard. For information that cannot be edited, contact the helpdesk for assistance.",
    },
    {
      question: "How can I track my application?",
      answer:
        "Log in to the portal and visit the Dashboard. Your application or case reference and its current status will be displayed when tracking information is available.",
    },
    {
      question: "What should I do if I have a grievance?",
      answer:
        "You can use the Grievance Redressal section to submit your complaint or concern. Provide accurate details so that the concerned department can review your grievance.",
    },
    {
      question: "How can I contact the helpdesk?",
      answer:
        "You can visit the Contact Us or Helpdesk page from the website navigation or footer to find the available support information.",
    },
    {
      question: "Is registration required to use the portal?",
      answer:
        "Some services and features require you to log in to your account. Public information such as general resources and FAQs may be available without logging in.",
    },
    {
      question: "Where can I find land acquisition guidelines?",
      answer:
        "You can find useful documents, guidelines, manuals, and other information in the Resources section of the portal.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
            <HelpCircle
              size={34}
              className="text-cyan-400"
            />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Help & Support
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Frequently Asked{" "}
            <span className="text-cyan-400">Questions</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Find answers to common questions about land acquisition,
            applications, documents, grievances, and using the portal.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="group flex items-center rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 shadow-2xl backdrop-blur-xl transition focus-within:border-cyan-400/50">

              <Search
                size={22}
                className="mr-3 text-white/40 transition group-focus-within:text-cyan-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your question..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30 md:text-base"
              />

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Knowledge Base
            </p>

            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Common Questions
            </h2>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 sm:flex">
            <MessageCircleQuestion size={17} />
            {filteredFaqs.length} Questions
          </div>
        </div>

        <div className="space-y-4">

          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-400/40 bg-cyan-400/[0.04] shadow-lg shadow-cyan-500/5"
                      : "border-white/10 bg-white/[0.03] hover:border-cyan-400/20 hover:bg-white/[0.05]"
                  }`}
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >

                    <div className="flex items-center gap-4">

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition ${
                          isOpen
                            ? "bg-cyan-400 text-gray-950"
                            : "bg-cyan-400/10 text-cyan-400"
                        }`}
                      >
                        {index + 1}
                      </span>

                      <span
                        className={`font-semibold transition ${
                          isOpen
                            ? "text-cyan-300"
                            : "text-white"
                        }`}
                      >
                        {faq.question}
                      </span>

                    </div>

                    <ChevronDown
                      size={21}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-cyan-400"
                          : "text-white/40"
                      }`}
                    />

                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 px-6 pb-6 pt-5 pl-[4.5rem]">
                        <p className="text-sm leading-7 text-white/60 md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })
          ) : (
            /* No Results */
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">

              <Search
                size={40}
                className="mx-auto mb-4 text-white/20"
              />

              <h3 className="text-xl font-semibold">
                No questions found
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Try searching with a different keyword.
              </p>

            </div>
          )}

        </div>
      </section>

      {/* Still Need Help */}
      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent p-8 md:p-10">

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>
              <div className="mb-3 flex items-center gap-2 text-cyan-400">
                <MessageCircleQuestion size={22} />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Need More Help?
                </span>
              </div>

              <h2 className="text-2xl font-bold md:text-3xl">
                Couldn't find your answer?
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
                Our support team is available to help you with questions
                related to your application and land acquisition process.
              </p>
            </div>

            <a
              href="/Contact"
              className="group flex shrink-0 items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Contact Us

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>
        </div>

      </section>

    </div>
  );
};

export default FAQ;
