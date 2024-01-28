"use client";

import React from "react";

export default function InfoForm() {
  return (
    <div>
      <h2>Información del aviso</h2>
      <section>
        <p>Los campos con * son obligatorios</p>
        <div>
          <span>¿Qué puesto querés cubrir?*</span>
          <label>
            Nombre del puesto*
            <input type="text" placeholder="Ingresa el nombre del puesto" />
          </label>
          <label>
            Cantidad de vacantes
            <input type="number" />
          </label>
          <label className="flex flex-col">
            Área del puesto*
            <select>
              <option>Selecciona una opción</option>
            </select>
          </label>
          <label>
            Subárea del puesto*
            <select>
              <option>Selecciona una opción</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col">
          <span>¿Qué nivel de experiencia buscas?*</span>
          <div className="flex w-4/6 flex-wrap justify-items-center gap-8  ">
            <label className="border-#cbd5e1 rounded-md border-2 border-solid p-4">
              <input type="checkbox" />
              Primer trabajo
            </label>
            <label className="border-#cbd5e1 rounded-md border-2 border-solid p-4">
              <input type="checkbox" />
              Trainee/Pasante
            </label>
            <label className="border-#cbd5e1 rounded-md border-2 border-solid p-4">
              <input type="checkbox" />
              Junior
            </label>
            <label className="border-#cbd5e1 rounded-md border-2 border-solid p-4">
              <input type="checkbox" />
              Semi Senior
            </label>
            <label className="border-#cbd5e1 rounded-md border-2 border-solid p-4">
              <input type="checkbox" />
              Jefe/Supervisor
            </label>
            <label className="border-#cbd5e1 rounded-md border-2 border-solid p-4">
              <input type="checkbox" />
              Gerencia/Direccion
            </label>
            <label className="border-#cbd5e1 rounded-md border-2 border-solid p-4">
              <input type="checkbox" />
              No requerido
            </label>
            <label className="border-#cbd5e1 rounded-md border-2 border-solid p-4">
              <input type="checkbox" />
              Servicio independiente
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <span>¿Donde se encuentra el lugar de trabajo?*</span>
          <label className="flex flex-col">
            País/Provincia/Ciudad*
            <input type="text" />
          </label>
        </div>
        <label className="flex flex-col">
          <span>¿En qué consiste el puesto?*</span>
          <textarea placeholder="Ingresa la descripción, objetivo, principales tareas y responsabilidades/requisitos"></textarea>
        </label>
        <div className="flex flex-col">
          <span>¿Qué tipo de contratación ofreces?*</span>
          <label>
            <input type="checkbox" />
            Indeterminado
          </label>
          <label>
            <input type="checkbox" />
            Temporal
          </label>
          <label>
            <input type="checkbox" />
            Autonomo
          </label>
          <label>
            <input type="checkbox" />
            Pasantía
          </label>
        </div>
        <div className="flex flex-col">
          <span>¿Qué carga horario tiene el puesto?*</span>
          <label>
            <input type="checkbox" />
            Part time
          </label>
          <label>
            <input type="checkbox" />
            Full time
          </label>
          <label>
            <input type="checkbox" />
            Freelance
          </label>
          <label>
            <input type="checkbox" />
            Por horas
          </label>
        </div>
        <div className="flex flex-col">
          <span>¿Qué modalidad de trabajo aplicaría al puesto?*</span>
          <label>
            <input type="checkbox" />
            Presencial
          </label>
          <label>
            <input type="checkbox" />
            Remoto
          </label>
          <label>
            <input type="checkbox" />
            Híbrido
          </label>
        </div>
        <div className="flex flex-col">
          <span>¿Cuál es el rango salarial de la oferta de empleo?</span>
          <input
            type="text"
            placeholder="Ingresa solo números, sin puntos ni comas"
          />
          <label>
            <input type="checkbox" />
            Mostrar el rango en el aviso
          </label>
        </div>
        <div className="flex flex-col">
          <span>¿Querés recibir los CVs por email?*</span>
          <label>
            <input type="checkbox" />
            Si
          </label>
          <label>
            <input type="checkbox" />
            No
          </label>
        </div>
        <div className="flex flex-col">
          <span>
            ¿Querés mostrar el nombre de la organización en el aviso?*
          </span>
          <label>
            <input type="checkbox" />
            Si
          </label>
          <label>
            <input type="checkbox" />
            No, gracias
          </label>
          <input type="text" placeholder="Default" />
        </div>
        <button>Añadir y continuar</button>
      </section>
    </div>
  );
}
