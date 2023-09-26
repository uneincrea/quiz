import React, { useState } from "react";
import { ChapterInterface } from "./ChapterInterface";  

export const ChapterApp = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);  
  const totalChapters = 10;  

  // ユーザーが章を選択するUIを表示する関数
  const renderChapterSelection = () => (
    <>
      <h1>章の一覧</h1>
      <h2>章を選択してください</h2>
      {Array.from({ length: totalChapters }).map((_, idx) => (
        <button key={idx} onClick={() => setSelectedChapter(`${idx + 1}`)}>
          {`Chapter ${idx + 1}`}
        </button>
      ))}
    </>
  );

  return (
    <div className="ChapterApp">
      <main>
        {!selectedChapter ? renderChapterSelection() : (
          <ChapterInterface chapter={selectedChapter} onBack={() => setSelectedChapter(null)} />
        )}
      </main>
    </div>
  );
};
