
import React, { useState } from "react";
import products from "../data/products";
import PackageCard from "./PackageCard";
import ProductDetailModal from "./ProductDetailModal";

export default function PackagesSection({ addToCart }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [search, setSearch] = useState("");

  const handleView = (product) => {
    setModalProduct(product);
    setModalOpen(true);
  };

  const filteredProducts = products.filter(
    (product) =>
      (product.title || product.name)
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="mb-6">
      <h3 className="text-xl font-semibold mb-4">Popular Products</h3>
      <div className="w-full mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-xl border border-blue-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((p) => (
          <PackageCard key={p.id} product={p} addToCart={addToCart} onView={handleView} />
        ))}
      </div>
      <ProductDetailModal
        open={modalOpen}
        product={modalProduct}
        onClose={() => setModalOpen(false)}
        onAdd={addToCart}
      />
    </section>
  );
}
