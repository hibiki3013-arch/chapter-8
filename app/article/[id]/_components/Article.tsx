"use client"


import {useState, useEffect} from 'react';
import styles from './Article.module.css';
import { type MicroCmsPost } from '../../../_types/MicroCmsPost';
import Image from 'next/image';


export default function Article({id}: {id: string}) {


  const [post, setPost] = useState<MicroCmsPost | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetcher = async () => {
      try{
      const res = await fetch(`https://bd5itciz1l.microcms.io/api/v1/posts/${id}`, {
        headers: {
          'X-MICROCMS-API-KEY': 'G5ORi2gK4GJ3YfHhz73GuNNBSRvtB682CEbT'
        }
        });


      const data = await res.json()
      setPost(data);
    }catch(error) {
      console.error("データの取得に失敗しました:", error);
    }finally {
      setLoading(false);
    }
    };


    fetcher();
  }, [id]);


  if (loading) {
    return <div>記事を読み込み中...</div>;
  }


  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }


  const [year, month, day] = post.createdAt ? post.createdAt.split('T')[0].split('-') : ['----', '--', '--'];
  const formattedDate = `${year}/${month}/${day}`;
 
   return(
    <div>
    <Image src={post.thumbnail?.url ?? 'https://placehold.jp/800x400.png'} alt="記事の画像" width={800} height={400} className={styles.Img} priority unoptimized/>


      <div key={post.id} className={styles.PostCard}>


      <div className={styles.PostCardBetween}>
        <div className={styles.PostCardData}>{formattedDate}</div>


        <div className={styles.PostCardCategory}>
        {post.categories.map((category, index) => {
          return(
            <span key={index} className={styles.CategoryDetail}>{category.name}</span>
          )
        }
      )}
      </div>
      </div>


      <div className={styles.PostCardTitle}>
        APIで取得した{post.title}
      </div>


      <div className={styles.PostCardArticle} dangerouslySetInnerHTML={{ __html: post.content }} /></div>
     
    </div>  
);
}
