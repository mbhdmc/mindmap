/**
 * Notification & Reminder System Module
 * Manages notifications and reminders for step goals
 */

export const NotificationManager = {
  // Check if notifications are supported
  isSupported: () => {
    return 'Notification' in window;
  },

  // Request notification permission
  requestPermission: async () => {
    if (!NotificationManager.isSupported()) {
      return false;
    }

    try {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  },

  // Send a notification
  sendNotification: (title, options = {}) => {
    if (!NotificationManager.isSupported()) {
      console.log('Notifications not supported');
      return;
    }

    if (Notification.permission === 'granted') {
      new Notification(title, {
        icon: '/icon.png',
        badge: '/badge.png',
        ...options
      });
    }
  },

  // Send goal reminder
  sendGoalReminder: (currentSteps, goalSteps) => {
    const remaining = goalSteps - currentSteps;
    
    if (remaining > 0) {
      NotificationManager.sendNotification(
        'Step Goal Reminder',
        {
          body: `You need ${remaining.toLocaleString()} more steps to reach your goal today!`,
          tag: 'goal-reminder'
        }
      );
    } else {
      NotificationManager.sendNotification(
        'Goal Achieved! 🎉',
        {
          body: 'Congratulations! You reached your step goal today!',
          tag: 'goal-achieved'
        }
      );
    }
  },

  // Schedule periodic reminders
  scheduleReminder: (intervalMinutes, callback) => {
    return setInterval(() => {
      if (callback) {
        callback();
      }
    }, intervalMinutes * 60 * 1000);
  },

  // Clear scheduled reminder
  clearReminder: (timerId) => {
    if (timerId) {
      clearInterval(timerId);
    }
  }
};

export default NotificationManager;
