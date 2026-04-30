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
      window.location.replace("https://app.ipos247.com/contactless/#/be001ba42ae6b51b4131ad0a08404f86b3eff7cfd1661741b6bc07d00c2f5048");
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  return <Spinner />;
}
