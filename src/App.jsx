import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import PackagesSection from "./components/PackagesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import SuccessModal from "./components/SuccessModal";
import CartCheckoutFlow from "./components/CartCheckoutFlow";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import ProductDetailModal from "./components/ProductDetailModal";

export default function App() {
  const [view, setView] = useState("home"); // home | products | login | cart | register
  const [cart, setCart] = useState([]);
  const [success, setSuccess] = useState(null);
  const [user, setUser] = useState(null);
  const [checkoutActive, setCheckoutActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const addToCart = (p) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === p.id);
      if (existing) {
        return prev.map((item) =>
          item.id === p.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const handleLogout = () => {
    setUser(null);
    setView("home");
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.qty * Math.round(item.price * (1 - item.discountPercent / 100)),
    0
  );

  const handlePaymentSuccess = (res) => {
    setSuccess(res);
    setCart([]);
    setCheckoutActive(false);
    setView("home");
  };

  const handleRequireLogin = () => {
    setView("login");
  };

  // Modern Product Grid (Products view only)
  function ProductsView() {
    const [search, setSearch] = useState("");
    const filteredProducts = products.filter(
      (product) =>
        (product.title || product.name)
          .toLowerCase()
          .includes(search.toLowerCase())
    );
    return (
      <div>
        <h2 className="text-2xl font-extrabold mb-8 text-center">All Products</h2>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-2 rounded-xl border border-blue-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={addToCart}
              onView={() => {
                setModalProduct(product);
                setModalOpen(true);
              }}
            />
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

  // Cart view section
  function CartView({ user, cart, updateQty, onRequireLogin, setShowPayment }) {
    const total = cart.reduce(
      (sum, item) =>
        sum + item.qty * Math.round(item.price * (1 - item.discountPercent / 100)),
      0
    );

    return (
      <div className="max-w-3xl mx-auto p-6 bg-white/70 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center py-4">
                  <img src={item.image} alt={item.title || item.name} className="w-20 h-20 object-contain rounded-xl shadow mr-4" />
                  <div className="flex-1">
                    <div className="font-bold text-lg">{item.title || item.name}</div>
                    <div className="text-gray-600">Qty: {item.qty}</div>
                    <div className="text-indigo-700 font-semibold">₹{Math.round(item.price * (1 - item.discountPercent / 100))} each</div>
                  </div>
                  <div className="flex flex-col items-center ml-4">
                    <button onClick={() => updateQty(item.id, Math.max(item.qty - 1, 0))} className="bg-gray-200 px-2 py-1 rounded mb-1">-</button>
                    <span className="font-bold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="bg-gray-200 px-2 py-1 rounded mt-1">+</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between mt-6">
              <div className="text-xl font-bold">Total: ₹{total}</div>
              <button
                className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                onClick={setShowPayment}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-pink-50 to-teal-200">
      <Header
        onNavigate={setView}
        cartCount={cart.reduce((s, p) => s + p.qty, 0)}
        user={user}
        onCartClick={() => {
          setView("cart");
          setCheckoutActive(false);
        }}
        onLogout={handleLogout}
      />
      <main className="container mx-auto p-8 flex-1">
        {view === "home" && (
          <>
            <Hero />
            <PackagesSection addToCart={addToCart} />
          </>
        )}
        {view === "about" && <AboutSection />}
        {view === "contact" && <ContactSection />}
        {view === "products" && <ProductsView />}
        {view === "login" && (
          <LoginPage
            onBack={() => setView("home")}
            onRegisterNavigate={() => setView("register")}
            onLoginSuccess={(userInfo) => {
              setUser(userInfo);
              setView("home");
            }}
          />
        )}
        {view === "register" && (
          <RegisterPage
            onBack={() => setView("login")}
            onSuccess={() => setView("login")}
          />
        )}
        {view === "cart" && !checkoutActive && (
          <CartView
            user={user}
            cart={cart}
            updateQty={updateQty}
            onRequireLogin={handleRequireLogin}
            setShowPayment={() => {
              if (!user) {
                handleRequireLogin();
              } else {
                setCheckoutActive(true);
              }
            }}
          />
        )}
        {view === "cart" && checkoutActive && user && (
          <CartCheckoutFlow
            user={user}
            cart={cart}
            amount={total}
            onPaymentSuccess={handlePaymentSuccess}
            onRequireLogin={handleRequireLogin}
          />
        )}
        {view === "cart" && checkoutActive && !user && (
          <LoginPage
            onLoginSuccess={(userInfo) => {
              setUser(userInfo);
              setView("cart");
              setCheckoutActive(true);
            }}
            onBack={() => setView("cart")}
          />
        )}
      </main>
      <Footer />
      <SuccessModal open={!!success} onClose={() => setSuccess(null)} data={success} />
    </div>
  );
}
