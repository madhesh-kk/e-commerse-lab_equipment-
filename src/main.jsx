import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Check localStorage for persisted user session
const savedUser = JSON.parse(localStorage.getItem("user"));

function Root() {
  const [user, setUser] = useState(savedUser);

  // Handle logout by removing user, clearing storage, and redirecting
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");

    // Force redirect to login page or root to reset UI
    window.location.href = "/login"; // Or '/' depending on your routes
  };

  return (
    <App
      user={user}
      setUser={setUser}
      onLogout={handleLogout}
    />
  );
}

createRoot(document.getElementById("root")).render(<Root />);
