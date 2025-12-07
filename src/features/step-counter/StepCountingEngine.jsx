import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { ActivityStorage } from '../activity-storage';
import { UserProfileManager } from '../user-profile';
import { NotificationManager } from '../notifications';
import { HealthIntegration } from '../health-integration';

/**
 * Step Counting Engine Hook
 * Custom React hook for tracking and managing step count data
 * Integrates with ActivityStorage, UserProfile, Notifications, and Health platforms
 */
const useStepCountingEngine = ({ 
  onStepUpdate,
  autoSave = true,
  notificationsEnabled = true
} = {}) => {
  const [steps, setSteps] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(10000);
  const [lastSaved, setLastSaved] = useState(null);
  
  const autoSaveTimerRef = useRef(null);
  const notificationTimerRef = useRef(null);
  const goalReachedRef = useRef(false);

  // Calculate goal progress as derived state
  const goalProgress = useMemo(() => {
    const progress = dailyGoal > 0 ? (steps / dailyGoal) * 100 : 0;
    return Math.min(progress, 100);
  }, [steps, dailyGoal]);

  // Load initial data from storage
  useEffect(() => {
    const loadInitialData = () => {
      // Load user profile to get daily goal
      const profile = UserProfileManager.getProfile();
      setDailyGoal(profile.dailyGoal);

      // Load today's activity if exists
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const todayActivities = ActivityStorage.getActivitiesByDateRange(today, tomorrow);
      if (todayActivities.length > 0) {
        const totalSteps = todayActivities.reduce((sum, activity) => 
          sum + (activity.steps || 0), 0);
        setSteps(totalSteps);
      }
    };

    loadInitialData();
  }, []);

  // Check for goal achievement and send notification
  useEffect(() => {
    if (steps >= dailyGoal && !goalReachedRef.current && notificationsEnabled) {
      goalReachedRef.current = true;
      NotificationManager.sendNotification(
        'Goal Achieved! 🎉',
        {
          body: `Congratulations! You've reached your goal of ${dailyGoal.toLocaleString()} steps!`,
          tag: 'goal-achieved'
        }
      );
    } else if (steps < dailyGoal) {
      goalReachedRef.current = false;
    }
  }, [steps, dailyGoal, notificationsEnabled]);

  // Call onStepUpdate callback
  useEffect(() => {
    if (onStepUpdate) {
      onStepUpdate(steps);
    }
  }, [steps, onStepUpdate]);

  // Auto-save functionality
  const saveActivity = useCallback(() => {
    if (steps > 0) {
      const success = ActivityStorage.saveActivity({
        steps,
        type: 'step_count',
        source: 'manual'
      });
      
      if (success) {
        setLastSaved(new Date().toISOString());
      }
      
      return success;
    }
    return false;
  }, [steps]);

  // Setup auto-save timer
  useEffect(() => {
    if (autoSave && isTracking) {
      // Save every 5 minutes while tracking
      autoSaveTimerRef.current = setInterval(() => {
        saveActivity();
      }, 5 * 60 * 1000);

      return () => {
        if (autoSaveTimerRef.current) {
          clearInterval(autoSaveTimerRef.current);
        }
      };
    }
  }, [autoSave, isTracking, saveActivity]);

  // Setup notification reminders
  useEffect(() => {
    if (notificationsEnabled && isTracking) {
      // Send reminder every 2 hours if not reached goal
      notificationTimerRef.current = setInterval(() => {
        if (steps < dailyGoal) {
          NotificationManager.sendGoalReminder(steps, dailyGoal);
        }
      }, 2 * 60 * 60 * 1000);

      return () => {
        if (notificationTimerRef.current) {
          clearInterval(notificationTimerRef.current);
        }
      };
    }
  }, [notificationsEnabled, isTracking, steps, dailyGoal]);

  const handleAddSteps = useCallback((count) => {
    setSteps(prev => prev + count);
  }, []);

  const handleResetSteps = useCallback(() => {
    // Save current data before resetting
    if (steps > 0) {
      saveActivity();
    }
    setSteps(0);
    goalReachedRef.current = false;
  }, [steps, saveActivity]);

  const toggleTracking = useCallback(() => {
    setIsTracking(prev => {
      const newState = !prev;
      
      // Save when stopping tracking
      if (!newState && steps > 0) {
        saveActivity();
      }
      
      return newState;
    });
  }, [steps, saveActivity]);

  const updateDailyGoal = useCallback((newGoal) => {
    setDailyGoal(newGoal);
    UserProfileManager.updateDailyGoal(newGoal);
  }, []);

  const exportToHealthPlatform = useCallback(async (platform) => {
    const activityData = {
      steps,
      timestamp: new Date().toISOString(),
      type: 'step_count'
    };
    
    return await HealthIntegration.exportData(platform, activityData);
  }, [steps]);

  const syncFromHealthPlatform = useCallback(async (platform) => {
    const result = await HealthIntegration.syncData(platform);
    
    if (result.success && result.data?.steps) {
      setSteps(prev => prev + result.data.steps);
    }
    
    return result;
  }, []);

  return {
    // State
    steps,
    isTracking,
    dailyGoal,
    goalProgress,
    lastSaved,
    
    // Actions
    handleAddSteps,
    handleResetSteps,
    toggleTracking,
    saveActivity,
    updateDailyGoal,
    exportToHealthPlatform,
    syncFromHealthPlatform
  };
};

export default useStepCountingEngine;
