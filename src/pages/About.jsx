function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          Our yoga studio has been serving the community for over 10 years, providing a peaceful
          sanctuary for those seeking balance and wellness.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          We believe in the transformative power of yoga and are dedicated to helping our students
          achieve their health and wellness goals through expert instruction and a supportive community.
        </p>
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To provide a welcoming space where everyone can explore the benefits of yoga,
            regardless of experience level or background.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
