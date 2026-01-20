import React, { useState, useRef, useEffect } from "react";

export default function Header({ onNavigate, cartCount = 0, onCartClick, user, onLogout }) {
  const initial = user && user.email ? user.email[0].toUpperCase() : "U";
  const [showDropdown, setShowDropdown] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogoutClick = () => {
    setShowDropdown(false);
    if (onLogout) onLogout();
  };


  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-md bg-white/30 rounded-xl border border-white/20">
        <div className="flex items-center gap-8">
          <button
            onClick={() => onNavigate("home")}
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 tracking-tight transition-transform duration-300 hover:scale-105"
          >
            Mini Lab Store
          </button>
          <nav className="flex gap-4 ml-8">
            <button onClick={() => onNavigate("home")} className="px-3 py-2 rounded-lg bg-white/70 text-blue-700 font-semibold shadow hover:bg-blue-100 transition-colors duration-200">Home</button>
            <button onClick={() => onNavigate("products")} className="px-3 py-2 rounded-lg bg-white/70 text-blue-700 font-semibold shadow hover:bg-blue-100 transition-colors duration-200">Products</button>
            <button onClick={() => onNavigate("about")} className="px-3 py-2 rounded-lg bg-white/70 text-purple-700 font-semibold shadow hover:bg-purple-100 transition-colors duration-200">About</button>
            <button onClick={() => onNavigate("contact")} className="px-3 py-2 rounded-lg bg-white/70 text-pink-700 font-semibold shadow hover:bg-pink-100 transition-colors duration-200">Contact</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <div ref={profileRef} className="relative flex items-center gap-2">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white/40 ring-2 ring-purple-300 hover:scale-110 transition-transform duration-200 focus:outline-none"
                aria-label="Profile"
                tabIndex={0}
              >
                {initial}
              </button>
              <span className="text-sm font-medium text-gray-800 bg-white/60 px-2 py-1 rounded-lg shadow">{user.email}</span>

              {showDropdown && (
                <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[120px] z-20 animate-fade-in">
                  <button
                    onClick={handleLogoutClick}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50 rounded transition-colors duration-150"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => onNavigate("login")}
              className="px-4 py-2 rounded-lg bg-white/70 text-blue-700 font-semibold shadow hover:bg-blue-100 transition-colors duration-200"
            >
              Login
            </button>
          )}

          <div className="relative">
            <button
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2"
              onClick={onCartClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.7L21 13M7 13V6h13" />
              </svg>
              Cart <span className="ml-1 bg-white/80 text-blue-700 rounded px-2 py-0.5 text-xs font-bold">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
