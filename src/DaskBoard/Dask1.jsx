
import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  LogOut,
  Settings,
  ChevronDown,
} from "lucide-react";

const Dask1 = (props) => {
  const [open, setOpen] = useState(false);
  const profileRef = useRef(null);
  const [user, setUser] = useState({})

  useEffect(()=>{
    setUser(props.userData);
  },[props.userData])

  // Close profile when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={profileRef}
      className="fixed  top-5 right-6 z-50"
    >
      {/* ================= PROFILE BUTTON ================= */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 bg-gray-900/95 border-2 border-gray-700 
        rounded-full pl-2 pr-4 py-2 shadow-xl hover:border-blue-500 
        transition-all duration-300"
      >
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500
            via-blue-900 to-black flex items-center justify-center"
        >
          <User size={21} className="text-white" />
        </div>

        {/* Name */}
        <div className="hidden sm:block text-left">
          <p className="text-white text-sm font-semibold">
            {user.oname}
          </p>

          <p className="text-gray-400 text-xs">
            Land Owner
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* ================= PROFILE DROPDOWN ================= */}
      {open && (
        <div
          className="absolute right-0 mt-3 w-80 bg-white text-gray-900 
          rounded-2xl shadow-2xl border border-gray-200 overflow-hidden
          animate-[profileDrop_0.2s_ease-out]"
        >

          {/* Profile Header */}
          <div
            className="bg-gradient-to-r from-blue-500
            via-blue-900 to-black p-5"
          >
            <div className="flex items-center gap-4">

              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full bg-gray-950 
                border-4 border-white/80 flex items-center justify-center"
              >
                <User size={30} className="text-green-400" />
              </div>

              <div className="text-white">
                <h2 className="font-bold text-lg">
                  {user.oname}
                </h2>

                <p className="text-white/70 text-sm">
                  Land Owner
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-5 space-y-4">

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-violet-100 text-violet-600">
                <Mail size={17} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-400">
                  Email
                </p>

                <p className="text-sm font-medium truncate">
                  {user.Email}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100 text-green-600">
                <Phone size={17} />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Phone
                </p>

                <p className="text-sm font-medium">
                  {user.phone}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                <MapPin size={17} />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Location
                </p>

                <p className="text-sm font-medium">
                  {user.district}, {user.state}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 pt-3">

              {/* Settings */}
              <button
                className="w-full flex items-center gap-3 
                px-3 py-3 rounded-xl hover:bg-gray-100 
                transition text-left"
              >
                <Settings size={18} className="text-gray-500" />

                <span className="text-sm font-medium">
                  Profile Settings
                </span>
              </button>

              {/* Logout */}
              <button
                className="w-full flex items-center gap-3 
                px-3 py-3 rounded-xl hover:bg-red-50 
                text-red-600 transition text-left"
                 onClick={() => window.location.href = '/'}
              >
                <LogOut size={18} />

                <span className="text-sm font-medium">
                  Logout
                </span>
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dask1;
