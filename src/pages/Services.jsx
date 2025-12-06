function Services() {
  const services = [
    {
      title: "Member Management",
      description: "Complete customer relationship management",
      features: ["Member profiles and history", "Subscription tracking", "Automated renewals"],
      price: "Core Feature"
    },
    {
      title: "Class Scheduling",
      description: "Manage classes, instructors, and bookings",
      features: ["Class calendar", "Instructor assignments", "Attendance tracking"],
      price: "Core Feature"
    },
    {
      title: "Payment Processing",
      description: "Handle payments and billing seamlessly",
      features: ["Payment integration", "Invoicing", "Financial reports"],
      price: "Core Feature"
    },
    {
      title: "Analytics Dashboard",
      description: "Track studio performance and growth",
      features: ["Revenue insights", "Member retention metrics", "Class popularity analysis"],
      price: "Core Feature"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Comprehensive features to manage your yoga studio efficiently
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
