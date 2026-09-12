import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Headset,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form:", form);

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-bl from-blue-700 via-blue-900 to-black text-white">

        {/* Background decoration */}

        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">

          <p className="text-sm font-semibold text-indigo-200 mb-3">
            BHOOMISETU
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 max-w-2xl text-indigo-100 text-sm md:text-base leading-relaxed">
            Have a question about land acquisition, compensation,
            documents, or your case status? Our support team is
            here to help you.
          </p>

        </div>

      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 -mt-10 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Phone */}

          <ContactCard
            icon={Phone}
            title="Call Us"
            text="1800-11-2345"
            sub="Toll-free helpline"
          />

          {/* Email */}

          <ContactCard
            icon={Mail}
            title="Email Us"
            text="support@bhoomisetu.gov.in"
            sub="We usually respond within 24 hours"
          />

          {/* Office */}

          <ContactCard
            icon={MapPin}
            title="Visit Us"
            text="New Delhi"
            sub="Government Land Acquisition Office"
          />

        </div>

      </section>

      {/* =====================================================
          MAIN CONTACT SECTION
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* =================================================
              LEFT INFORMATION
          ================================================= */}

          <div>

            <p className="text-sm font-semibold text-blue-600">
              GET IN TOUCH
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              We're here to help
            </h2>

            <p className="text-gray-500 mt-4 leading-relaxed max-w-xl">
              Whether you need help understanding your land
              acquisition case, submitting documents, tracking
              compensation, or raising a grievance, you can
              contact the BhoomiSetu support team.
            </p>

            {/* Support information */}

            <div className="mt-8 space-y-5">

              <InfoItem
                icon={Headset}
                title="Land Acquisition Helpdesk"
                text="Get assistance with your acquisition case and application."
              />

              <InfoItem
                icon={MessageCircle}
                title="Grievance Support"
                text="Raise a concern and track the status of your grievance."
              />

              <InfoItem
                icon={Clock}
                title="Working Hours"
                text="Monday to Saturday · 9:00 AM to 6:00 PM"
              />

            </div>

            {/* Emergency support box */}

            <div className="mt-8 bg-[#eeefff] border border-indigo-100 rounded-2xl p-5">

              <div className="flex gap-4">

                <div className="w-11 h-11 rounded-xl bg-[#3038a0] flex items-center justify-center shrink-0">

                  <Headset
                    size={21}
                    className="text-white"
                  />

                </div>

                <div>

                  <h3 className="font-bold text-gray-900">
                    Need immediate assistance?
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Call our toll-free helpline for assistance
                    with your land acquisition case.
                  </p>

                  <p className="text-lg font-bold text-[#3038a0] mt-2">
                    1800-11-2345
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">

            <h2 className="text-2xl font-bold text-gray-900">
              Send us a message
            </h2>

            <p className="text-sm text-gray-500 mt-1 mb-6">
              Fill out the form and our team will get back to you.
            </p>

            {submitted ? (

              <div className="min-h-[400px] flex flex-col items-center justify-center text-center">

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">

                  <CheckCircle2
                    size={34}
                    className="text-green-600"
                  />

                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  Message Sent!
                </h3>

                <p className="text-sm text-gray-500 mt-2 max-w-sm">
                  Thank you for contacting BhoomiSetu.
                  Our support team will get back to you soon.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2.5 rounded-xl bg-linear-to-br from-blue-800 via-blue-600 to-black text-white text-sm font-semibold hover:bg-blue-950 transition"
                >
                  Send Another Message
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name + Email */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <FormInput
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />

                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />

                </div>

                {/* Phone */}

                <FormInput
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />

                {/* Subject */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>

                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  >

                    <option value="">
                      Select a subject
                    </option>

                    <option value="Land Acquisition">
                      Land Acquisition
                    </option>

                    <option value="Compensation">
                      Compensation
                    </option>

                    <option value="Documents">
                      Documents
                    </option>

                    <option value="Grievance">
                      Grievance
                    </option>

                    <option value="Technical Support">
                      Technical Support
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>

                {/* Message */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none resize-none focus:ring-2 focus:ring-indigo-500 transition"
                  />

                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-linear-to-bl from-blue-700 via-blue-900 to-black hover:bg-[#252c87] text-white font-semibold flex items-center justify-center gap-2 transition shadow-md"
                >

                  <Send size={17} />

                  Send Message

                </button>

              </form>

            )}

          </div>

        </div>

      </section>

      

    </div>
  );
};

// ============================================================
// CONTACT CARD
// ============================================================

const ContactCard = ({
  icon: Icon,
  title,
  text,
  sub,
}) => {

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5">

      <div className="flex items-center gap-4">

        <div className="w-11 h-11 rounded-xl bg-[#eeefff] flex items-center justify-center">

          <Icon
            size={20}
            className="text-[#3038a0]"
          />

        </div>

        <div>

          <p className="text-xs text-gray-500">
            {title}
          </p>

          <p className="font-bold text-gray-900 mt-0.5">
            {text}
          </p>

          <p className="text-[11px] text-gray-400 mt-1">
            {sub}
          </p>

        </div>

      </div>

    </div>
  );
};

// ============================================================
// INFO ITEM
// ============================================================

const InfoItem = ({
  icon: Icon,
  title,
  text,
}) => {

  return (
    <div className="flex gap-4">

      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">

        <Icon
          size={19}
          className="text-green-700"
        />

      </div>

      <div>

        <h3 className="font-bold text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {text}
        </p>

      </div>

    </div>
  );
};

// ============================================================
// FORM INPUT
// ============================================================

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {

  return (
    <div>

      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />

    </div>
  );
};

export default Contact;