import { useState, useEffect, useCallback } from 'react';

export const useWorkoutProgress = (trainingData) => {
  const [completedExercises, setCompletedExercises] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Load completed exercises from localStorage with error handling
  useEffect(() => {
    try {
      const saved = localStorage.getItem('completedExercises');
      if (saved) {
        setCompletedExercises(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save completed exercises with debounce and error handling
  useEffect(() => {
    if (!isLoading) {
      const saveTimeout = setTimeout(() => {
        try {
          localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
        } catch (error) {
          console.error('Error saving progress:', error);
        }
      }, 500);

      return () => clearTimeout(saveTimeout);
    }
  }, [completedExercises, isLoading]);

  const toggleExercise = (exerciseId, completed) => {
    setCompletedExercises(prev => ({
      ...prev,
      [exerciseId]: completed
    }));
  };

  const getProgressStats = () => {
    const totalExercises = trainingData.reduce((total, day) => total + day.exercicios.length, 0);
    const completedCount = Object.values(completedExercises).filter(Boolean).length;
    const percentage = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0;

    return {
      total: totalExercises,
      completed: completedCount,
      percentage
    };
  };

  const getDayProgress = (dayId) => {
    const day = trainingData.find(d => d.id === dayId);
    if (!day) return { completed: 0, total: 0, percentage: 0 };

    const completed = day.exercicios.filter(ex => completedExercises[ex.id]).length;
    const total = day.exercicios.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { completed, total, percentage };
  };

  const resetProgress = useCallback(() => {
    try {
      localStorage.removeItem('completedExercises');
      setCompletedExercises({});
    } catch (error) {
      console.error('Error resetting progress:', error);
    }
  }, []);

  return {
    completedExercises,
    toggleExercise,
    getProgressStats,
    getDayProgress,
    resetProgress,
    isLoading
  };
};