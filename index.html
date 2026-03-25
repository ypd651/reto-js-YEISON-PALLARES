// Arreglos principales
let nombres = [];
let notas = []; // matriz 10x3

// Evento botón
document.getElementById("agregar").addEventListener("click", agregarAlumno);

function agregarAlumno() {
  if (nombres.length >= 10) {
    alert("Ya se ingresaron los 10 alumnos.");
    return;
  }

  let nombre = document.getElementById("nombre").value.trim();
  let n1 = parseFloat(document.getElementById("nota1").value);
  let n2 = parseFloat(document.getElementById("nota2").value);
  let n3 = parseFloat(document.getElementById("nota3").value);

  // Validación
  if (!nombre || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    alert("Completa todos los campos correctamente.");
    return;
  }

  if ([n1, n2, n3].some(n => n < 0 || n > 100)) {
    alert("Las notas deben estar entre 0 y 100.");
    return;
  }

  nombres.push(nombre);
  notas.push([n1, n2, n3]);

  limpiarCampos();
  mostrarResultados();
}

// Funciones auxiliares
const promedio = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

function calcularPromediosAlumnos() {
  return notas.map(n => promedio(n));
}

function promedioCertamen(index) {
  return promedio(notas.map(n => n[index]));
}

function promedioGeneralCurso() {
  return promedio(calcularPromediosAlumnos());
}

function contarEstados(promedios) {
  let aprobados = promedios.filter(p => p >= 55).length;
  let reprobados = promedios.length - aprobados;
  return { aprobados, reprobados };
}

function ordenarAlumnos(promedios) {
  return nombres.map((nombre, i) => ({
    nombre,
    promedio: promedios[i]
  }))
  .sort((a, b) => b.promedio - a.promedio);
}

function mostrarResultados() {
  let resultado = document.getElementById("resultado");

  let promedios = calcularPromediosAlumnos();
  let estado = contarEstados(promedios);
  let ordenados = ordenarAlumnos(promedios);

  let html = "<h2>Resultados</h2>";

  // Tabla alumnos
  html += "<table border='1' width='100%'><tr><th>Nombre</th><th>C1</th><th>C2</th><th>C3</th><th>Promedio</th></tr>";

  nombres.forEach((nombre, i) => {
    let prom = promedios[i];
    let clase = prom >= 55 ? "aprobado" : "reprobado";

    html += `
      <tr>
        <td>${nombre}</td>
        <td>${notas[i][0]}</td>
        <td>${notas[i][1]}</td>
        <td>${notas[i][2]}</td>
        <td class="${clase}">${prom.toFixed(2)}</td>
      </tr>
    `;
  });

  html += "</table>";

  // Promedios curso
  html += `
    <h3>Promedios del Curso</h3>
    <p>Certamen 1: ${promedioCertamen(0).toFixed(2)}</p>
    <p>Certamen 2: ${promedioCertamen(1).toFixed(2)}</p>
    <p>Certamen 3: ${promedioCertamen(2).toFixed(2)}</p>
    <p><strong>Promedio General: ${promedioGeneralCurso().toFixed(2)}</strong></p>
  `;

  // Estados
  html += `
    <h3>Estado</h3>
    <p class="aprobado">Aprobados: ${estado.aprobados}</p>
    <p class="reprobado">Reprobados: ${estado.reprobados}</p>
  `;

  // Ordenados
  html += "<h3>Ranking</h3><ol>";
  ordenados.forEach(a => {
    html += `<li>${a.nombre} - ${a.promedio.toFixed(2)}</li>`;
  });
  html += "</ol>";

  resultado.innerHTML = html;
}

function limpiarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
}
    
