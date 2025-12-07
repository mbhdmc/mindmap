import { useState, useEffect } from 'react';

/**
 * Step Counting Engine Hook
 * Custom React hook for tracking and managing step count data
 */
const useStepCountingEngine = ({ onStepUpdate } = {}) => {
  const [steps, setSteps] = useState(0);
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    if (onStepUpdate) {
      onStepUpdate(steps);
    }
  }, [steps, onStepUpdate]);

  const handleAddSteps = (count) => {
    setSteps(prev => prev + count);
  };

  const handleResetSteps = () => {
    setSteps(0);
  };

  const toggleTracking = () => {
    setIsTracking(prev => !prev);
  };

  return {
    steps,
    isTracking,
    handleAddSteps,
    handleResetSteps,
    toggleTracking
  };
};

export default useStepCountingEngine;
