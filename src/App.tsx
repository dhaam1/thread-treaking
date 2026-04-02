
import React, { useState } from 'react';
import HeroVariantC from './components/HeroVariantC';
import ViralThreadCards from './components/ViralThreadCards';
import LoadingScanner from './components/LoadingScanner';
import AnalysisReport from './components/AnalysisReport';

function App() {
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  // HeroVariantC의 검색 이벤트 핸들러
  const handleSearch = (url: string) => {
    setTargetUrl(url);
    setIsScanning(true);
    
    // 3초 뒤 로딩 스캐너에서 결과 리포트로 전환
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      <main className="flex-1">
        <HeroVariantC onSearch={handleSearch} />
        
        {/* 분석 파이프라인 전환 영역 */}
        <div id="analysis-zone" className="bg-white border-t border-slate-100 min-h-[400px]">
          {targetUrl ? (
            isScanning ? (
              <LoadingScanner />
            ) : (
              <AnalysisReport url={targetUrl} />
            )
          ) : (
            <div className="bg-slate-50">
              <ViralThreadCards />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
