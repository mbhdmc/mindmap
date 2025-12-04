import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Professional Carpet Cleaning Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your home with our expert carpet cleaning solutions
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
            Get a Free Quote
          </button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-4xl mb-4">🧹</div>
            <h3 className="text-xl font-bold mb-2">Deep Cleaning</h3>
            <p className="text-gray-600">
              Remove deep-seated dirt and allergens with our advanced cleaning technology
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Fast Drying</h3>
            <p className="text-gray-600">
              Quick-dry technology ensures your carpets are ready to use in no time
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
            <p className="text-gray-600">
              Safe, non-toxic cleaning solutions that are gentle on your family and pets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
