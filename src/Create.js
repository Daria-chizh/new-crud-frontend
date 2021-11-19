import React, {useRef} from 'react';
import {useNavigate} from 'react-router';

const Create = () => {
  const inputRef = useRef(null);
  let navigate = useNavigate();

  const handleCloseWindow = () => {
      navigate("/");
  };

  const handleSaveButton = () => {
    const idValue = 0;
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
    <div className="content-post">
      <img src= "https://about-telegram.ru/wp-content/uploads/2018/03/zhivotnye-telegram.png" className="avatar" />
      <div className="close-window" onClick={handleCloseWindow}>×</div>
      <input type="text" className="content-container" name="text" ref={inputRef} />
      <button type="submit" className="create" onClick={handleSaveButton}>Опубликовать</button>
    </div>
  )
};
export default Create;
