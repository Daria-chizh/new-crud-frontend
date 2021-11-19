import React, {useEffect, useState} from 'react';
import Post from './Post';
import {useNavigate} from 'react-router';

export default function Posts() {
  const [userData = [], setUserData] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:7777/posts`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const handleChangeSave = () => {
    navigate("/posts/new");
  };

  return (
    <div className="total-container">
      <div className="text">
        <button type="submit" className="button" onClick={handleChangeSave}>Создать пост</button>
        {
          userData.map((item) => <Post item={item} key={item.id} />)
        }
      </div>
    </div>
  )
}

