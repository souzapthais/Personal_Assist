import React from 'react';
import { Calendar, Clock, Target, Play, TrendingUp, Award, Zap } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import ProgressBar from './ui/ProgressBar';

const Dashboard = ({ trainingData, onDaySelect, getDayProgress, completedExercises }) => {
  const getDayColor = (dayId) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-orange-500 to-orange-600',
      'from-red-500 to-red-600',
      'from-indigo-500 to-indigo-600'
    ];
    return colors[(dayId - 1) % colors.length];
  };

  const getDayIcon = (dayId) => {
    const icons = ['🏋️', '🦵', '💪', '🔥', '🎯', '⚡'];
    return icons[(dayId - 1) % icons.length];
  };

  const getDayCategory = (dayId) => {
    const categories = ['Força', 'Resistência', 'Potência', 'Mobilidade', 'Core', 'Cardio'];
    return categories[(dayId - 1) % categories.length];
  };

  const totalExercises = trainingData.reduce((total, day) => total + day.exercicios.length, 0);
  const completedCount = Object.values(completedExercises).filter(Boolean).length;
  const overallProgress = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center text-white mb-8">
        <div className="mb-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">Programa Ativo</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Seu Programa de Treino
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Transforme sua performance na canoa havaiana com treinos estruturados e progressão inteligente
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm opacity-75">Dias de Treino</p>
              <p className="text-2xl font-bold">{trainingData.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm opacity-75">Total de Exercícios</p>
              <p className="text-2xl font-bold">{totalExercises}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm opacity-75">Tempo Médio</p>
              <p className="text-2xl font-bold">45-50 min</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm opacity-75">Progresso Geral</p>
              <p className="text-2xl font-bold">{overallProgress}%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Overall Progress */}
      <Card className="p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Progresso Geral do Programa</h3>
          <span className="text-sm text-white/60">{completedCount}/{totalExercises} exercícios</span>
        </div>
        <ProgressBar 
          value={completedCount} 
          max={totalExercises}
          size="lg"
          variant="success"
        />
      </Card>

      {/* Training Days Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingData.map((day) => {
          const progress = getDayProgress(day.id);
          const isCompleted = progress.percentage === 100;
          const isInProgress = progress.percentage > 0 && progress.percentage < 100;
          
          return (
            <Card
              key={day.id}
              variant="elevated"
              className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                isCompleted ? 'ring-2 ring-green-400 shadow-green-500/25' : 
                isInProgress ? 'ring-2 ring-blue-400 shadow-blue-500/25' : ''
              }`}
              onClick={() => onDaySelect(day)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getDayColor(day.id)}`}>
                    <span className="text-2xl">{getDayIcon(day.id)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{day.dia}</h3>
                    <p className="text-sm text-white/75">{day.titulo}</p>
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white/90 mt-1">
                      {getDayCategory(day.id)}
                    </span>
                  </div>
                </div>
                <Play className="w-5 h-5 text-white/60" />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm text-white/75">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{day.duracao}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>{day.exercicios.length} exercícios</span>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/75">Progresso</span>
                    <span className="text-white font-medium">
                      {progress.completed}/{progress.total}
                    </span>
                  </div>
                  <ProgressBar 
                    value={progress.completed} 
                    max={progress.total}
                    size="sm"
                    variant={isCompleted ? "success" : "default"}
                  />
                </div>

                {/* Status Badge */}
                {isCompleted && (
                  <div className="flex items-center space-x-2 text-green-400">
                    <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-sm font-medium">Treino Completo!</span>
                  </div>
                )}

                {isInProgress && !isCompleted && (
                  <div className="flex items-center space-x-2 text-blue-400">
                    <div className="w-4 h-4 rounded-full bg-blue-400 flex items-center justify-center">
                      <span className="text-xs">⟳</span>
                    </div>
                    <span className="text-sm font-medium">Em Progresso</span>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Tips Section */}
      <Card className="p-6 mt-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
            <Award className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">💡 Dicas para Melhor Performance</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Aqueça adequadamente antes de cada treino</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Mantenha a técnica correta em todos os exercícios</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Respeite os tempos de pausa indicados</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Hidrate-se durante o treino</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Ouça seu corpo e ajuste as cargas conforme necessário</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Consistência é mais importante que intensidade</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard; 