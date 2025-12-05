import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Professional Dog Sitting Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted partner in pet care. We provide loving, reliable care for your furry friends while you're away.
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
            <div className="text-4xl mb-4">🐕</div>
            <h3 className="text-xl font-semibold mb-2">Experienced Care</h3>
            <p className="text-gray-600">
              Years of experience caring for dogs of all sizes and breeds
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">Loving Attention</h3>
            <p className="text-gray-600">
              Your pets receive personalized care and plenty of love
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Daily Updates</h3>
            <p className="text-gray-600">
              Regular photo and video updates so you stay connected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
