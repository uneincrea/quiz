// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppTop } from './AppTop';
import { ChapterApp } from './ChapterApp';
import { QuizApp } from './QuizApp';
import { ExamApp } from './ExamApp';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppTop />} />
        <Route path="/chapter" element={<ChapterApp />} />
        <Route path="/quiz" element={<QuizApp />} />
        <Route path="/exam" element={<ExamApp />} />
      </Routes>
    </Router>
  );
};
