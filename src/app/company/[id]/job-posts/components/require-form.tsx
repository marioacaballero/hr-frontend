export default function RequireForm({
  set,
}: {
  set: React.Dispatch<
    React.SetStateAction<{
      info: boolean;
      require: boolean;
      question: boolean;
    }>
  >;
}) {
  return (
    <div>
      <section className="border-gray flex flex-col gap-20 border-t p-8">
        <p className="mt-10">
          Los requisitos que cargues{" "}
          <strong>no se mostraran en el aviso</strong>. Solo actuarán como
          pre-filtros en el listado de postulaciones agrupándote a los
          candidatos que los cumplan
        </p>
        <label className="flex flex-col gap-4">
          <p>Lugar de residencia*</p>
          <input
            type="text"
            placeholder="País/ Provincia/ Ciudad"
            className="border-gray w-2/3 rounded-lg border-2 p-3"
          />
        </label>
        <div>
          <p>Experiencia mínima*</p>
          <label className="mt-6 flex items-center gap-8">
            <input
              type="text"
              placeholder="Ej. 5"
              className="border-gray w-44 rounded-lg border-2 p-3"
            />
            años
          </label>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">Nivel educativo *</h2>
            <p>Selecciona el nivel mínimo requerido</p>
            <label className="flex gap-10">
              <select className="border-gray bg w-60 rounded-lg border-2 bg-white p-3">
                <option>Selecciona una opción</option>
                <option>Primario</option>
                <option>Secundario</option>
              </select>
              <select className="border-gray bg w-60 rounded-lg border-2 bg-white p-3">
                <option>Estado</option>
                <option>Incompleto</option>
                <option>Finalizado</option>
              </select>
            </label>
          </div>
        </div>
        <button
          type="button"
          className="my-6 w-fit self-center rounded-lg bg-verde-loro-50 px-8 py-3 text-azul-text duration-300 hover:bg-verde-loro hover:shadow-md hover:shadow-gray-400"
          onClick={() => {
            set({ info: false, require: false, question: true });
          }}
        >
          Añadir y continuar
        </button>
      </section>
    </div>
  );
}
