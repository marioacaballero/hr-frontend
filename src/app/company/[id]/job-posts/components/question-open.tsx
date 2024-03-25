export function QuestionOpen() {
  return (
    <div className="flex flex-col">
      <p>Pregunta Abierta</p>
      <textarea
        placeholder="Este tipo de preguntas no tiene un tipo de respuesta predeterminada"
        className="mt-5 min-h-60 w-full rounded-lg border border-gray-500 p-4"
      ></textarea>
      <span className="mt-4 self-end text-sm">(máximo 200 caracteres)</span>
    </div>
  );
}
