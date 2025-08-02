import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Play, ExternalLink, Clock, Target, Zap, ArrowRight, Timer, Award } from 'lucide-react';
import { useToast } from '../contexts/ToastContext';
import VideoPlayer from './VideoPlayer';
import Card from './ui/Card';
import Button from './ui/Button';
import ProgressBar from './ui/ProgressBar';

const WorkoutDetail = ({ day, onExerciseToggle, completedExercises }) => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const { showToast } = useToast();

  const completedCount = day?.exercicios.filter(ex => completedExercises[ex.id]).length || 0;
  const totalCount = day?.exercicios.length || 0;
  const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Show completion toast when workout is finished
  useEffect(() => {
    if (progressPercentage === 100) {
      showToast('Parabéns! Treino concluído com sucesso! 🎉', 'success', 5000);
    }
  }, [progressPercentage, showToast]);

  if (!day) return null;

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    setSelectedExercise(null);
  };

  const handleExerciseToggle = (exerciseId, completed) => {
    onExerciseToggle(exerciseId, completed);
    
    if (completed) {
      showToast('Exercício marcado como concluído!', 'success');
    } else {
      showToast('Exercício desmarcado', 'info');
    }
  };

  const getCategoriaIcon = (categoria) => {
    const icons = {
      'Mobilidade': '🔄',
      'Aquecimento': '🔥',
      'Ativação': '⚡',
      'Força Principal': '💪',
      'Força Acessória': '🏋️',
      'Potência': '⚡',
      'Metabólico': '🔥',
      'Core': '🎯'
    };
    return icons[categoria] || '📝';
  };

  const getCategoryColor = (categoria) => {
    const colors = {
      'Mobilidade': 'from-blue-500 to-blue-600',
      'Aquecimento': 'from-orange-500 to-orange-600',
      'Ativação': 'from-yellow-500 to-yellow-600',
      'Força Principal': 'from-red-500 to-red-600',
      'Força Acessória': 'from-purple-500 to-purple-600',
      'Potência': 'from-indigo-500 to-indigo-600',
      'Metabólico': 'from-green-500 to-green-600',
      'Core': 'from-pink-500 to-pink-600'
    };
    return colors[categoria] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 text-white">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">{day.dia}</h1>
                <p className="text-lg opacity-90">{day.titulo}</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <Timer className="w-5 h-5 text-white/60" />
              <span className="text-sm text-white/60">Duração</span>
            </div>
            <p className="text-2xl font-bold">{day.duracao}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="opacity-75">Progresso do Treino</span>
            <span className="font-medium">{completedCount}/{totalCount} exercícios</span>
          </div>
          <ProgressBar 
            value={completedCount} 
            max={totalCount}
            size="lg"
            variant="success"
          />
          <p className="text-sm opacity-75 text-center">
            {progressPercentage}% completo
          </p>
        </div>
      </Card>

      {/* Exercises List */}
      <div className="space-y-4">
        {day.exercicios.map((exercise, index) => {
          const isCompleted = completedExercises[exercise.id];
          
          return (
            <Card
              key={exercise.id}
              variant="elevated"
              className={`p-6 transition-all duration-300 ${
                isCompleted ? 'ring-2 ring-green-400 shadow-green-500/25' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(exercise.categoria)}`}>
                      <span className="text-2xl">{getCategoriaIcon(exercise.categoria)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-medium text-white/60 bg-white/10 px-2 py-1 rounded">
                          {index + 1}
                        </span>
                        <h3 className={`text-lg font-semibold ${
                          isCompleted ? 'text-green-400 line-through' : 'text-white'
                        }`}>
                          {exercise.nome}
                        </h3>
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(exercise.categoria)} text-white`}>
                        {exercise.categoria}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-3 text-white/75">
                      <div className="p-2 bg-white/10 rounded-lg">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs opacity-60">Séries</p>
                        <p className="text-sm font-medium">{exercise.series}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-white/75">
                      <div className="p-2 bg-white/10 rounded-lg">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs opacity-60">Carga</p>
                        <p className="text-sm font-medium">{exercise.carga}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-white/75">
                      <div className="p-2 bg-white/10 rounded-lg">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs opacity-60">Pausa</p>
                        <p className="text-sm font-medium">{exercise.pausa}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Button
                      onClick={() => handleExerciseClick(exercise)}
                      variant="primary"
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Ver Vídeo</span>
                    </Button>

                    <Button
                      onClick={() => handleExerciseToggle(exercise.id, !isCompleted)}
                      variant={isCompleted ? "success" : "secondary"}
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Circle className="w-4 h-4" />
                      )}
                      <span>
                        {isCompleted ? 'Concluído' : 'Marcar como Concluído'}
                      </span>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                    >
                      <a
                        href={exercise.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Abrir no YouTube</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Video Modal */}
      {showVideo && selectedExercise && (
        <VideoPlayer
          exercise={selectedExercise}
          onClose={handleVideoClose}
        />
      )}

      {/* Completion Message */}
      {progressPercentage === 100 && (
        <Card className="p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-white mb-3">Parabéns!</h3>
          <p className="text-white/90 mb-6">
            Você completou todos os exercícios do {day.dia}. 
            Continue assim para alcançar seus objetivos!
          </p>
          <div className="flex items-center justify-center space-x-2 text-green-400">
            <Award className="w-5 h-5" />
            <span className="font-medium">Treino Concluído com Sucesso!</span>
          </div>
        </Card>
      )}
    </div>
  );
};

export default WorkoutDetail; 