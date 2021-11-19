import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Posts from './Posts';
import PostView from './PostView';
import Create from './Create';

export default function App() {
  return (
    <Router>
      <div>
        <div className="page">
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts/new" element={<Create />} />
            <Route path="/posts/:id" element={<PostView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

