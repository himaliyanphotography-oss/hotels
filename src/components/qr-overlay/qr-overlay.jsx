// components/QROverlay.jsx
import React from "react";

const QROverlay = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-700/40 rounded-xl shadow-lg p-6 relative text-center">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4">Scan to Review Us</h2>
        <img
          src="/review-qr.jpg"
          alt="QR Code"
          className="w-48 h-48 mx-auto mb-4 border rounded-lg shadow"
        />
        <a
          href="/review-qr.jpg"
          download="Spellmount Resort Review"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Download QR Code
        </a>
      </div>
    </div>
  );
};
export default QROverlay;
