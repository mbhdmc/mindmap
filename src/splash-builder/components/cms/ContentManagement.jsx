import { useState } from 'react';

/**
 * Content Management System Component
 * Manage text, images, videos, and other content assets
 */
function ContentManagement() {
  const [assets] = useState([
    { id: 1, name: 'hero-image.jpg', type: 'image' },
    { id: 2, name: 'intro-video.mp4', type: 'video' },
    { id: 3, name: 'about-text.md', type: 'text' },
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Content Management System</h2>
      <p className="text-gray-600 mb-4">
        Manage all your content assets in one place.
      </p>
      <div className="space-y-2">
        {assets.map(asset => (
          <div key={asset.id} className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                {asset.type === 'image' ? '🖼️' : asset.type === 'video' ? '🎥' : '📝'}
              </span>
              <div>
                <p className="font-medium">{asset.name}</p>
                <p className="text-sm text-gray-500">{asset.type}</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-800">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentManagement;
