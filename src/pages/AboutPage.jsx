import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">About Mini Lab Store</h1>
      <p className="text-lg text-gray-700 mb-4">
        Mini Lab Store is dedicated to making science accessible and exciting for students, hobbyists, and educators. We offer a curated selection of lab equipment, starter kits, and educational tools at affordable prices. Our mission is to empower the next generation of scientists and innovators by providing high-quality products and exceptional service.
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Wide range of products for physics, chemistry, and biology labs</li>
        <li>Trusted by schools, colleges, and home learners</li>
        <li>Fast shipping and secure payment options</li>
        <li>Expert support and guidance for your science projects</li>
      </ul>
      <p className="text-md text-gray-600">
        Whether you're setting up a classroom, working on a personal experiment, or just exploring the wonders of science, Mini Lab Store is your partner in discovery.
      </p>
    </div>
  );
}
