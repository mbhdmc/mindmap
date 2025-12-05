function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Our Yoga Studio
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Find your inner peace and balance through the practice of yoga
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Mind</h3>
            <p className="text-gray-600">Cultivate mindfulness and mental clarity</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Body</h3>
            <p className="text-gray-600">Strengthen and flex your physical form</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Spirit</h3>
            <p className="text-gray-600">Connect with your inner self</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
