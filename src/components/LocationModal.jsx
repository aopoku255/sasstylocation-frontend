// src/LocationModal.js
import React from 'react';

const LocationModal = ({ isOpen, onRequestClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Enable Location Services</h2>
            <p>
              Please enable location services to provide your latitude and longitude.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={onRequestClose}
            >
              Enable Location
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationModal;
