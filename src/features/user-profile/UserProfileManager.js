/**
 * User Profile & Goal Management Module
 * Manages user profiles and daily step goals
 */

const USER_PROFILE_KEY = 'step_counter_user_profile';

export const UserProfileManager = {
  // Default profile structure
  defaultProfile: {
    name: '',
    dailyGoal: 10000,
    weeklyGoal: 70000,
    preferences: {
      notifications: true,
      theme: 'light'
    }
  },

  // Get user profile
  getProfile: () => {
    try {
      const data = localStorage.getItem(USER_PROFILE_KEY);
      return data ? JSON.parse(data) : UserProfileManager.defaultProfile;
    } catch (error) {
      console.error('Error loading profile:', error);
      return UserProfileManager.defaultProfile;
    }
  },

  // Update user profile
  updateProfile: (updates) => {
    try {
      const currentProfile = UserProfileManager.getProfile();
      const updatedProfile = { ...currentProfile, ...updates };
      localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(updatedProfile));
      return updatedProfile;
    } catch (error) {
      console.error('Error updating profile:', error);
      return null;
    }
  },

  // Update daily goal
  updateDailyGoal: (goal) => {
    return UserProfileManager.updateProfile({ dailyGoal: goal });
  },

  // Update weekly goal
  updateWeeklyGoal: (goal) => {
    return UserProfileManager.updateProfile({ weeklyGoal: goal });
  },

  // Reset profile to defaults
  resetProfile: () => {
    try {
      localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(UserProfileManager.defaultProfile));
      return UserProfileManager.defaultProfile;
    } catch (error) {
      console.error('Error resetting profile:', error);
      return null;
    }
  }
};

export default UserProfileManager;
