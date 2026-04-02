import React from 'react';
import { Loader2, Search } from 'lucide-react';

const LoadingScanner: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-4 animate-in fade-in duration-500">
      <div className="relative w-24 h-24 mb-8">
        {/* Outer Pulsing Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 animate-ping"></div>
        <div className="absolute inset-2 rounded-full border border-indigo-500/40 animate-spin" style={{ animationDuration: '3s' }}></div>
        
        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white rounded-full shadow-lg shadow-indigo-100">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
        </div>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 mb-2">
        스레드 구조 분석 중...
      </h3>
      <p className="text-slate-500 font-medium max-w-sm text-center">
        메타데이터와 바이럴 패턴을 인공지능이 추출하고 있습니다. 최대 10초 정도 소요될 수 있습니다.
      </p>

      {/* Progress Steps Mockup */}
      <div className="mt-8 space-y-3 w-full max-w-xs">
        <div className="flex items-center gap-3 text-sm text-indigo-600 font-semibold bg-indigo-50 px-4 py-2 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
          OpenGraph URL 파싱 완료
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-400 font-semibold px-4 py-2 opacity-50">
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          카피라이팅 훅 분해 중...
        </div>
      </div>
    </div>
  );
};

export default LoadingScanner;
