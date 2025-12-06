import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              🧘 Yoga Studio CRM
            </Link>
            <div className="flex gap-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Yoga Studio CRM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
