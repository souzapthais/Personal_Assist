import React from 'react';
import { ArrowLeft, Trophy, Target, BarChart3, Settings } from 'lucide-react';
import Button from './ui/Button';
import ProgressBar from './ui/ProgressBar';

const Header = ({ onBackToDashboard, showBackButton, progress }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onBackToDashboard}
                className="p-2"
                aria-label="Voltar ao dashboard"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Canoa Fit Pro
                </h1>
                <p className="text-xs text-white/60">Seu treino personalizado</p>
              </div>
            </div>
          </div>

          {/* Center Section - Progress */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <Target className="w-5 h-5 text-white/80" />
              <div className="text-right">
                <p className="text-sm text-white/60">Progresso Geral</p>
                <p className="text-sm font-semibold text-white">
                  {progress.completed}/{progress.total} exercícios
                </p>
              </div>
            </div>
            
            <div className="w-32">
              <ProgressBar 
                value={progress.completed} 
                max={progress.total}
                size="sm"
                variant="success"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              aria-label="Estatísticas"
            >
              <BarChart3 className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              aria-label="Configurações"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden mt-4">
          <div className="flex items-center justify-between text-sm text-white/80 mb-2">
            <span>Progresso Geral</span>
            <span className="font-medium">{progress.percentage}%</span>
          </div>
          <ProgressBar 
            value={progress.completed} 
            max={progress.total}
            size="sm"
            variant="success"
          />
        </div>
      </div>
    </header>
  );
};

export default Header; 