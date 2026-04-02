import React from 'react';
import { Target, Zap, Clock, Award, ChevronRight, Share2, MessageCircle, Heart } from 'lucide-react';

interface AnalysisReportProps {
  url: string;
}

const AnalysisReport: React.FC<AnalysisReportProps> = ({ url }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 animate-in slide-in-from-bottom-8 duration-700">
      
      {/* Report Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold mb-3 border border-indigo-100">
            <Zap size={14} className="fill-indigo-500" /> 분석 완료
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">트래픽 심층 해부 리포트</h2>
          <p className="text-slate-500 mt-1 max-w-xl truncate" title={url}>{url}</p>
        </div>
        <button className="px-6 py-2.5 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-95 flex items-center gap-2">
          대시보드에 저장하기 <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Original Post Mock */}
        <div className="lg:col-span-1 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col">
          <h3 className="font-bold text-slate-800 mb-5 flex items-center gap-2">
            <Target size={20} className="text-indigo-500" />
            원본 콘텐츠 구조
          </h3>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-100 via-transparent to-transparent opacity-50 rounded-bl-3xl"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center font-bold text-indigo-700">익명</div>
              <div>
                <div className="text-sm font-bold text-slate-900">익명의 마케터</div>
                <div className="text-xs text-slate-500">@marketer_x</div>
              </div>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              "결국 팔리는 상세페이지는 디자인이 아니라 '첫 3줄'이 결정합니다. 오늘 1시간 만에 전환율 30%를 끌어올린 비밀 템플릿 하나를 공개합니다. 타래로 이집니다👇"
            </p>
            
            <div className="border-t border-slate-200 mt-6 pt-4 flex items-center justify-between text-slate-500">
               <div className="flex items-center gap-1.5"><Heart size={16} /> <span className="text-xs font-bold">14.2K</span></div>
               <div className="flex items-center gap-1.5"><MessageCircle size={16} /> <span className="text-xs font-bold">892</span></div>
               <div className="flex items-center gap-1.5"><Share2 size={16} /> <span className="text-xs font-bold">3.1K</span></div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Analysis */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Top Row Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: '바이럴 지수', value: '98/100', icon: <Award size={20} className="text-amber-500" /> },
              { label: '후킹 강도', value: '극강', icon: <Zap size={20} className="text-rose-500" /> },
              { label: '가독성 수준', value: '중2 수준', icon: <Target size={20} className="text-blue-500" /> },
              { label: '추정 체류시간', value: '45초', icon: <Clock size={20} className="text-teal-500" /> },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-center shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  {stat.icon}
                  <span className="text-xs font-bold text-slate-400">{stat.label}</span>
                </div>
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Deep Analysis Card */}
          <div className="bg-white border text-left border-slate-200 rounded-3xl p-6 shadow-sm flex-1">
            <h3 className="font-bold text-slate-800 text-lg mb-6">💡 복제 가능한 핵심 패턴</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
                <h4 className="text-sm font-bold text-rose-800 mb-1">1. [Pain Point] 자극형 도입부</h4>
                <p className="text-sm text-rose-600 leading-relaxed">
                  "디자인이 아니라 첫 3줄이 결정한다"며 기존 통념을 깨는 문장으로 독자의 궁금증을 폭발시켰습니다.
                </p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                <h4 className="text-sm font-bold text-emerald-800 mb-1">2. [Proof & Reward] 즉각적 보상 제시</h4>
                <p className="text-sm text-emerald-600 leading-relaxed">
                  "1시간 만에 30% 상승", "무료 템플릿 공개" 등 구체적 수치와 보상을 즉시 제시하여 이탈률을 0으로 만들었습니다.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                <h4 className="text-sm font-bold text-blue-800 mb-1">3. [Action] 체류시간 유도 기법</h4>
                <p className="text-sm text-blue-600 leading-relaxed">
                  "타래로 이어집니다"를 통해 스레드의 연쇄 읽기 특성을 완벽히 이해하고 다음 글로 강제 유도했습니다.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AnalysisReport;
