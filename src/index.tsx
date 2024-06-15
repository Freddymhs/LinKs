import { render } from "react-dom";
import React, { useState } from "react";
import "./global.scss";
import palabra from "./helpers";
import getFetchApiUrl from "./helpers";
console.log({ palabra });

const App = () => {
  return (
    <div className="App">
      <body>
        <div className="container">
          <h2>Temas de Interés</h2>
          <ul>
            <li className="parent open">
              <a href="#">Finanzas</a>
              <ul>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/b0b813be-3716-4a3a-98ec-786743f469ce"
                    target="_blank"
                  >
                    Gestión de Carteras(Profesor)
                  </a>
                </li>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/cfba9e46-a726-4eb0-953a-a9b38c631743"
                    target="_blank"
                  >
                    Inversión y riesgos (Profesor)
                  </a>
                </li>
              </ul>
            </li>
            <li className="parent open">
              <a href="#">Personal</a>
              <ul>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/fd770036-6515-4ee9-84c8-5e7d0fa089fb"
                    target="_blank"
                  >
                    Inglés (Active Recall)
                  </a>
                </li>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/a7b32cc8-1753-4a81-b616-48f608b8ad4c"
                    target="_blank"
                  >
                    Comunicación (Active Recall)
                  </a>
                </li>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/8693f8c3-83b3-4907-b6cb-d7d86bed72c3"
                    target="_blank"
                  >
                    Preguntas y Argumentos Efectivos (Socrático)
                  </a>
                </li>
              </ul>
            </li>
            <li className="parent open">
              <a href="#">Desarrollo de Software</a>
              <ul>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/2448df52-a98f-4429-ac0e-a4de66007e29"
                    target="_blank"
                  >
                    Desarrollo de Productos (Profesor)
                  </a>
                </li>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/174afce1-191a-4ab5-9090-b22b54316200"
                    target="_blank"
                  >
                    Desarrollador fullstack (Active Recall)
                  </a>
                </li>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/f6e8dc46-c10e-4634-80a0-4c4de6402557"
                    target="_blank"
                  >
                    JavaScript (socrático)
                  </a>
                </li>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/fd2ca721-d673-4a9b-91ef-47160d9856ca"
                    target="_blank"
                  >
                    SQL (Ejercicios)
                  </a>
                </li>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/a6c3c455-34e3-44a1-8833-4017c237716e"
                    target="_blank"
                  >
                    Gestión y Optimización de Bases de Datos(Active Recall)
                  </a>
                </li>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/68f823d4-a2eb-4011-b30c-8e872e289c65"
                    target="_blank"
                  >
                    Arquitectura de Software (Profesor)
                  </a>
                </li>
              </ul>
            </li>
            <li className="parent open">
              <a href="#">PYME</a>
              <ul>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/41f700d6-0c14-485f-8878-c516a919cc03"
                    target="_blank"
                  >
                    Emprendimiento (Asesor)
                  </a>
                </li>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/5212847f-d615-45ad-a1b2-d6ac94d20d8b"
                    target="_blank"
                  >
                    Creación de Startups y Escalamiento Empresarial(Profesor)
                  </a>
                </li>
              </ul>
            </li>
            <li className="parent open">
              <a href="#">Marketing</a>
              <ul>
                <li className="child">
                  <a
                    href="https://chatgpt.com/c/67d40b1a-6e4e-4090-b145-b37108de9e90"
                    target="_blank"
                  >
                    Estrategias Marketing Digital (Asesor)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </body>
    </div>
  );
};

render(<App />, document.getElementById("root"));
