"use client";

export default function RequireForm() {
  return (
    <div>
      <h2>Requisitos</h2>
      <section>
        <p>
          Los requisitos que cargues{" "}
          <strong>no se mostraran en el aviso</strong>. Solo actuarán como
          pre-filtros en el listado de postulaciones agrupándote a los
          candidatos que los cumplan
        </p>
        <span>Lugar de residencia*</span>
        <input type="text" placeholder="País/Provincia/Ciudad" />
        <span>Experiencia mínima*</span>
        <label>
          <input type="text" placeholder="Años" />
          años
        </label>
        <span>Nivel educativo*</span>
        <p>Selecciona el nivel mínimo requerido</p>
        <select>
          <option>Selecciona una opción</option>
          <option>Primario</option>
          <option>Secundario</option>
        </select>
        <select>
          <option>Estado</option>
          <option>Incompleto</option>
          <option>Finalizado</option>
        </select>
        <button>Añadir y continuar</button>
      </section>
    </div>
  );
}
