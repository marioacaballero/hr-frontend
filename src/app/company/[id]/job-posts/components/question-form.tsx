import { useState } from "react";
import { QuestionNew } from "./question-new";

export default function QuestionForm() {
  const [questions, setQuestions] = useState(false);
  return (
    <div>
      <section className="border-gray flex flex-col gap-14 border-t px-8 py-32">
        <h2 className="text-3xl font-semibold">Preguntas de filtrado</h2>
        <p className="mb-10 text-2xl">
          Para hacer más ágil el proceso te sugerimos no incluir más de 2
          preguntas
        </p>
        {questions && <QuestionNew />}
        {!questions && (
          <button
            type="button"
            className="hover:bg-verde-bg3 w-fit self-center rounded-lg border border-verde-loro px-8 py-3 text-verde-loro duration-75"
            onClick={() => {
              setQuestions(true);
            }}
          >
            Añadir pregunta
          </button>
        )}
        <button className="w-fit self-center rounded-lg bg-verde-loro-50 px-8 py-3 text-azul-text duration-300 hover:bg-verde-loro hover:shadow-md hover:shadow-gray-400">
          Publicar aviso
        </button>
      </section>
    </div>
  );
}
