
import React from "react";
export default function SuccessModal({open, onClose, data}){
  if(!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in-down">
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 rounded-2xl shadow-xl max-w-md w-full border border-white/30 backdrop-blur-lg">
        <h3 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">Payment Successful</h3>
        <p className="mb-6 text-lg font-bold text-blue-700">Payment ID: {data?.razorpay_payment_id || "—"}</p>
        <button onClick={onClose} className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-200">Close</button>
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
    </div>
  );
}
