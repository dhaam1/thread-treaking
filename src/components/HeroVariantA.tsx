import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';

const HeroVariantA: React.FC = () => {
  const [url, setUrl] = useState('');

  return (
    <div className="relative min-h-screen bg-[#fafafa] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Blobs for Minimal Aesthetic */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/50 border border-slate-200 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          콘텐츠 분석 엔진 v2.0 업데이트
        </div>

        {/* Main Typography */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
          경쟁사 콘텐츠 벤치마킹을 <br className="hidden md:block" /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            한 번의 클릭
          </span>으로 완벽하게.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          분석하고 싶은 레퍼런스의 링크만 입력하세요. 디자인 요소부터 카피라이팅, 핵심 구조까지 모든 데이터를 10초 안에 추출해 드립니다.
        </p>

        {/* Glassmorphic Search Bar */}
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative flex items-center w-full p-2 bg-white/80 glass rounded-2xl shadow-xl transition-all duration-300 focus-within:bg-white">
            <div className="pl-4 pr-2 text-slate-400">
              <Search size={22} className="stroke-[2.5px]"/>
            </div>
            <input 
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/best-content"
              className="w-full bg-transparent border-none outline-none py-4 px-2 text-slate-800 text-lg placeholder-slate-400"
            />
            <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              <span>추출하기</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Stats / Trust Indicators */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm font-medium text-slate-400">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-slate-800">10k+</span>
            분석된 콘텐츠
          </div>
          <div className="w-px h-8 bg-slate-200"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-slate-800">99.9%</span>
            데이터 정확도
          </div>
          <div className="w-px h-8 bg-slate-200"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-slate-800">0.5s</span>
            평균 분석 속도
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariantA;
