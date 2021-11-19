import React, { useState, useRef } from 'react';
import PostNew from './PostNew';
import {useNavigate, useParams} from 'react-router-dom';

const Edit = (props) => {
  const { item } = props;
  const { content } = item;
  const params = useParams();
  const inputRef = useRef(null);
  let navigate = useNavigate();
  const [close, setClose] = useState(false);

  const handleCloseWindow = () => {
    setClose(true);
  };

  if (close === true) {
    return (
      <PostNew item={item}  />
    )
  }

  const handleSaveButton = () => {
    const idValue = params.id;
    const currentText =  inputRef.current.value;
    let body = { id: Number(idValue), content: currentText };

    fetch(`http://localhost:7777/posts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    navigate("/");
  };

  return (
    <div className="edit-content">
      <div className="edit">
        <div className="edit-text">Редактировать публикацию</div>
        <div className="close" onClick={handleCloseWindow}>×</div>
      </div>

      <div className="info-border">
        <img src= "https://about-telegram.ru/wp-content/uploads/2018/03/zhivotnye-telegram.png" className="avatar" />
        <span className="content-container">{content}</span>
      </div>

      <div className="text">
        <input type="text" className="input-text" name="text" ref={inputRef} />
        <button className="save-button" onClick={handleSaveButton}>Cохранить</button>
      </div>
    </div>
  )
};

export default Edit;
