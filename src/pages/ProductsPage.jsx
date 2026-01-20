
import React, { useState } from "react";
import products from "../data/products";
import PackageCard from "../components/PackageCard";
import ProductDetailModal from "../components/ProductDetailModal";

export default function ProductsPage({ addToCart }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const handleView = (product) => {
    setModalProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">All Products</h2>
        <span className="text-lg font-semibold text-gray-700">Showing {products.length} products</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div key={p.id} className="flex justify-center">
            <PackageCard product={p} addToCart={addToCart} onView={handleView} />
          </div>
        ))}
      </div>
      <ProductDetailModal
        open={modalOpen}
        product={modalProduct}
        onClose={() => setModalOpen(false)}
        onAdd={addToCart}
      />
    </div>
  );
}
