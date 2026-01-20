import React, { useState } from "react";

export default function RegisterPage({ onBack, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Registration failed");
      }
      alert("Registration successful! You can now login.");
      if (onSuccess) onSuccess();
    } catch (err) {
      alert("Registration error: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/30 mt-10 animate-fade-in-down">
      <button onClick={onBack} className="text-sm text-blue-600 mb-2 hover:underline">
        ← Back
      </button>
      <h2 className="text-2xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">Register</h2>
      <form onSubmit={handleRegister}>
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
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-200 mb-2"
        >
          Register
        </button>
      </form>
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
