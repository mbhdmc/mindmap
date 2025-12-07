function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Us
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We are dedicated to fostering a vibrant community of readers and book lovers. 
              Our mission is to create a welcoming space where people can discover great books, 
              share their thoughts, and connect with fellow readers who share their passion for literature.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Thoughtfully curated book selections across all genres</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Monthly meetings and engaging discussions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Exclusive author events and Q&A sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Welcoming community for readers of all levels</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Book recommendations tailored to your interests</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
