import { useState, useEffect } from 'react';

export const useWorkoutProgress = (trainingData) => {
  const [completedExercises, setCompletedExercises] = useState({});

  // Load completed exercises from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('completedExercises');
    if (saved) {
      setCompletedExercises(JSON.parse(saved));
    }
  }, []);

  // Save completed exercises to localStorage
  useEffect(() => {
    localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
  }, [completedExercises]);

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

  const resetProgress = () => {
    setCompletedExercises({});
  };

  return {
    completedExercises,
    toggleExercise,
    getProgressStats,
    getDayProgress,
    resetProgress
  };
}; 