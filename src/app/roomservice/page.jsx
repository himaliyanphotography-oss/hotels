"use client";

import { useEffect } from "react";

function Spinner() {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{
        width: "50px",
        height: "50px",
        border: "5px solid #ccc",
        borderTop: "5px solid #333",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function Page() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSd-Z5LpQWVawCLwiW5iQN12jx2xCGja4yi2eczuBdVVGkOO-A/viewform");
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  return <Spinner />;
}
