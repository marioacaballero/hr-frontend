import { ActivityArea } from "@/utils/types/admin-dashboard";

export default function InfoForm({
  activityareas,
  set,
}: {
  activityareas: ActivityArea[];
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
      <section className="border-gray flex flex-col gap-10 border p-8">
        <p>Los campos con * son obligatorios</p>
        <div className="flex flex-col gap-20">
          <p className="text-xl">¿Qué puesto querés cubrir?*</p>
          <div className="flex gap-20">
            <label className="flex flex-col gap-2">
              Nombre del puesto*
              <input
                type="text"
                placeholder="Ingresa el nombre del puesto"
                className="border-gray w-96 rounded-lg border-2 p-3"
              />
            </label>
            <label className="flex flex-col gap-2">
              Cantidad de vacantes
              <input
                type="number"
                className="border-gray w-44 rounded-lg border-2 p-3"
              />
            </label>
          </div>
          <div className="flex gap-20">
            <label className="flex flex-col gap-2">
              Área del puesto*
              <select className="border-gray w-72 rounded-lg border-2 bg-white p-3">
                {activityareas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2">
              Subárea del puesto*
              <select className="border-gray w-80 rounded-lg border-2 bg-white p-3">
                <option>Selecciona una opción</option>
              </select>
            </label>
          </div>
        </div>
        {/* -------------------------------------------------------------- */}
        <hr className="my-6 w-80" />
        {/* -------------------------------------------------------------- */}
        <div className="flex flex-col gap-16">
          <p className="text-xl">¿Qué nivel de experiencia buscas?*</p>
          <div className="flex w-4/6 flex-wrap justify-items-center gap-8">
            <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
              <input type="checkbox" className="hidden" />
              Primer trabajo
            </label>
            <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
              <input type="checkbox" className="hidden" />
              Trainee/Pasante
            </label>
            <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
              <input type="checkbox" className="hidden" />
              Junior
            </label>
            <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
              <input type="checkbox" className="hidden" />
              Semi Senior
            </label>
            <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
              <input type="checkbox" className="hidden" />
              Jefe/Supervisor
            </label>
            <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
              <input type="checkbox" className="hidden" />
              Gerencia/Direccion
            </label>
            <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
              <input type="checkbox" className="hidden" />
              No requerido
            </label>
            <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
              <input type="checkbox" className="hidden" />
              Servicio independiente
            </label>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-16">
          <p className="text-xl">¿Donde se encuentra el lugar de trabajo?*</p>
          <label className="flex flex-col gap-2">
            País/ Provincia/ Ciudad*
            <input
              type="text"
              className="border-gray w-96 rounded-lg border-2 p-3"
            />
          </label>
        </div>
        <label className="flex flex-col">
          <p className="text-xl">¿En qué consiste el puesto?*</p>
          <textarea
            placeholder="Ingresa la descripción, objetivo, principales tareas y responsabilidades/requisitos"
            className="border-gray mt-4 h-60 w-2/3 rounded-lg border-2 p-3"
          ></textarea>
        </label>
        <p className="my-8 text-xl">¿Qué tipo de contratación ofreces?*</p>
        <div className="flex w-4/6 flex-wrap justify-items-center gap-8">
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Indeterminado
          </label>
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Temporal
          </label>
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Autonomo
          </label>
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Pasantía
          </label>
        </div>
        <p className="my-8 text-xl">¿Qué carga horario tiene el puesto?*</p>
        <div className="flex w-4/6 flex-wrap justify-items-center gap-8">
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Part time
          </label>
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Full time
          </label>
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Freelance
          </label>
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Por horas
          </label>
        </div>
        <p className="my-8 text-xl">
          ¿Qué modalidad de trabajo aplicaría al puesto?*
        </p>
        <div className="flex w-4/6 flex-wrap justify-items-center gap-8">
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Presencial
          </label>
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Remoto
          </label>
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Híbrido
          </label>
        </div>
        <p className="my-8 text-xl">
          ¿Cuál es el rango salarial de la oferta de empleo?
        </p>
        <div className="flex h-24 items-center gap-14">
          <label className="flex h-20 flex-col text-sm">
            <input
              type="text"
              className="border-gray w-80 rounded-lg border-2 p-3"
            />
            Ingresa solo números, sin puntos ni comas
          </label>
          <label className="flex h-20 items-center gap-2 pb-8">
            <input type="checkbox" />
            Mostrar el rango en el aviso
          </label>
        </div>
        <p className="my-8 text-xl">¿Querés recibir los CVs por email?*</p>
        <div className="flex w-4/6 flex-wrap justify-items-center gap-8">
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Si
          </label>
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            No, Gracias
          </label>
        </div>
        <p className="my-8 text-xl">
          ¿Querés mostrar el nombre de la organización en el aviso?*
        </p>
        <div className="flex w-4/6 flex-wrap justify-items-center gap-8">
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            Si
          </label>
          <label className="flex h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-azul-text shadow-sm shadow-gray-400 duration-300 hover:cursor-pointer hover:bg-verde-bg2">
            <input type="checkbox" className="hidden" />
            No, Gracias
          </label>
          <input
            type="text"
            placeholder="Default"
            className="border-gray w-80 rounded-lg border-2 p-3"
          />
        </div>
        <button
          type="button"
          className="my-6 rounded-lg bg-verde-loro-50 py-3 text-azul-text duration-300 hover:bg-verde-loro hover:shadow-md hover:shadow-gray-400"
          onClick={() => {
            set({ info: false, require: true, question: false });
          }}
        >
          Añadir y continuar
        </button>
      </section>
    </div>
  );
}
