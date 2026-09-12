import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/Login_img.png";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Login = ({ sendData }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [home2Ref, home2Visible] = useScrollAnimation();
  const [home1Ref, home1Visible] = useScrollAnimation();
  const [home4Ref, home4Visible] = useScrollAnimation();

 const handleLogin = (e) => {
  e.preventDefault();
  setError("");

  if (!userId.trim() || !password.trim()) {
    setError("Please enter User ID and Password");
    return;
  }

  // Remember that user is logged in
  localStorage.setItem("isLoggedIn", "true");

  // Send only true to App
  sendData(true);

  navigate("/");
};
  return (
    <div
      ref={home4Ref}
      className={`min-h-screen bg-white text-gray-900 ${
        home4Visible ? "scroll-up" : "scroll-hidden"
      }`}
    >
      <div className="min-h-[calc(100vh-70px)] flex flex-col lg:flex-row">
        <div
          ref={home2Ref}
          className={`relative w-full lg:w-[47%] min-h-[600px] lg:min-h-0 bg-cover bg-center overflow-hidden ${
            home2Visible ? "scroll-left" : "scroll-hidden"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.70), rgba(255,255,255,0.70)), url('/assets/road-map.jpg')",
          }}
        >
          <div className="relative z-10 h-full px-5 sm:px-8 lg:px-10 py-6">
            <div className="flex items-start gap-3">
              <div className="text-4xl">🏛️</div>
              <div>
                <p className="text-sm sm:text-base font-medium">
                  Government of India
                </p>
                <p className="text-xs sm:text-sm">
                  Ministry of Rural Development
                </p>
              </div>
            </div>

            <div className="relative h-screen w-full overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 blur-sm"
                style={{ backgroundImage: `url(${loginImg})` }}
              />

              <div className="absolute inset-0 bg-white/20" />

              <div className="relative z-10 h-full flex flex-col justify-between text-white p-6">
                <div className="mt-12">
                  <h1 className="text-5xl font-extrabold">
                    <span className="text-blue-700">Bhoomi</span>
                    <span className="text-green-500">Setu</span>
                  </h1>

                  <h2 className="mt-1 text-lg font-bold">
                    National Land Acquisition Management System
                  </h2>

                  <p className="max-w-md text-sm">
                    A unified digital platform for transparent and efficient
                    land acquisition monitoring across India
                  </p>
                </div>

                <div className="space-y-4">
                  <Feature
                    icon="▣"
                    color="text-green-600"
                    title="Real-time Monitoring"
                    description="Track land acquisition progress in real time"
                  />
                  <Feature
                    icon="⌖"
                    color="text-indigo-700"
                    title="Integrated GIS Mapping"
                    description="View land parcels and project locations on interactive map"
                  />
                  <Feature
                    icon="♟"
                    color="text-purple-700"
                    title="Timely Compensation & R&R"
                    description="Ensure timely distribution and rehabilitation"
                  />
                  <Feature
                    icon="♢"
                    color="text-green-700"
                    title="Transparent & Accountable"
                    description="End-to-end transparency and audit ready records"
                  />
                </div>

                <div className="inline-flex items-center gap-4 bg-indigo-900 text-white rounded-lg px-5 py-3 shadow-lg">
                  <div className="text-3xl">♙</div>
                  <div>
                    <p className="font-bold text-sm">
                      Secure & Authorized Access
                    </p>
                    <p className="text-[9px] max-w-[210px]">
                      This is a government system. Unauthorized Access is
                      prohibited and may attract legal action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={home1Ref}
          className={`w-full lg:w-[53%] flex flex-col bg-white ${
            home1Visible ? "scroll-right" : "scroll-hidden"
          }`}
        >
          <div className="flex justify-end items-center gap-5 px-6 sm:px-10 lg:px-12 py-4">
            <div className="flex items-center gap-2">
              <div className="text-green-700 text-2xl">♧</div>
              <div className="leading-4">
                <p className="font-semibold text-sm">Helpdesk</p>
                <p className="text-sm">1800-XXX-XXXX</p>
              </div>
            </div>

            <button className="border border-gray-300 rounded-md px-3 py-2 text-sm text-indigo-800 font-medium hover:bg-gray-50">
              English/Hindi
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center px-5 sm:px-10 py-8">
            <div className="w-full max-w-[380px]">
              <div className="rounded-xl border border-gray-200 shadow-lg bg-white px-5 sm:px-8 pt-8 pb-5">
                <div className="flex justify-center -mt-11 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center">
                      🔒
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="font-semibold text-base">
                    Login to{" "}
                    <span className="text-green-600">Bhoomi</span>
                    <span className="text-indigo-800">Setu</span>
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Please enter your credentials to continue
                  </p>
                  <p className="text-[10px] text-gray-600">
                    Secure access to authorized government officials
                  </p>
                </div>

                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-2">
                      Officer User ID <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        ♙
                      </span>
                      <input
                        required
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="Enter User ID or Email"
                        className="w-full h-10 border border-gray-300 rounded-md pl-9 pr-3 text-xs outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-2">
                      Password <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        🔒
                      </span>

                      <input
                        required
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="w-full h-10 border border-gray-300 rounded-md pl-9 pr-10 text-xs outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? "◉" : "◌"}
                      </button>
                    </div>

                    <div className="text-right mt-1">
                      <button
                        type="button"
                        onClick={() =>
                          setError("Please contact the helpdesk to reset your password.")
                        }
                        className="text-[10px] font-semibold text-indigo-800 hover:underline"
                      >
                        Forgot Password ?
                      </button>
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs text-center">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full cursor-pointer h-10 rounded-md bg-indigo-900 text-white font-semibold text-sm hover:bg-indigo-800 transition"
                  >
                    ⇥ Login
                  </button>
                </form>

                <div className="flex items-center gap-3 my-5">
                  <div className="h-px bg-gray-200 flex-1" />
                  <span className="text-xs text-gray-500">or</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>

                <p className="text-xs text-gray-600">
                  New Officer?{" "}
                  <button className="text-green-600 underline">
                    Request Access
                  </button>
                </p>

                <div className="mt-7 rounded-md bg-green-50 px-4 py-3 flex gap-3">
                  <div className="text-2xl text-green-700">🛡️</div>
                  <div>
                    <p className="text-[10px] font-bold text-green-700">
                      Authorized Access Only
                    </p>
                    <p className="text-[9px] text-gray-600 leading-3 mt-1">
                      This portal is for authorized government officials only.
                      <br />
                      All activities are monitored and logged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="min-h-[70px] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between px-5 sm:px-8 lg:px-12 py-4 gap-3 text-xs sm:text-sm text-gray-600">
        <p>
          <span className="text-xl font-semibold">©</span>
          &nbsp; 2026 Government of India. All Rights Reserved
        </p>

        <div className="flex flex-wrap justify-center gap-1">
          <a href="#" className="hover:text-indigo-800">Privacy</a>
          <span>|</span>
          <a href="#" className="hover:text-indigo-800">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-indigo-800">Accessibility</a>
          <span>|</span>
          <a href="#" className="hover:text-indigo-800">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

const Feature = ({ icon, color, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-md shadow flex items-center justify-center flex-shrink-0">
        <span className={`text-2xl ${color}`}>{icon}</span>
      </div>

      <div>
        <h3 className="font-bold text-sm sm:text-base">{title}</h3>
        <p className="text-xs sm:text-sm leading-4 max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Login;
