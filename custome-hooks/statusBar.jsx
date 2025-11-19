"use client";

import { useState, useEffect } from "react";

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // ✅ Functions to handle status changes
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    // 🧩 Add event listeners when component mounts
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // 🧹 Cleanup: remove event listeners when component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // 🟢 Show the status on screen
  return (
    <div
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        backgroundColor: isOnline ? "#d4edda" : "#f8d7da",
        color: isOnline ? "#155724" : "#721c24",
        textAlign: "center",
        fontWeight: "bold",
        width: "fit-content",
        margin: "20px auto",
      }}
    >
      {isOnline ? "✅ Online" : "❌ Disconnected"}
    </div>
  );
}
