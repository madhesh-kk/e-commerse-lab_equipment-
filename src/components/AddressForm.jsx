import React, { useState } from "react";

export default function AddressForm({ onNext }) {
  const [address, setAddress] = useState({
    name: "", phone: "", street: "", city: "", pincode: ""
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: add more validation here
    if (
      !address.name || !address.phone || !address.street ||
      !address.city || !address.pincode
    ) {
      alert("Please fill all fields");
      return;
    }
    onNext(address);
  };

  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
      <h3 className="text-xl font-bold mb-4">Delivery Address</h3>
      <input name="name" placeholder="Full Name" className="w-full mb-2 p-2 border rounded"
        value={address.name} onChange={handleChange} required />
      <input name="phone" placeholder="Phone Number" className="w-full mb-2 p-2 border rounded"
        value={address.phone} onChange={handleChange} required />
      <input name="street" placeholder="Street Address" className="w-full mb-2 p-2 border rounded"
        value={address.street} onChange={handleChange} required />
      <input name="city" placeholder="City" className="w-full mb-2 p-2 border rounded"
        value={address.city} onChange={handleChange} required />
      <input name="pincode" placeholder="Pin Code" className="w-full mb-4 p-2 border rounded"
        value={address.pincode} onChange={handleChange} required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Continue to Payment</button>
    </form>
  );
}
