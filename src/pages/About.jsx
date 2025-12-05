function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About This Project
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <p className="text-gray-700">
              This is a standard React application scaffold with routing and basic pages.
              It demonstrates a clean project structure with React Router for navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
