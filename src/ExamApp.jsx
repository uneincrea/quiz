import React, { useState } from "react";
import { ExamInterface } from "./ExamInterface";  // コンポーネント名を適切に変更

export const ExamApp = () => {  // コンポーネントの名前を変更
  const [selectedExam, setSelectedExam] = useState(null);  
  const totalExams = 5;  // 過去問の数は5と仮定します

  // ユーザーが過去の試験を選択するUIを表示する関数
  const renderExamSelection = () => (
    <>
      <h1>過去の日本語試験</h1>
      <h2>試験を選択してください</h2>
      {Array.from({ length: totalExams }).map((_, idx) => (
        <button key={idx} onClick={() => setSelectedExam(`${idx + 1}`)}>
          {`試験${idx + 1}`}
        </button>
      ))}
    </>
  );

  return (
    <div className="PastExamsApp"> 
      <main>
        {!selectedExam ? renderExamSelection() : (
          <ExamInterface examNumber={selectedExam} onBack={() => setSelectedExam(null)} />
        )}
      </main>
    </div>
  );

};
