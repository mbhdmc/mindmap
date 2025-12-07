function Services() {
  const services = [
    {
      title: "Monthly Meetings",
      description: "Regular book discussions and community gatherings",
      features: ["In-person and virtual options", "Facilitated discussions", "Book selection voting"],
      price: "Free for members"
    },
    {
      title: "Book Selection Service",
      description: "Personalized book recommendations",
      features: ["Tailored to your preferences", "Genre exploration", "New release updates"],
      price: "Included with membership"
    },
    {
      title: "Author Events",
      description: "Exclusive access to author talks and Q&A sessions",
      features: ["Meet your favorite authors", "Book signings", "Early access to new releases"],
      price: "Special member pricing"
    },
    {
      title: "Reading Groups",
      description: "Small group discussions for deeper engagement",
      features: ["Genre-specific groups", "Flexible meeting times", "Online forums"],
      price: "Included with membership"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Membership benefits and club activities for book lovers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="border-t pt-4 mt-4">
                <p className="text-lg font-semibold text-blue-600">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
