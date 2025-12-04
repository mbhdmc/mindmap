import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Us
        </h1>
        
        <div className="prose prose-lg mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              For over 15 years, we've been providing professional carpet cleaning services to homes and businesses throughout the region. What started as a small family business has grown into a trusted name in the carpet cleaning industry.
            </p>
            <p className="text-gray-700">
              Our commitment to quality, customer satisfaction, and using the latest cleaning technology has made us the go-to choice for thousands of satisfied customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional carpet cleaning services that exceed customer expectations while maintaining the highest standards of professionalism and environmental responsibility.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Quality craftsmanship</li>
                <li>Customer satisfaction</li>
                <li>Environmental stewardship</li>
                <li>Integrity and honesty</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">✓ Experienced Professionals</h3>
                <p className="text-blue-100">Certified technicians with years of experience</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">✓ Advanced Equipment</h3>
                <p className="text-blue-100">State-of-the-art cleaning technology</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">✓ 100% Satisfaction Guarantee</h3>
                <p className="text-blue-100">We're not happy unless you're happy</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">✓ Eco-Friendly Solutions</h3>
                <p className="text-blue-100">Safe for your family and the environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
