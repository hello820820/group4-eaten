import MyPostList from './MyPostList'
import { useState, useEffect } from 'react';
import {MyPosts} from '../../mock.const';
import {MyPageHeader} from './MyPageHeader';
import {H1} from './styles'
import { getMyPosts } from '../../api/myPage/myPost';
import { PostType } from '../post';


export const MyPage = () => {

  const [myPosts, setMyPosts] = useState<PostType[]>([]);
  //const userId = localStorage.getItem('userId')
  const userId = '12345'

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const posts = await getMyPosts(userId);
        setMyPosts(posts);
      } catch (error) {
        console.error('Error fetching my posts:', error);
      }
    };

    fetchMyPosts();
  }, [userId]);


  return (
    <div>
      <div>
        <MyPageHeader />
      </div>
      <div>
        <H1>My Page</H1>
        <MyPostList posts={MyPosts} />
        <MyPostList posts={myPosts} />
      </div>
    </div>
  );
};
