import { useState } from 'react';

/**
 * Publishing & Domain Management Component
 * Manage publishing settings and custom domain configuration
 */
function PublishingManager() {
  const [publishSettings] = useState({
    status: 'draft',
    domain: 'example.splashpage.com',
    customDomain: '',
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Publishing & Domain Management</h2>
      <p className="text-gray-600 mb-4">
        Configure publishing settings and manage custom domains.
      </p>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Publishing Status</h3>
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded text-sm ${
              publishSettings.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
            }`}>
              {publishSettings.status.toUpperCase()}
            </span>
            <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Publish Now
            </button>
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Domain Settings</h3>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium mb-1">Default Domain</label>
              <input 
                type="text" 
                value={publishSettings.domain} 
                readOnly 
                className="w-full border rounded p-2 bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Custom Domain</label>
              <input 
                type="text" 
                placeholder="www.yourdomain.com" 
                className="w-full border rounded p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishingManager;
