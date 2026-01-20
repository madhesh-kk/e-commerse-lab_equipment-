
import React from "react";
export default function Hero() {
  return (
    <section className="relative py-12 mb-8">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 opacity-60 blur-lg -z-10" />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-10 rounded-2xl backdrop-blur-xl bg-white/40 shadow-2xl border border-white/30">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 animate-fade-in-down">
            Mini Lab Equipment for Students
          </h1>
          <p className="mt-4 text-lg text-gray-800 font-medium animate-fade-in-up">
            Affordable microscopes, beakers, starter kits and more — ideal for schools, projects and home labs.
          </p>
          <div className="mt-6">
            <a href="#products" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200 animate-bounce">
              Shop Now
            </a>
          </div>
        </div>
        <div className="w-64 flex-shrink-0 relative animate-float">
          <img
            src="data:image/png;base64,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"
            alt="lab"
            className="rounded-2xl shadow-2xl border-4 border-white/60 object-cover w-full h-64"
            style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
          />
        </div>
      </div>
      {/* Animations */}
      <style>{`
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease-out;
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
      `}</style>
    </section>
  );
}
