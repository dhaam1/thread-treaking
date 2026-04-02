import React from 'react';
import HeroVariantC from './components/HeroVariantC';
import ViralThreadCards from './components/ViralThreadCards';

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      <main className="flex-1">
        <HeroVariantC />
        
        {/* 바이럴 스레드 대시보드 리스트 */}
        <div className="bg-white/50 backdrop-blur-3xl border-t border-slate-100">
          <ViralThreadCards />
        </div>
      </main>
    </div>
  );
}

export default App;
