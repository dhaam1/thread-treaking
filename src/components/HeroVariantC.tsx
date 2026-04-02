import React, { useState } from 'react';
import { Target, Search, BarChart3, Presentation } from 'lucide-react';

interface HeroVariantCProps {
  onSearch?: (url: string) => void;
}

const HeroVariantC: React.FC<HeroVariantCProps> = ({ onSearch }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim() && onSearch) {
      onSearch(url.trim());
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden">
      {/* Background Soft Mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white -z-10"></div>
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold mb-6 border border-blue-100">
            <Target size={16} />
            <span>경쟁 우위 선점하기</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            성공하는 콘텐츠의 <br/>
            <span className="text-blue-600">DNA를 추출하세요</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 w-full max-w-lg leading-relaxed">
            벤치마킹에 시간을 낭비하지 마세요. 경쟁사의 랜딩페이지 URL을 입력하면 카피라이팅, 색상, 레이아웃 등 모든 디자인 리소스를 분석해 데이터로 변환합니다.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input 
                type="text" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full pl-11 pr-4 py-4 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-800 placeholder-slate-400 bg-white"
                placeholder="https://competitor.com"
              />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5 whitespace-nowrap">
              무료로 분석하기
            </button>
          </form>
          <p className="text-sm text-slate-400 mt-4 ml-1">신용카드 없이 지금 바로 시작하세요.</p>
        </div>

        {/* Right: Floating App Card Presentation */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none relative z-10">
          {/* Decorative blur shadows */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-300 to-indigo-400 opacity-20 blur-2xl rounded-[3rem]"></div>
          
          {/* Main Card */}
          <div className="relative bg-white border border-slate-100 p-2 rounded-3xl shadow-2xl overflow-hidden transform md:rotate-2 hover:rotate-0 transition-all duration-500">
            <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
              {/* Fake Browser Top Bar */}
              <div className="h-10 bg-slate-100/50 flex items-center px-4 gap-2 border-b border-slate-200">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              {/* Card Content Fake UI */}
              <div className="p-6">
                <div className="h-4 w-1/3 bg-slate-200 rounded mb-6"></div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="h-24 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center">
                    <BarChart3 className="text-blue-300" size={32} />
                  </div>
                  <div className="h-24 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center">
                    <Presentation className="text-indigo-300" size={32} />
                  </div>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded mb-3"></div>
                <div className="h-3 w-5/6 bg-slate-100 rounded mb-3"></div>
                <div className="h-3 w-4/6 bg-slate-100 rounded"></div>
              </div>
            </div>
            
            {/* Floating Elements / Micro Animations */}
            <div className="absolute -left-6 top-1/4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">A+</div>
              <div>
                <div className="text-xs font-bold text-slate-800">UX 점수</div>
                <div className="text-[10px] text-slate-500">상위 1%</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroVariantC;
