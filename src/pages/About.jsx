function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Step Counter App
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We are committed to helping you achieve your fitness goals through effective step tracking. 
              Our mission is to provide an intuitive and powerful application that makes it easy to monitor 
              your daily activity, set achievable goals, and maintain a healthy lifestyle through regular movement.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Real-time step counting with accurate tracking engine</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Customizable daily and weekly step goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Comprehensive activity dashboard with detailed analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Smart notifications and reminders to keep you motivated</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Integration with popular health platforms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
