import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
  description?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
  title = "Thika Sports Club Virtual Tour",
  description = "Discover the elegance and excellence that defines our century-old legacy"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsPlaying(true);
      // Simulate progress for demo
      const interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 0.5));
      }, 100);
      return () => clearInterval(interval);
    } else {
      document.body.style.overflow = 'auto';
      setIsPlaying(false);
      setProgress(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Modal Container */}
      <div className={`relative w-full max-w-4xl mx-auto bg-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 transition-all duration-700 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      } ${isFullscreen ? 'fixed inset-4 max-w-none rounded-lg' : 'max-h-[90vh] overflow-y-auto'}`}>
        
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-xl -z-10"></div>
        
        {/* Header */}
        <div className="relative p-4 sm:p-6 border-b border-gray-700/50 bg-gradient-to-r from-gray-900/80 to-gray-800/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">{title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={toggleMute}
                className="p-1.5 sm:p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-200"
              >
                {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
              
              <button
                onClick={toggleFullscreen}
                className="p-1.5 sm:p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-200"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
              
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-full bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 transition-all duration-200"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-3 sm:mt-4 w-full bg-gray-700/30 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 h-full w-4 bg-white/30 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-black max-h-[60vh]">
          {/* Video Frame */}
          <iframe
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
          
          {/* Overlay Controls */}
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="group p-4 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200"
              >
                <Play className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Cinematic Vignette */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-6 bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-t border-gray-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-4 sm:space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm">Live Preview</span>
              </div>
              <div className="text-xs sm:text-sm">
                Est. 1922 • Premium Sports Club
              </div>
            </div>
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button className="px-4 sm:px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs sm:text-sm font-medium transition-colors duration-200">
                Learn More
              </button>
              <button className="px-4 sm:px-6 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Lighting Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default VideoModal;