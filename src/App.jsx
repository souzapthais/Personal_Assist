import React, { useState, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { trainingData } from './data/training-data';
import { useWorkoutProgress } from './hooks/useWorkoutProgress';
import { ToastProvider } from './contexts/ToastContext';
import Dashboard from './components/Dashboard';
import WorkoutDetail from './components/WorkoutDetail';
import Header from './components/Header';

function ErrorFallback({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Oops! Algo deu errado</h2>
        <p className="mb-4">{error.message}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  );
}

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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ToastProvider>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        }>
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
        </Suspense>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;