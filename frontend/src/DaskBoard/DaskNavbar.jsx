import React, { useEffect, useState } from "react";
import {
  House,
  FileText,
  IndianRupee,
  Accessibility,
  FolderOpen,
  Bell,
  MessageCircle,
  CircleHelp,
  User,
  LogOut,
  Locate ,
} from "lucide-react";

import { Link } from "react-router-dom";

const DaskNav = (props) => {

  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setCondition(props.data);
  }, [props.data]);


  return (
    <div className="h-full bg-gradient-to-b from-blue-600 via-blue-900 to-black text-white flex flex-col px-3 py-5">

      {/* ================= LOGO ================= */}

      <div className="flex items-center gap-2 px-3 mb-6">

        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
          <House size={22} />
        </div>

        <div>
          <h1 className="text-lg font-bold">
            BhoomiSetu
          </h1>

          <p className="text-[9px] text-white/60">
            Land Acquisition Portal
          </p>
        </div>

      </div>


      {/* ================= NAVIGATION ================= */}

      <nav className="flex-1">

        <div className="space-y-2">


          {/* DASHBOARD */}

          <NavItem
            to="/DaskBoard"
            icon={<House size={20} />}
            text="Dashboard"
          />


          {/* MY LAND CASE */}

          <NavItem
            to="/Dask3"
            icon={<FileText size={20} />}
            text="My Land Case"
          />


          {/* COMPENSATION */}

          <NavItem
            to="/Dask4"
            icon={<IndianRupee size={20} />}
            text="Compensation"
          />


          {/* REHABILITATION */}

          <NavItem
            to="/Dask5"
            icon={<Accessibility size={20} />}
            text="Rehabilitation & R&R"
          />

          <NavItem
            to="/PlotMap"
            icon={<Locate  size={20} />}
            text="MapLand"
          />

          {/* DOCUMENTS */}

          <NavItem
            to="/documents"
            icon={<FolderOpen size={20} />}
            text="Documents"
          />


          {/* NOTICES */}

          <NavItem
            to="/notices"
            icon={<Bell size={20} />}
            text="Notices & Updates"
          />


          {/* GRIEVANCES */}

          <NavItem
            to="/Dask6"
            icon={<MessageCircle size={20} />}
            text="Grievances"
          />


          {/* HELP */}

          <NavItem
            to="/Contact"
            icon={<CircleHelp size={20} />}
            text="Help & Support"
          />


          {/* PROFILE */}

          <NavItem
            to="/profile"
            icon={<User size={20} />}
            text="Profile"
          />

        </div>


        {/* ================= LOGOUT ================= */}

        <Link
          to="/"
          reloadDocument
          className="flex items-center gap-3 px-4 py-2.5 mt-3 rounded-2xl text-sm font-semibold hover:bg-blue-700 hover:text-cyan-400 transition-all duration-300 ease-in-out"
        >

          <LogOut size={20} />

          <span>
            Logout
          </span>

        </Link>

      </nav>


      {/* ================= DIVIDER ================= */}

      <div className="px-2 mb-4">

        <div className="border-t border-white/20" />

      </div>


      {/* ================= HELP CARD ================= */}

      <div
        className="
          bg-white/10
          backdrop-blur-sm
          border border-white/10
          rounded-2xl
          px-3 py-3
          flex items-center gap-3
        "
      >

        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">

          <MessageCircle
            size={19}
            className="text-blue-900"
          />

        </div>


        <div className="leading-tight">

          <p className="text-sm font-semibold">
            Need Help?
          </p>

          <p className="text-[10px] text-white/60">
            Contact Us
          </p>

        </div>

      </div>

    </div>
  );
};


/* =====================================================
   NAV ITEM
===================================================== */

const NavItem = ({
  to,
  icon,
  text,
}) => {

  return (
    <Link
      to={to}
      className="
        group
        flex items-center gap-3
        px-4 py-2.5
        rounded-2xl
        text-sm font-semibold
        outline-none
        hover:bg-blue-700
        hover:text-cyan-400
        transition-all
        duration-300
        ease-in-out
        whitespace-nowrap
      "
    >

      <span className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>

      <span className="group-hover:text-cyan-400">
        {text}
      </span>

    </Link>
  );
};


export default DaskNav;