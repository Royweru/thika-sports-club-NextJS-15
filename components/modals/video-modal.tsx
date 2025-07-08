import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
  description?: string;
}

 export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
  title = "Thika Sports Club Virtual Tour",
  description = "Discover the elegance and excellence that defines our century-old legacy"
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, isPlaying]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 backdrop-blur-sm transition-all duration-300"
      onClick={handleBackdropClick}
    >
      {/* Floating particles for ambiance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl mx-auto px-4">
        <div 
          className="relative bg-black/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 rounded-2xl"></div>
          
          {/* Header - Only show on hover or when controls are visible */}
          <div className={`absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/80 to-transparent transition-all duration-300 ${
            showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
              </div>
              
              <button
                onClick={onClose}
                className="ml-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video bg-black">
            <iframe
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
            
            {/* Center Play/Pause Control */}
            {/* <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}>
              <button
                onClick={togglePlayPause}
                className="p-4 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/20"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </button>
            </div> */}

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>

          {/* Minimal status indicator */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-white/80">
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm font-medium">
                {isPlaying ? 'Playing' : 'Paused'}
              </span>
            </div>
          </div>

          {/* Keyboard shortcuts hint */}
          <div className={`absolute bottom-4 right-4 text-white/60 text-xs transition-all duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}>
          
          </div>
        </div>
      </div>
    </div>
  );
};