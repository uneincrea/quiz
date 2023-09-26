import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRouter } from './AppRouter';  // AppRouter に名前を変更

// React 18 の Concurrent Mode を使用して、アプリケーションをルート要素にレンダリング
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);
