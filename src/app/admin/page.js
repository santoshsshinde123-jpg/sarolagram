"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-white to-green-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Logo & Heading */}
        <div className="text-center mb-8">

          <div className="text-6xl mb-4">🔐</div>

          <h1 className="text-4xl font-bold text-blue-700">
            Admin Login
          </h1>

          <p className="text-gray-600 mt-2">
            ग्रामपंचायत सारोळा सोमवंशी
          </p>

        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Admin Panel
          </h2>

          {/* Username */}
          <div className="mb-5">

            <label className="block text-gray-700 font-medium mb-2">
              👤 Username
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          {/* Password */}
          <div className="mb-5">

            <label className="block text-gray-700 font-medium mb-2">
              🔑 Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="
                  w-full
                  px-4
                  py-3
                  border
                  border-gray-300
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              >
                {showPassword ? "🙈" : "👁️"}
              </button>

            </div>

          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-6">

            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember Me
            </label>

            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>

          </div>

          {/* Login Button */}
          <button
            className="
              w-full
              bg-linear-to-r
              from-blue-600
              to-indigo-600
              text-white
              py-3
              rounded-xl
              font-semibold
              text-lg
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
            "
          >
            🔐 Login
          </button>

          {/* Security Notice */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">

            <p className="text-sm text-gray-700 text-center">
              🛡️ Authorized Gram Panchayat Administrators Only
            </p>

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2026 Gram Panchayat Sarola Somvanshi
        </p>

      </div>

    </div>
  );
}
