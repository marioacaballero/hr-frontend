export function QuestionClose() {
  return (
    <div className="flex flex-col">
      <p>Pregunta Cerrada</p>
      <textarea
        placeholder="Este tipo de preguntas tiene un tipo de respuesta predeterminada"
        className="mt-5 min-h-60 w-full rounded-lg border border-gray-500 p-4"
      ></textarea>
      <span className="mt-4 self-end text-sm">(máximo 200 caracteres)</span>
      <label className="mt-6 flex flex-col gap-4">
        Respuesta 1
        <input
          type="text"
          placeholder="Ingresa tu respuesta"
          className="rounded-lg border border-gray-500 p-4"
        />
      </label>
      <label className="mt-6 flex flex-col gap-4">
        Respuesta 2
        <input
          type="text"
          placeholder="Ingresa tu respuesta"
          className="rounded-lg border border-gray-500 p-4"
        />
      </label>
      <label className="mt-6 flex flex-col gap-4">
        Respuesta 3
        <input
          type="text"
          placeholder="Ingresa tu respuesta"
          className="rounded-lg border border-gray-500 p-4"
        />
      </label>
    </div>
  );
}
