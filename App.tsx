
import React from 'react';
import { HOTSPOTS, IMAGES } from './constants';
import { HotspotOverlay } from './components/HotspotOverlay';

const App: React.FC = () => {
  const baseImage = IMAGES.base;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-neutral-950 text-white">
      {/* Main Interactive Container */}
      <div 
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)] border border-neutral-800 group bg-neutral-900"
      >
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
          <img 
            src={baseImage} 
            alt="Interactive Identity Map"
            className="w-full h-auto block select-none pointer-events-none"
            onLoad={(e) => {
              (e.currentTarget as HTMLImageElement).classList.add('opacity-100');
            }}
            onError={(e) => {
              // 如果 GitHub 链接失败，则显示默认占位图
              const target = e.target as HTMLImageElement;
              if (target.src !== 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000') {
                target.src = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000';
              }
            }}
          />

          {/* Hotspots Container */}
          <div className="absolute inset-0 z-10">
            {HOTSPOTS.map((hotspot) => (
              <HotspotOverlay key={hotspot.id} hotspot={hotspot} />
            ))}
          </div>
          
          {/* 移动端提示 */}
          <div className="absolute bottom-4 right-4 md:hidden z-20 pointer-events-none">
            <p className="text-[10px] uppercase tracking-widest text-white/50 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
              Tap regions to explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
