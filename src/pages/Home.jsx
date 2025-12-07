import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Book Club
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of readers. Discover new books, share insights, and connect with fellow book lovers.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-2">Diverse Selection</h3>
            <p className="text-gray-600">
              Explore a wide range of genres and discover your next favorite book
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">Engaging Discussions</h3>
            <p className="text-gray-600">
              Join thoughtful conversations and share perspectives with fellow readers
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-2">Community Events</h3>
            <p className="text-gray-600">
              Participate in author talks, reading events, and social gatherings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
