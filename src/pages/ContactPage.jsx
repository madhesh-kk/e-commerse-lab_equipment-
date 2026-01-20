import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Have questions, need support, or want to collaborate? We're here to help! Reach out to Mini Lab Store using the details below, or fill out our contact form and we'll get back to you as soon as possible.
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-blue-700">Contact Information</h2>
        <ul className="text-gray-700">
          <li><span className="font-semibold">Email:</span> support@minilabstore.com</li>
          <li><span className="font-semibold">Phone:</span> +91 98765 43210</li>
          <li><span className="font-semibold">Address:</span> 123 Science Avenue, Lab City, India</li>
        </ul>
      </div>
      <form className="bg-white/80 p-6 rounded-xl shadow-md border border-blue-100">
        <h3 className="text-lg font-bold mb-4 text-blue-700">Send us a message</h3>
        <input type="text" placeholder="Your Name" className="w-full mb-3 p-3 rounded border border-blue-200" />
        <input type="email" placeholder="Your Email" className="w-full mb-3 p-3 rounded border border-blue-200" />
        <textarea placeholder="Your Message" className="w-full mb-3 p-3 rounded border border-blue-200" rows={4}></textarea>
        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-200">Send Message</button>
      </form>
    </div>
  );
}
