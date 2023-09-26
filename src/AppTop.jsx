// AppTop.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const AppTop = () => {
  return (
    <div>
      <h1>日本語アプリ</h1>
      <nav>
        <Link to="/chapter">章一覧</Link>
        <br />
        <Link to="/quiz">クイズ一覧</Link>
        <br />
        <Link to="/exam">過去の試験一覧</Link>
      </nav>
    </div>
  );
};


