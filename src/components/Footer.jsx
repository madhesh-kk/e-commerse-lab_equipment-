
import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 text-center rounded-t-2xl shadow-lg mt-10 backdrop-blur-md border-t border-white/30">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-white/90">
        <span className="font-bold text-lg tracking-wide">© Mini Lab Store — Demo</span>
        <nav className="mt-2 md:mt-0 flex gap-4">
          <a href="#" className="hover:text-blue-200 transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-purple-200 transition-colors duration-200">Products</a>
          <a href="#" className="hover:text-pink-200 transition-colors duration-200">About</a>
          <a href="#" className="hover:text-pink-200 transition-colors duration-200">Contact</a>
          <a href="#" className="hover:text-pink-200 transition-colors duration-200">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}
