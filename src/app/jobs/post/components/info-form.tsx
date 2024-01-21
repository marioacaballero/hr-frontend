"use client";

import React from "react";

export default function InfoForm() {
  return (
    <div>
      <label className="flex flex-col">
        Área del puesto*
        <select>
          <option>Selecciona una opción</option>
        </select>
      </label>
      <div className="flex flex-col">
        ¿Qué nivel de experiencia buscas?*
        <div className="flex flex-wrap gap-8 w-4/6 justify-items-center  ">

        <label className="p-4 border-solid border-2 border-#cbd5e1 rounded-md p-1">
          <input type="checkbox" />
          Primer trabajo
        </label>
        <label className="p-4 border-solid border-2 border-#cbd5e1 rounded-md p-1">
          <input type="checkbox" />
          Trainee/Pasante
        </label>
        <label className="p-4 border-solid border-2 border-#cbd5e1 rounded-md p-1">
          <input type="checkbox" />
          Junior
        </label>
        <label className="p-4 border-solid border-2 border-#cbd5e1 rounded-md p-1">
          <input type="checkbox" />
          Semi Senior
        </label>
        <label className="p-4 border-solid border-2 border-#cbd5e1 rounded-md p-1">
          <input type="checkbox" />
          Jefe/Supervisor
        </label>
        <label className="p-4 border-solid border-2 border-#cbd5e1 rounded-md p-1">
          <input type="checkbox" />
          Gerencia/Direccion
        </label>
        <label className="p-4 border-solid border-2 border-#cbd5e1 rounded-md p-1">
          <input type="checkbox" />
          No requerido
        </label>
        <label className="p-4 border-solid border-2 border-#cbd5e1 rounded-md p-1">
          <input type="checkbox" />
          Servicio independiente
        </label>
        </div>
      </div>
      <div className="flex flex-col">
        ¿Donde se encuentra el lugar de trabajo?*
        <label className="flex flex-col">
          País/Provincia/Ciudad*
          <input type="text" />
        </label>
      </div>
      <label className="flex flex-col">
        ¿En qué consiste el puesto?*
        <textarea placeholder="Ingresa la descripción, objetivo, principales tareas y responsabilidades/requisitos"></textarea>
      </label>
      <div className="flex flex-col">
        ¿Qué tipo de contratación ofreces?*
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
        ¿Qué carga horario tiene el puesto?*
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
        ¿Qué modalidad de trabajo aplicaría al puesto?*
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
        ¿Cuál es el rango salarial de la oferta de empleo?
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
        ¿Querés recibir los CVs por email?*
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
        ¿Querés mostrar el nombre de la organización en el aviso?*
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
    </div>
  );
}
