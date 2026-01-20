import React from "react";

export default function ProductDetailModal({ open, product, onClose, onAdd }) {
  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 relative">
        <button className="absolute right-4 top-4 text-gray-500 hover:text-red-500" onClick={onClose}>✕</button>
        <img src={product.image} alt={product.name} className="w-full h-56 object-contain rounded-xl mb-4" />
        <h2 className="font-extrabold text-2xl text-indigo-800 mb-2">{product.name}</h2>
        <div className="mb-2 text-gray-700">{product.description}</div>
        <div className="mb-2">
          <span className="font-bold text-xl text-teal-600">
            ₹{Math.round(product.price * (1 - product.discountPercent / 100))}
          </span>
        </div>
        {product.discountPercent > 0 &&
          <div className="mb-2 text-green-600 font-semibold">
            {product.discountPercent}% Discount
          </div>
        }
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><b>Category:</b> {product.category || "Lab Equipment"}</li>
          <li><b>Stock:</b> {product.stock || "Available"}</li>
        </ul>
        <button
          className="bg-indigo-600 text-white px-5 py-2 rounded-full mt-2 hover:bg-indigo-700"
          onClick={() => onAdd(product)}
        >Add to Cart</button>
      </div>
    </div>
  );
}
