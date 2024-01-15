"use client";

import React from "react";

export default function InfoForm() {
  return (
    <div>
      <label>
        Área del puesto*
        <select>
          <option>Selecciona una opción</option>
        </select>
      </label>
      <div>
        ¿Qué nivel de experiencia buscas?*
        <label>
          <input type="checkbox" />
          Primer trabajo
        </label>
        <label>
          <input type="checkbox" />
          Trainee/Pasante
        </label>
        <label>
          <input type="checkbox" />
          Junior
        </label>
        <label>
          <input type="checkbox" />
          Semi Senior
        </label>
      </div>
      <div>
        ¿Donde se encuentra el lugar de trabajo?*
        <label>
          País/Provincia/Ciudad*
          <input type="text" />
        </label>
      </div>
      <label>
        ¿En qué consiste el puesto?*
        <textarea placeholder="Ingresa la descripción, objetivo, principales tareas y responsabilidades/requisitos"></textarea>
      </label>
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
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
