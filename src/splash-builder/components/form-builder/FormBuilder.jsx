import { useState } from 'react';

/**
 * Form Builder Component
 * Create and customize forms for lead capture and user input
 */
function FormBuilder() {
  const [fields] = useState([
    { id: 1, type: 'text', label: 'Full Name', required: true },
    { id: 2, type: 'email', label: 'Email Address', required: true },
    { id: 3, type: 'textarea', label: 'Message', required: false },
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Form Builder</h2>
      <p className="text-gray-600 mb-4">
        Build custom forms for capturing leads and collecting user information.
      </p>
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-3">Form Preview</h3>
        <div className="space-y-4">
          {fields.map(field => (
            <div key={field.id}>
              <label className="block text-sm font-medium mb-1">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea className="w-full border rounded p-2" rows="3"></textarea>
              ) : (
                <input type={field.type} className="w-full border rounded p-2" />
              )}
            </div>
          ))}
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormBuilder;
