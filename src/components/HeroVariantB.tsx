import React, { useState } from 'react';
import { Zap, Command, ArrowRight } from 'lucide-react';

const HeroVariantB: React.FC = () => {
  const [url, setUrl] = useState('');

  return (
    <div className="relative min-h-screen bg-darkBg flex flex-col justify-center overflow-hidden font-sans text-slate-200 selection:bg-neonPurple selection:text-white">
      {/* Dark & Neon Background Aesthetics */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neonPurple rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        {/* Glow Badge */}
        <div className="mb-8 border border-white/10 bg-white/5 py-1.5 px-4 rounded-full inline-flex items-center gap-2 backdrop-blur-sm">
          <Zap className="text-neonPurple" size={16} fill="currentColor" />
          <span className="text-sm font-medium tracking-wide text-white/80">데이터 사이언티스트를 위한 고강도 분석기</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white text-balance leading-[1.1]">
          레퍼런스의 숨겨진 패턴, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-neonPurple to-pink-500 animate-gradient">
            코드 레벨에서 분석하다
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl font-light">
          벤치마킹할 URL을 입력하세요. 레이아웃 구조체부터 애니메이션 토큰, CSS 변수까지 디버그 수준의 인사이트를 즉시 도출합니다.
        </p>

        {/* Terminal/Command Line Style Input */}
        <div className="w-full max-w-3xl relative mb-16">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neonBlue to-neonPurple rounded-lg blur opacity-30 animate-pulse transition duration-1000"></div>
          <div className="relative flex items-center bg-darkSurface border border-white/10 rounded-lg p-2 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-center p-3 text-slate-500">
              <Command size={20} />
            </div>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <input 
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste target URL to execute analysis..."
              className="flex-1 bg-transparent border-none outline-none py-3 px-2 text-white font-mono text-sm md:text-base placeholder-slate-600 focus:ring-0"
            />
            <button className="ml-2 bg-white text-black hover:bg-slate-200 transition-colors font-bold px-6 py-3 rounded-md flex items-center gap-2">
              Run <ArrowRight size={16} className="hidden sm:inline" />
            </button>
          </div>
          
          {/* Key Hints */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4 text-xs font-mono text-slate-500">
            <span>Press <kbd className="border border-white/20 rounded px-1 text-white/70 bg-white/5 pb-0.5">Enter</kbd> to analyze</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Requires valid HTTPS URL</span>
          </div>
        </div>

        {/* Dashboard Preview Hint */}
        <div className="w-full h-48 border-t border-x border-white/10 bg-gradient-to-t from-darkBg to-white/[0.02] rounded-t-3xl mt-12 overflow-hidden relative backdrop-blur-md">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-neonPurple/50 rounded-b-lg shadow-[0_0_15px_rgba(168,85,247,0.7)]"></div>
          <div className="px-8 mt-12 flex justify-between opacity-30 font-mono text-xs text-neonBlue">
            <div>// EXTRACTED_DOM_TREE</div>
            <div>[STATUS: AWAITING_INPUT]</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariantB;
