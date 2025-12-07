import { useState } from 'react';

/**
 * Integration Manager Component
 * Connect with third-party services and APIs
 */
function IntegrationManager() {
  const [integrations] = useState([
    { id: 1, name: 'Mailchimp', status: 'connected', icon: '📧' },
    { id: 2, name: 'Google Analytics', status: 'connected', icon: '📊' },
    { id: 3, name: 'Stripe', status: 'disconnected', icon: '💳' },
    { id: 4, name: 'Zapier', status: 'disconnected', icon: '⚡' },
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Integration Manager</h2>
      <p className="text-gray-600 mb-4">
        Connect your splash pages with your favorite tools and services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {integrations.map(integration => (
          <div key={integration.id} className="border rounded-lg p-4 hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{integration.icon}</span>
                <div>
                  <h3 className="font-semibold">{integration.name}</h3>
                  <span className={`text-sm ${
                    integration.status === 'connected' ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {integration.status === 'connected' ? '✓ Connected' : 'Not connected'}
                  </span>
                </div>
              </div>
              <button className={`px-4 py-2 rounded text-sm font-medium ${
                integration.status === 'connected' 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntegrationManager;
