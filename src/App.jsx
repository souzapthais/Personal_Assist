import React, { useState } from 'react';
import { trainingData } from './data/training-data';
import { useWorkoutProgress } from './hooks/useWorkoutProgress';
import { ToastProvider } from './contexts/ToastContext';
import Dashboard from './components/Dashboard';
import WorkoutDetail from './components/WorkoutDetail';
import Header from './components/Header';

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showDashboard, setShowDashboard] = useState(true);
  
  const {
    completedExercises,
    toggleExercise,
    getProgressStats,
    getDayProgress
  } = useWorkoutProgress(trainingData);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setShowDashboard(false);
  };

  const handleBackToDashboard = () => {
    setShowDashboard(true);
    setSelectedDay(null);
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header 
          onBackToDashboard={handleBackToDashboard}
          showBackButton={!showDashboard}
          progress={getProgressStats()}
        />
        
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          {showDashboard ? (
            <Dashboard 
              trainingData={trainingData}
              onDaySelect={handleDaySelect}
              getDayProgress={getDayProgress}
              completedExercises={completedExercises}
            />
          ) : (
            <WorkoutDetail 
              day={selectedDay}
              onExerciseToggle={toggleExercise}
              completedExercises={completedExercises}
            />
          )}
        </main>
      </div>
    </ToastProvider>
  );
}

export default App; 