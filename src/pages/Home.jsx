import { Link } from 'react-router-dom';
import { StepCounter } from '../features/step-counter';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Step Counter App
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track your daily steps, achieve your fitness goals, and stay healthy with our intuitive step counting application.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/about"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
            <Link
              to="/services"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              View Features
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <StepCounter />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">👟</div>
            <h3 className="text-xl font-semibold mb-2">Step Tracking</h3>
            <p className="text-gray-600">
              Accurately track your daily steps with our advanced counting engine
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Goal Setting</h3>
            <p className="text-gray-600">
              Set personalized daily and weekly step goals to stay motivated
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Activity Reports</h3>
            <p className="text-gray-600">
              View detailed analytics and track your progress over time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
