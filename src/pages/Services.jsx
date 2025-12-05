function Services() {
  const services = [
    {
      title: "Daily Dog Walking",
      description: "Regular walks to keep your dog active and happy",
      features: ["30-60 minute walks", "Flexible scheduling", "GPS tracked routes"],
      price: "Starting at $25/walk"
    },
    {
      title: "Pet Sitting",
      description: "In-home care while you're away",
      features: ["Feeding and water", "Playtime and exercise", "Medication administration"],
      price: "Starting at $45/visit"
    },
    {
      title: "Overnight Care",
      description: "24-hour supervision and care",
      features: ["Full day and night care", "Your home or ours", "Regular updates"],
      price: "Starting at $85/night"
    },
    {
      title: "House Sitting",
      description: "Complete home and pet care service",
      features: ["Pet care included", "Home security", "Plant watering"],
      price: "Starting at $100/night"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Professional pet care services tailored to your needs
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
