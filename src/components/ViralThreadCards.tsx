import React from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';

interface ThreadPost {
  id: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  content: string;
  likes: number;
  replies: number;
  publishedAt: string;
  tags: string[];
}

const DUMMY_POSTS: ThreadPost[] = [
  {
    id: 'post_1',
    authorName: '김개발',
    authorHandle: 'dev_kim',
    authorAvatar: 'https://i.pravatar.cc/150?u=dev_kim',
    content: '요즘 핫한 프론트엔드 프레임워크들 분석해봤습니다. 1주일동안 삽질하면서 느낀 점 타래로 풀어봅니다. 결론부터 말하자면 여전히 리액트가 생태계 깡패네요...',
    likes: 12450,
    replies: 342,
    publishedAt: '2시간 전',
    tags: ['개발', '프론트엔드', '인사이트']
  },
  {
    id: 'post_2',
    authorName: '이마케터',
    authorHandle: 'marketer_lee',
    authorAvatar: 'https://i.pravatar.cc/150?u=marketer_lee',
    content: '전환율 300% 올린 랜딩페이지 카피라이팅 비밀 5가지 \n\n다들 아시겠지만 고객은 우리 제품의 기능에 관심 없습니다. 진짜 중요한 건...',
    likes: 28900,
    replies: 1045,
    publishedAt: '5시간 전',
    tags: ['마케팅', '카피라이팅', '전환율']
  },
  {
    id: 'post_3',
    authorName: '박기획',
    authorHandle: 'pm_park',
    authorAvatar: 'https://i.pravatar.cc/150?u=pm_park',
    content: '요즘 IT씬에서 가장 구하기 힘든 인재 특징: "문제를 정의할 줄 아는 사람". 코딩 잘하고 말 잘하는 사람은 많은데, 정작 무엇을 풀어야 할지 아는 사람은 극소수입니다.',
    likes: 15200,
    replies: 890,
    publishedAt: '12시간 전',
    tags: ['기획', '인사이트', '커리어']
  }
];

const formatNumber = (num: number) => {
  return num >= 10000 ? `${(num / 10000).toFixed(1)}만` : num.toLocaleString();
};

const ViralThreadCards: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 font-bold rounded-full text-sm mb-4 border border-green-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            실시간 데이터 수집 중
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            오늘 터진 스레드 모아보기
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            타겟 계정의 피드를 실시간으로 모니터링하여, 
            <span className="font-semibold text-slate-700"> 좋아요 1만 개 이상</span>의 압도적 반응을 이끌어낸 콘텐츠만 큐레이션합니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_POSTS.map((post) => (
          <div key={post.id} className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer overflow-hidden">
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Author Info */}
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <img src={post.authorAvatar} alt={post.authorName} className="w-12 h-12 rounded-full border border-slate-100 shadow-sm" />
              <div>
                <div className="font-bold text-slate-900">{post.authorName}</div>
                <div className="text-sm text-slate-400">@{post.authorHandle} · {post.publishedAt}</div>
              </div>
            </div>

            {/* Content Preview */}
            <p className="text-slate-700 leading-relaxed mb-6 flex-1 line-clamp-4 relative z-10 whitespace-pre-wrap">
              {post.content}
            </p>

            {/* Engagement Stats */}
            <div className="border-t border-slate-100 pt-5 mt-auto relative z-10 flex items-center justify-between">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-pink-500 bg-pink-50 px-2 py-1 rounded-lg">
                  <Heart size={16} className="fill-current" />
                  <span className="font-bold text-sm tracking-tight">{formatNumber(post.likes)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-500 bg-blue-50 px-2 py-1 rounded-lg">
                  <MessageCircle size={16} className="fill-current" />
                  <span className="font-bold text-sm tracking-tight">{formatNumber(post.replies)}</span>
                </div>
              </div>
              <div className="text-slate-300 group-hover:text-slate-800 transition-colors">
                <ExternalLink size={20} />
              </div>
            </div>

            {/* Tags */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-1 items-end">
              {post.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-white/80 backdrop-blur border border-slate-100 text-slate-500 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViralThreadCards;
