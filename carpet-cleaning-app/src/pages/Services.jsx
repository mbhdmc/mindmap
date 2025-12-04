import React from 'react';

function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Residential Carpet Cleaning</h3>
            <p className="text-gray-600 mb-4">
              Professional cleaning for homes of all sizes. We handle everything from single rooms to entire houses.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Living room carpets</li>
              <li>Bedroom carpets</li>
              <li>Stairway cleaning</li>
              <li>Area rugs</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Commercial Carpet Cleaning</h3>
            <p className="text-gray-600 mb-4">
              Keep your business looking professional with our commercial cleaning services.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Office buildings</li>
              <li>Retail spaces</li>
              <li>Hotels and hospitality</li>
              <li>Medical facilities</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Stain Removal</h3>
            <p className="text-gray-600 mb-4">
              Specialized treatment for tough stains and spots that won't come out with regular cleaning.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Pet stains and odors</li>
              <li>Wine and beverage spills</li>
              <li>Grease and oil</li>
              <li>Ink and dye stains</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Upholstery Cleaning</h3>
            <p className="text-gray-600 mb-4">
              Extend the life of your furniture with professional upholstery cleaning services.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Sofas and couches</li>
              <li>Dining chairs</li>
              <li>Mattress cleaning</li>
              <li>Curtains and drapes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
