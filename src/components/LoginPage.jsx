import React, { useState } from "react";

export default function LoginPage({ onBack, onRegisterNavigate, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Simple email format validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      // API call to login endpoint
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Login failed");
      }

      const data = await response.json();
      alert("Login successful");

      // Store user data in localStorage for persistent login sessions
      localStorage.setItem("user", JSON.stringify(data));

      // Inform parent component about successful login
      if (onLoginSuccess) onLoginSuccess(data);
    } catch (err) {
      alert("Login error: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/30 mt-10 animate-fade-in-down">
      <button onClick={onBack} className="text-sm text-blue-600 mb-2 hover:underline">
        ← Back
      </button>
      <h2 className="text-2xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">Login / Signup</h2>
      <input
        placeholder="Email"
        className="w-full border border-blue-200 p-3 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        className="w-full border border-blue-200 p-3 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-200 mb-2"
      >
        Login
      </button>
      <button
        onClick={onRegisterNavigate}
        className="w-full bg-white/80 text-blue-600 py-3 rounded-xl border border-blue-200 font-semibold shadow hover:bg-blue-50 transition-colors duration-200"
      >
        Don't have an account? Register
      </button>
      <style>{`
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
