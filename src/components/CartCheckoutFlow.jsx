import React, { useState } from "react";
import AddressForm from "./AddressForm";
import PaymentPage from "./PaymentPage";

export default function CartCheckoutFlow({ user, cart, amount, onPaymentSuccess, onRequireLogin }) {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState(null);

  // If user not logged in, show login prompt and block checkout
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-xl bg-white/60 backdrop-blur-lg border border-white/30 max-w-md mx-auto mt-10 animate-fade-in-down">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 mb-4">Please login to place an order</h2>
        <button
          onClick={onRequireLogin}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Login
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

  const handleNext = (addr) => {
    setAddress(addr);
    setStep(2);
  };

  const handlePaymentSuccess = async (paymentResponse) => {
    try {
      const payload = {
        address,
        paymentId: paymentResponse.razorpay_payment_id,
        orderId: paymentResponse.razorpay_order_id,
        signature: paymentResponse.razorpay_signature,
        amount,
        cart,
      };

      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to save order data");
      }

      onPaymentSuccess(paymentResponse);
    } catch (err) {
      alert("Failed to save order data: " + err.message);
      console.error(err);
    }
  };

  if (step === 1) {
    return (
      <div className="max-w-xl mx-auto mt-8 p-8 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-lg border border-white/30 animate-fade-in-up">
        <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">Delivery Address</h2>
        <AddressForm onNext={handleNext} />
        <style>{`
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  if (step === 2) {
    if (!address) {
      return <p className="text-red-600 font-bold">Error: Address details missing. Please restart checkout.</p>;
    }
    return (
      <div className="max-w-xl mx-auto mt-8 p-8 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-lg border border-white/30 animate-fade-in-up">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Delivery Details</h3>
        <div className="mb-2"><b>Name:</b> {address.name}</div>
        <div className="mb-2"><b>Phone:</b> {address.phone}</div>
        <div className="mb-2"><b>Street:</b> {address.street}</div>
        <div className="mb-2"><b>City:</b> {address.city}</div>
        <div className="mb-2"><b>Pin Code:</b> {address.pincode}</div>
        <div className="mt-8">
          <PaymentPage address={address} amount={amount} onSuccess={handlePaymentSuccess} />
        </div>
        <style>{`
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return null;
}
