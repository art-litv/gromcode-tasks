import React, { useState, useEffect } from "react";

export default function ConnectionStatus() {
  const [status, setStatus] = useState("online");
  const offlineClass = "status_offline";

  useEffect(() => {
    window.addEventListener("online", () => setStatus("online"));
    window.addEventListener("offline", () => setStatus("offline"));

    return () => {
      window.removeEventListener("online", () => setStatus("online"));
      window.removeEventListener("offline", () => setStatus("offline"));
    };
  }, []);

  return (
    <div className={`status ${status === "offline" ? offlineClass : ""}`}>
      {status}
    </div>
  );
}
