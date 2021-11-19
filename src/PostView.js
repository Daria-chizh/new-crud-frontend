import { useParams } from 'react-router-dom';
import PostNew from './PostNew';
import React, { useEffect, useState } from 'react';

const PostView = () => {
  const params = useParams();
  const [userData = [], setUserData] = useState();

  useEffect(() => {
    fetch(`http://localhost:7777/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [params.id]);

  return (
    <PostNew item={userData} />
  );
};

export default PostView;
