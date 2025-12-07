import { useState } from 'react';

/**
 * Template Library Component
 * Browse and select from pre-built splash page templates
 */
function TemplateLibrary() {
  const [templates] = useState([
    { id: 1, name: 'Modern Landing', category: 'Business' },
    { id: 2, name: 'Product Launch', category: 'Marketing' },
    { id: 3, name: 'Event Splash', category: 'Events' },
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Template Library</h2>
      <p className="text-gray-600 mb-4">
        Choose from a collection of professionally designed templates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map(template => (
          <div key={template.id} className="border rounded-lg p-4 hover:shadow-lg transition">
            <div className="bg-gray-100 h-40 rounded mb-3 flex items-center justify-center">
              <span className="text-4xl">📄</span>
            </div>
            <h3 className="font-semibold">{template.name}</h3>
            <p className="text-sm text-gray-500">{template.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateLibrary;
