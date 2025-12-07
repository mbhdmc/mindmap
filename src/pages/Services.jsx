function Services() {
  const services = [
    {
      title: "Step Counting Engine",
      description: "Advanced step tracking with real-time updates",
      features: ["Accurate step detection", "Real-time tracking", "Manual step adjustment"],
      status: "Active"
    },
    {
      title: "Activity Data Storage",
      description: "Secure storage of your fitness data",
      features: ["Local data persistence", "Historical data access", "Data export capabilities"],
      status: "Active"
    },
    {
      title: "User Profile & Goal Management",
      description: "Personalized fitness goals and preferences",
      features: ["Custom daily goals", "Weekly targets", "Profile customization"],
      status: "Active"
    },
    {
      title: "Activity Dashboard & Reporting",
      description: "Comprehensive analytics and insights",
      features: ["Visual progress tracking", "Statistical analysis", "Achievement milestones"],
      status: "Active"
    },
    {
      title: "Notification & Reminder System",
      description: "Stay motivated with smart reminders",
      features: ["Goal reminders", "Achievement notifications", "Customizable alerts"],
      status: "Active"
    },
    {
      title: "Third-Party Health Integration",
      description: "Connect with popular health platforms",
      features: ["Google Fit support", "Apple Health integration", "Fitbit connectivity"],
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Core Features
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Comprehensive features to track and improve your fitness journey
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
                <p className={`text-lg font-semibold ${service.status === 'Active' ? 'text-green-600' : 'text-orange-600'}`}>
                  {service.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
