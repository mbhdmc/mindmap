import { useState } from 'react';

/**
 * Responsive Design Tools Component
 * Preview and optimize splash pages across different devices
 */
function ResponsiveTools() {
  const [activeDevice, setActiveDevice] = useState('desktop');

  const devices = [
    { id: 'desktop', name: 'Desktop', icon: '🖥️', width: '100%' },
    { id: 'tablet', name: 'Tablet', icon: '📱', width: '768px' },
    { id: 'mobile', name: 'Mobile', icon: '📱', width: '375px' },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Responsive Design Tools</h2>
      <p className="text-gray-600 mb-4">
        Preview and optimize your splash page for all screen sizes.
      </p>
      <div className="border rounded-lg p-4">
        <div className="flex gap-2 mb-4">
          {devices.map(device => (
            <button
              key={device.id}
              onClick={() => setActiveDevice(device.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded ${
                activeDevice === device.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <span>{device.icon}</span>
              <span>{device.name}</span>
            </button>
          ))}
        </div>
        <div className="bg-gray-50 rounded p-8 min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {devices.find(d => d.id === activeDevice)?.icon}
            </div>
            <p className="text-gray-600">
              {activeDevice.charAt(0).toUpperCase() + activeDevice.slice(1)} Preview
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Width: {devices.find(d => d.id === activeDevice)?.width}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveTools;
