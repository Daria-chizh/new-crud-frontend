import React from 'react';
import {useNavigate} from 'react-router';

const Post = (props) => {
  const { item } = props;
  const { id , content, created } = item;
  let navigate = useNavigate();

  const handleClickPosts = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="content" onClick={handleClickPosts}>
      <img src= "https://about-telegram.ru/wp-content/uploads/2018/03/zhivotnye-telegram.png" className="avatar" />
      <div className="info">
        <div className="username">Сиба-ину</div>
        <div className="id">{id}</div>
      </div>
      <span className="created">{created}</span>
      <div className="content-container">{content}</div>
    </div>
  )
};

export default Post;
