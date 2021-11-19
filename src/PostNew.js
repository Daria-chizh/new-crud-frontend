import Edit from './Edit';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostNew = (props) => {
  const { item, text  } = props;
  const { id , content, created } = item;
  const [editing, setEditing] = useState(false);
  const params = useParams();
  let navigate = useNavigate();

  const handleChangeEdit = () => {
    setEditing(true);
  };

  if (editing === true) {
    return (
      <Edit item={item} name={text} />
    )
  }

  const handChangeDelete = () => {
    fetch(`http://localhost:7777/posts/${params.id}`, { method: 'delete' }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="content">
      <img src="https://about-telegram.ru/wp-content/uploads/2018/03/zhivotnye-telegram.png" className="avatar" />
      <div className="info">
        <div className="username">Сиба-ину</div>
        <div className="id">{id}</div>
      </div>
      <span className="created">{created}</span>
      <div className="content-container">{content}</div>

      <div className="buttons">
        <button className="change" onClick={handleChangeEdit}>Изменить</button>
        <button className="delete" onClick={handChangeDelete}>Удалить</button>
      </div>
    </div>
  )
};

export default PostNew;

