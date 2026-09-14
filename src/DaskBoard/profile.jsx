
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Edit3,
  Save,
  X,
  FileText,
  Calendar,
  CheckCircle,
} from "lucide-react";

const Profile = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    ownerName: userData?.ownerName || "",
    fatherName: userData?.fatherName || "",
    mobile: userData?.mobile || "",
    email: userData?.email || "",
    state: userData?.state || "",
    district: userData?.district || "",
    village: userData?.village || "",
    khasraNo: userData?.khasraNo || "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("landUserData", JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div className=" min-h-screen bg-slate-950 text-white p-6 md:p-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="mt-2 text-white/50">
          Manage your personal information and account details
        </p>
      </div>

      {/* Profile Top Card */}
      <div className="scroll-left rounded-2xl border border-white/10 bg-gradient-to-r from-violet-950/60 via-slate-900 to-blue-950/60 p-6 shadow-xl">

        <div className="scroll-right flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-5">

            {/* Avatar */}
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg">
              <User size={48} />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {profile.ownerName || "Land Owner"}
              </h2>

              <p className="mt-1 text-white/50">
                Registered Land Owner
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  <CheckCircle size={13} />
                  Active
                </span>

                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                  Verified Account
                </span>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-500"
            >
              <Edit3 size={18} />
              Edit Profile
            </button>
          ) : (
            <div className="scroll-right flex gap-3">

              <button
                onClick={handleSave}
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-medium transition hover:bg-green-500"
              >
                <Save size={18} />
                Save
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-medium transition hover:bg-white/20"
              >
                <X size={18} />
                Cancel
              </button>

            </div>
          )}
        </div>
      </div>

      {/* Main Grid */}
      <div className= "scroll-zoom mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Personal Information */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900 p-6">

          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400">
              <User size={20} />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Personal Information
              </h3>

              <p className="text-sm text-white/40">
                Your registered personal details
              </p>
            </div>
          </div>

          <div className=" scroll-zoom grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Owner Name */}
            <ProfileField
              label="Owner Name"
              name="ownerName"
              value={profile.ownerName}
              icon={<User size={17} />}
              editing={isEditing}
              onChange={handleChange}
            />

            {/* Father Name */}
            <ProfileField
              label="Father's Name"
              name="fatherName"
              value={profile.fatherName}
              icon={<User size={17} />}
              editing={isEditing}
              onChange={handleChange}
            />

            {/* Mobile */}
            <ProfileField
              label="Mobile Number"
              name="mobile"
              value={profile.mobile}
              icon={<Phone size={17} />}
              editing={isEditing}
              onChange={handleChange}
            />

            {/* Email */}
            <ProfileField
              label="Email Address"
              name="email"
              value={profile.email}
              icon={<Mail size={17} />}
              editing={isEditing}
              onChange={handleChange}
            />

          </div>
        </div>

        {/* Account Security */}
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-500/10 p-2 text-green-400">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Account Security
              </h3>

              <p className="text-sm text-white/40">
                Your account status
              </p>
            </div>
          </div>

          <div className="space-y-4">

            <SecurityRow
              title="Account Status"
              value="Active"
              green
            />

            <SecurityRow
              title="Identity Verification"
              value="Verified"
              green
            />

            <SecurityRow
              title="Land Documents"
              value="Submitted"
              green
            />

            <SecurityRow
              title="Data Protection"
              value="Secure"
              green
            />

          </div>
        </div>
      </div>

      {/* Land Location */}
      <div className="scroll-right mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">

        <div className="mb-6 flex items-center gap-3">

          <div className="rounded-lg bg-violet-500/10 p-2 text-violet-400">
            <MapPin size={20} />
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Land Location
            </h3>

            <p className="text-sm text-white/40">
              Registered property location
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          <LocationField
            label="State"
            name="state"
            value={profile.state}
            editing={isEditing}
            onChange={handleChange}
          />

          <LocationField
            label="District"
            name="district"
            value={profile.district}
            editing={isEditing}
            onChange={handleChange}
          />

          <LocationField
            label="Village"
            name="village"
            value={profile.village}
            editing={isEditing}
            onChange={handleChange}
          />

        </div>
      </div>

      {/* Land Case Summary */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">

        <InfoCard
          icon={<FileText size={22} />}
          title="Khasra Number"
          value={profile.khasraNo || "Not provided"}
        />

        <InfoCard
          icon={<Calendar size={22} />}
          title="Registration"
          value="Land Case Registered"
        />

        <InfoCard
          icon={<ShieldCheck size={22} />}
          title="Account Type"
          value="Verified Owner"
        />

      </div>

      {/* Privacy Notice */}
      <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">

        <div className="flex gap-4">

          <ShieldCheck className="mt-1 shrink-0 text-blue-400" />

          <div>
            <h3 className="font-semibold">
              Your information is protected
            </h3>

            <p className="mt-1 text-sm leading-6 text-white/50">
              BhoomiSetu protects your personal and land-related
              information using secure data handling practices.
              Your information is used only for land acquisition
              and related government services.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};


/* ---------------- Profile Field ---------------- */

const ProfileField = ({
  label,
  name,
  value,
  icon,
  editing,
  onChange,
}) => {
  return (
    <div>
      <label className=" scroll-zoom mb-2 block text-sm text-white/50">
        {label}
      </label>

      {editing ? (
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
            {icon}
          </span>

          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="w-full rounded-xl border border-white/10 bg-slate-950 py-3 pl-10 pr-4 text-white outline-none transition focus:border-blue-500"
          />
        </div>
      ) : (
        <div className=" scroll-zoom flex min-h-[48px] items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4">
          <span className="text-blue-400">
            {icon}
          </span>

          <span className="text-white/90">
            {value || "Not provided"}
          </span>
        </div>
      )}
    </div>
  );
};


/* ---------------- Location Field ---------------- */

const LocationField = ({
  label,
  name,
  value,
  editing,
  onChange,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/50">
        {label}
      </label>

      {editing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
        />
      ) : (
        <div className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
          {value || "Not provided"}
        </div>
      )}
    </div>
  );
};


/* ---------------- Security Row ---------------- */

const SecurityRow = ({ title, value, green }) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-4">

      <span className="text-sm text-white/60">
        {title}
      </span>

      <span
        className={`flex items-center gap-1 text-sm ${
          green ? "text-green-400" : "text-white"
        }`}
      >
        <CheckCircle size={15} />
        {value}
      </span>

    </div>
  );
};


/* ---------------- Info Card ---------------- */

const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
          {icon}
        </div>

        <div>
          <p className="text-sm text-white/40">
            {title}
          </p>

          <p className="mt-1 font-semibold">
            {value}
          </p>
        </div>

      </div>

    </div>
  );
};

export default Profile;