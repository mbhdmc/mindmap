function Classes() {
  const classes = [
    {
      name: "Hatha Yoga",
      description: "Traditional yoga focusing on physical postures and breathing",
      level: "Beginner",
      duration: "60 min"
    },
    {
      name: "Vinyasa Flow",
      description: "Dynamic flowing sequences synchronized with breath",
      level: "Intermediate",
      duration: "75 min"
    },
    {
      name: "Restorative Yoga",
      description: "Gentle practice focused on relaxation and recovery",
      level: "All Levels",
      duration: "60 min"
    },
    {
      name: "Power Yoga",
      description: "Vigorous fitness-based approach to vinyasa-style yoga",
      level: "Advanced",
      duration: "90 min"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Classes</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore our variety of yoga classes designed for all experience levels
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-2">{cls.name}</h3>
            <p className="text-gray-600 mb-4">{cls.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span className="font-medium">Level: {cls.level}</span>
              <span>{cls.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
