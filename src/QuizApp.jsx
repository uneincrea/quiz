import React, { useState } from "react";
import { QuizInterface } from "./QuizInterface";  // Componentの名前を変更

export const QuizApp = () => {  // コンポーネントの名前を変更
  const [selectedLevel, setSelectedLevel] = useState(null);  // 変数名を変更
  const totalLevels = 10;  // 変数名を変更し、コメントを削除

  // ユーザーがクイズレベルを選択するUIを表示する関数
  const renderLevelSelection = () => (
    <>
      <h1>日本語クイズ</h1>
      <h2>レベルを選択してください</h2>
      {Array.from({ length: totalLevels }).map((_, idx) => (
        <button key={idx} onClick={() => setSelectedLevel(`${idx + 1}`)}>
          {`Level${idx + 1}`}
        </button>
      ))}
    </>
  );

  return (
    <div className="App">
      <main>
        {!selectedLevel ? renderLevelSelection() : (
          <QuizInterface level={selectedLevel} onBack={() => setSelectedLevel(null)} />
        )}
      </main>
    </div>
  );

};

