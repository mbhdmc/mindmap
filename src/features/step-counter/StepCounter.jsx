import StepCountingEngine from './StepCountingEngine';

/**
 * Step Counter Display Component
 * UI component that uses the Step Counting Engine
 */
const StepCounter = () => {
  const engine = StepCountingEngine({ onStepUpdate: () => {} });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Step Counter</h2>
      
      <div className="text-center mb-6">
        <div className="text-5xl font-bold text-blue-600 mb-2">
          {engine.steps.toLocaleString()}
        </div>
        <div className="text-gray-600">Steps Today</div>
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
          onClick={engine.handleResetSteps}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
        >
          Reset Counter
        </button>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <div className="text-sm text-gray-600">
          Status: <span className="font-semibold">{engine.isTracking ? '🟢 Active' : '⚪ Inactive'}</span>
        </div>
      </div>
    </div>
  );
};

export default StepCounter;
