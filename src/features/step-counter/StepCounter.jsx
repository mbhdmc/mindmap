import useStepCountingEngine from './StepCountingEngine';

/**
 * Step Counter Display Component
 * UI component that uses the Step Counting Engine hook
 */
const StepCounter = () => {
  const engine = useStepCountingEngine({
    autoSave: true,
    notificationsEnabled: true
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Step Counter</h2>
      
      <div className="text-center mb-6">
        <div className="text-5xl font-bold text-blue-600 mb-2">
          {engine.steps.toLocaleString()}
        </div>
        <div className="text-gray-600">Steps Today</div>
      </div>

      {/* Goal Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Daily Goal Progress</span>
          <span>{Math.round(engine.goalProgress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-300 ${
              engine.goalProgress >= 100 ? 'bg-green-600' : 'bg-blue-600'
            }`}
            style={{ width: `${engine.goalProgress}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 mt-1 text-right">
          Goal: {engine.dailyGoal.toLocaleString()} steps
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => engine.handleAddSteps(100)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
        >
          Add 100 Steps
        </button>
        
        <button
          onClick={engine.toggleTracking}
          className={`w-full ${
            engine.isTracking 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-gray-600 hover:bg-gray-700'
          } text-white font-semibold py-3 px-4 rounded-lg transition duration-200`}
        >
          {engine.isTracking ? 'Tracking Active' : 'Start Tracking'}
        </button>
        
        <button
          onClick={engine.saveActivity}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
        >
          Save Progress
        </button>
        
        <button
          onClick={engine.handleResetSteps}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
        >
          Reset Counter
        </button>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg space-y-2">
        <div className="text-sm text-gray-600">
          Status: <span className="font-semibold">{engine.isTracking ? '🟢 Active' : '⚪ Inactive'}</span>
        </div>
        {engine.lastSaved && (
          <div className="text-xs text-gray-500">
            Last saved: {new Date(engine.lastSaved).toLocaleTimeString()}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepCounter;
