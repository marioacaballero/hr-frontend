import { useState } from "react";
import { QuestionOpen } from "./question-open";
import { QuestionClose } from "./question-close";

export function QuestionNew() {
  const [showQuestion, setShowQuestion] = useState({
    show: true,
    open: false,
    close: false,
  });
  return (
    <div>
      {showQuestion.show && (
        <p className="mb-6 font-semibold">Nueva pregunta</p>
      )}
      <div
        className={"flex gap-6 p-2" + (!showQuestion.show && " justify-center")}
      >
        <button
          type="button"
          className={
            "hover:bg-verde-linea-15 rounded-full border border-black px-3 py-1 text-sm" +
            (showQuestion.open && " bg-verde-linea-15 text-xl")
          }
          onClick={() => {
            setShowQuestion({ show: false, open: true, close: false });
          }}
        >
          Abiertas
        </button>
        <button
          type="button"
          className={
            "hover:bg-verde-linea-15 rounded-full border border-black px-3 py-1 text-sm" +
            (showQuestion.close && " bg-verde-linea-15 text-xl")
          }
          onClick={() => {
            setShowQuestion({ show: false, open: false, close: true });
          }}
        >
          Cerradas
        </button>
      </div>
      {showQuestion.open && <QuestionOpen />}
      {showQuestion.close && <QuestionClose />}
    </div>
  );
}
