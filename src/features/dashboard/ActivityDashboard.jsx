import { useState, useEffect } from 'react';
import { ActivityStorage } from '../activity-storage';
import { UserProfileManager } from '../user-profile';

/**
 * Activity Dashboard Component
 * Displays activity statistics and reports
 */
const ActivityDashboard = () => {
  const [profile, setProfile] = useState(UserProfileManager.defaultProfile);
  const [stats, setStats] = useState({
    totalSteps: 0,
    dailyAverage: 0,
    weeklyTotal: 0
  });

  useEffect(() => {
    // Load data on mount
    const loadedActivities = ActivityStorage.getAllActivities();
    const loadedProfile = UserProfileManager.getProfile();
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfile(loadedProfile);

    // Calculate stats
    const totalSteps = loadedActivities.reduce((sum, activity) => sum + (activity.steps || 0), 0);
    const dailyAverage = loadedActivities.length > 0 ? Math.round(totalSteps / loadedActivities.length) : 0;
    
    // Calculate weekly total (last 7 days)
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weeklyActivities = ActivityStorage.getActivitiesByDateRange(weekAgo, new Date());
    const weeklyTotal = weeklyActivities.reduce((sum, activity) => sum + (activity.steps || 0), 0);

    setStats({ totalSteps, dailyAverage, weeklyTotal });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Activity Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 rounded-lg p-6">
          <div className="text-sm text-blue-800 mb-2">Total Steps</div>
          <div className="text-3xl font-bold text-blue-900">{stats.totalSteps.toLocaleString()}</div>
        </div>
        
        <div className="bg-green-100 rounded-lg p-6">
          <div className="text-sm text-green-800 mb-2">Daily Average</div>
          <div className="text-3xl font-bold text-green-900">{stats.dailyAverage.toLocaleString()}</div>
        </div>
        
        <div className="bg-purple-100 rounded-lg p-6">
          <div className="text-sm text-purple-800 mb-2">Weekly Total</div>
          <div className="text-3xl font-bold text-purple-900">{stats.weeklyTotal.toLocaleString()}</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Goal Progress</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Daily Goal</span>
              <span>{profile.dailyGoal.toLocaleString()} steps</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((stats.dailyAverage / profile.dailyGoal) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Weekly Goal</span>
              <span>{profile.weeklyGoal.toLocaleString()} steps</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-green-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((stats.weeklyTotal / profile.weeklyGoal) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDashboard;
