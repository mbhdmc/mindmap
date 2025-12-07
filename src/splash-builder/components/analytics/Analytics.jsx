import { useState } from 'react';

/**
 * Analytics & Reporting Component
 * View page performance metrics and visitor analytics
 */
function Analytics() {
  const [stats] = useState({
    visitors: 1234,
    conversions: 89,
    conversionRate: 7.2,
    avgTimeOnPage: '2:34',
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Analytics & Reporting</h2>
      <p className="text-gray-600 mb-4">
        Track your splash page performance and visitor behavior.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border rounded-lg p-4 bg-blue-50">
          <div className="text-3xl font-bold text-blue-600">{stats.visitors}</div>
          <div className="text-sm text-gray-600 mt-1">Total Visitors</div>
        </div>
        <div className="border rounded-lg p-4 bg-green-50">
          <div className="text-3xl font-bold text-green-600">{stats.conversions}</div>
          <div className="text-sm text-gray-600 mt-1">Conversions</div>
        </div>
        <div className="border rounded-lg p-4 bg-purple-50">
          <div className="text-3xl font-bold text-purple-600">{stats.conversionRate}%</div>
          <div className="text-sm text-gray-600 mt-1">Conversion Rate</div>
        </div>
        <div className="border rounded-lg p-4 bg-orange-50">
          <div className="text-3xl font-bold text-orange-600">{stats.avgTimeOnPage}</div>
          <div className="text-sm text-gray-600 mt-1">Avg. Time on Page</div>
        </div>
      </div>
      <div className="mt-6 border rounded-lg p-4">
        <h3 className="font-semibold mb-3">Performance Chart</h3>
        <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
          <span className="text-gray-400">📊 Chart visualization area</span>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
