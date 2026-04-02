import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export interface ViralThread {
  id: string;
  author_name: string;
  author_handle: string;
  author_avatar: string;
  content: string;
  likes_count: number;
  replies_count: number;
  published_at: string;
  tags: string[];
}

/**
 * Firebase Firestore의 'viral_posts' 컬렉션에서 
 * 포스트를 가져와 최신순으로 정렬하는 함수입니다.
 */
export const fetchViralThreads = async (): Promise<ViralThread[]> => {
  try {
    const q = query(collection(db, 'viral_posts'), orderBy('published_at', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const posts: ViralThread[] = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() } as ViralThread);
    });
    
    return posts;
  } catch (err) {
    console.error("Firestore Fetch Exception:", err);
    return [];
  }
};
