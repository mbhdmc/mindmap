/**
 * Activity Data Storage Module
 * Handles storage and retrieval of activity data
 */

const STORAGE_KEY = 'step_counter_activity_data';

export const ActivityStorage = {
  // Save activity data to localStorage
  saveActivity: (data) => {
    try {
      const existing = ActivityStorage.getAllActivities();
      existing.push({
        ...data,
        timestamp: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
      return true;
    } catch (error) {
      console.error('Error saving activity:', error);
      return false;
    }
  },

  // Get all activities
  getAllActivities: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading activities:', error);
      return [];
    }
  },

  // Get activities by date range
  getActivitiesByDateRange: (startDate, endDate) => {
    const activities = ActivityStorage.getAllActivities();
    return activities.filter(activity => {
      const activityDate = new Date(activity.timestamp);
      return activityDate >= startDate && activityDate <= endDate;
    });
  },

  // Clear all activity data
  clearAllActivities: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing activities:', error);
      return false;
    }
  }
};

export default ActivityStorage;
