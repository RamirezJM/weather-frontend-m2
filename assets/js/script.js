const ciudades = [
  {
    id: 1,
    nombre: "Santiago",
    icono: "despejado",
    temperatura: 27,
    estado: "despejado",
    humedad: 40,
    viento: 12,
    pronosticoSemana: [
      { dia: "Hoy", icono: "despejado", temperatura: 27, estado: "despejado" },
      { dia: "Día 2", icono: "parcial", temperatura: 25, estado: "parcial" },
      { dia: "Día 3", icono: "nublado", temperatura: 22, estado: "nublado" },
      { dia: "Día 4", icono: "despejado", temperatura: 26, estado: "despejado" },
      { dia: "Día 5", icono: "lluvia", temperatura: 19, estado: "lluvia" },
      { dia: "Día 6", icono: "parcial", temperatura: 24, estado: "parcial" },
      { dia: "Día 7", icono: "despejado", temperatura: 28, estado: "despejado" }
    ]
  },
  {
    id: 2,
    nombre: "Nueva York",
    icono: "nublado",
    temperatura: 12,
    estado: "nublado",
    humedad: 55,
    viento: 20,
    pronosticoSemana: [
      { dia: "Hoy", icono: "nublado", temperatura: 12, estado: "nublado" },
      { dia: "Día 2", icono: "lluvia", temperatura: 10, estado: "lluvia" },
      { dia: "Día 3", icono: "parcial", temperatura: 14, estado: "parcial" },
      { dia: "Día 4", icono: "despejado", temperatura: 18, estado: "despejado" },
      { dia: "Día 5", icono: "nublado", temperatura: 15, estado: "nublado" },
      { dia: "Día 6", icono: "lluvia", temperatura: 11, estado: "lluvia" },
      { dia: "Día 7", icono: "parcial", temperatura: 16, estado: "parcial" }
    ]
  },
  {
    id: 3,
    nombre: "Londres",
    icono: "lluvia",
    temperatura: 9,
    estado: "lluvia",
    humedad: 80,
    viento: 18,
    pronosticoSemana: [
      { dia: "Hoy", icono: "lluvia", temperatura: 9, estado: "lluvia" },
      { dia: "Día 2", icono: "nublado", temperatura: 10, estado: "nublado" },
      { dia: "Día 3", icono: "lluvia", temperatura: 8, estado: "lluvia" },
      { dia: "Día 4", icono: "parcial", temperatura: 12, estado: "parcial" },
      { dia: "Día 5", icono: "lluvia", temperatura: 7, estado: "lluvia" },
      { dia: "Día 6", icono: "nublado", temperatura: 11, estado: "nublado" },
      { dia: "Día 7", icono: "lluvia", temperatura: 9, estado: "lluvia" }
    ]
  },
  {
    id: 4,
    nombre: "Johannesburgo",
    icono: "despejado",
    temperatura: 29,
    estado: "despejado",
    humedad: 30,
    viento: 10,
    pronosticoSemana: [
      { dia: "Hoy", icono: "despejado", temperatura: 29, estado: "despejado" },
      { dia: "Día 2", icono: "parcial", temperatura: 27, estado: "parcial" },
      { dia: "Día 3", icono: "nublado", temperatura: 25, estado: "nublado" },
      { dia: "Día 4", icono: "despejado", temperatura: 30, estado: "despejado" },
      { dia: "Día 5", icono: "lluvia", temperatura: 21, estado: "lluvia" },
      { dia: "Día 6", icono: "parcial", temperatura: 26, estado: "parcial" },
      { dia: "Día 7", icono: "despejado", temperatura: 31, estado: "despejado" }
    ]
  },
  {
    id: 5,
    nombre: "Beijing",
    icono: "nublado",
    temperatura: 14,
    estado: "nublado",
    humedad: 48,
    viento: 14,
    pronosticoSemana: [
      { dia: "Hoy", icono: "nublado", temperatura: 14, estado: "nublado" },
      { dia: "Día 2", icono: "lluvia", temperatura: 12, estado: "lluvia" },
      { dia: "Día 3", icono: "parcial", temperatura: 16, estado: "parcial" },
      { dia: "Día 4", icono: "nublado", temperatura: 13, estado: "nublado" },
      { dia: "Día 5", icono: "despejado", temperatura: 18, estado: "despejado" },
      { dia: "Día 6", icono: "parcial", temperatura: 17, estado: "parcial" },
      { dia: "Día 7", icono: "lluvia", temperatura: 11, estado: "lluvia" }
    ]
  },
  {
    id: 6,
    nombre: "San Francisco",
    icono: "parcial",
    temperatura: 17,
    estado: "parcial",
    humedad: 60,
    viento: 15,
    pronosticoSemana: [
      { dia: "Hoy", icono: "parcial", temperatura: 17, estado: "parcial" },
      { dia: "Día 2", icono: "nublado", temperatura: 16, estado: "nublado" },
      { dia: "Día 3", icono: "lluvia", temperatura: 13, estado: "lluvia" },
      { dia: "Día 4", icono: "parcial", temperatura: 18, estado: "parcial" },
      { dia: "Día 5", icono: "despejado", temperatura: 21, estado: "despejado" },
      { dia: "Día 6", icono: "parcial", temperatura: 17, estado: "parcial" },
      { dia: "Día 7", icono: "nublado", temperatura: 15, estado: "nublado" }
    ]
  },
  {
    id: 7,
    nombre: "Budapest",
    icono: "parcial",
    temperatura: 11,
    estado: "parcial",
    humedad: 65,
    viento: 9,
    pronosticoSemana: [
      { dia: "Hoy", icono: "parcial", temperatura: 11, estado: "parcial" },
      { dia: "Día 2", icono: "nublado", temperatura: 9, estado: "nublado" },
      { dia: "Día 3", icono: "lluvia", temperatura: 7, estado: "lluvia" },
      { dia: "Día 4", icono: "parcial", temperatura: 12, estado: "parcial" },
      { dia: "Día 5", icono: "nublado", temperatura: 10, estado: "nublado" },
      { dia: "Día 6", icono: "despejado", temperatura: 13, estado: "despejado" },
      { dia: "Día 7", icono: "lluvia", temperatura: 8, estado: "lluvia" }
    ]
  },
  {
    id: 8,
    nombre: "El Cairo",
    icono: "despejado",
    temperatura: 33,
    estado: "despejado",
    humedad: 25,
    viento: 20,
    pronosticoSemana: [
      { dia: "Hoy", icono: "despejado", temperatura: 33, estado: "despejado" },
      { dia: "Día 2", icono: "despejado", temperatura: 34, estado: "despejado" },
      { dia: "Día 3", icono: "parcial", temperatura: 30, estado: "parcial" },
      { dia: "Día 4", icono: "nublado", temperatura: 28, estado: "nublado" },
      { dia: "Día 5", icono: "despejado", temperatura: 35, estado: "despejado" },
      { dia: "Día 6", icono: "parcial", temperatura: 32, estado: "parcial" },
      { dia: "Día 7", icono: "despejado", temperatura: 36, estado: "despejado" }
    ]
  },
  {
    id: 9,
    nombre: "París",
    icono: "parcial",
    temperatura: 13,
    estado: "parcial",
    humedad: 70,
    viento: 11,
    pronosticoSemana: [
      { dia: "Hoy", icono: "parcial", temperatura: 13, estado: "parcial" },
      { dia: "Día 2", icono: "nublado", temperatura: 12, estado: "nublado" },
      { dia: "Día 3", icono: "lluvia", temperatura: 10, estado: "lluvia" },
      { dia: "Día 4", icono: "despejado", temperatura: 17, estado: "despejado" },
      { dia: "Día 5", icono: "parcial", temperatura: 14, estado: "parcial" },
      { dia: "Día 6", icono: "nublado", temperatura: 11, estado: "nublado" },
      { dia: "Día 7", icono: "lluvia", temperatura: 9, estado: "lluvia" }
    ]
  },
  {
    id: 10,
    nombre: "Sidney",
    icono: "despejado",
    temperatura: 26,
    estado: "despejado",
    humedad: 50,
    viento: 13,
    pronosticoSemana: [
      { dia: "Hoy", icono: "despejado", temperatura: 26, estado: "despejado" },
      { dia: "Día 2", icono: "parcial", temperatura: 24, estado: "parcial" },
      { dia: "Día 3", icono: "nublado", temperatura: 23, estado: "nublado" },
      { dia: "Día 4", icono: "despejado", temperatura: 27, estado: "despejado" },
      { dia: "Día 5", icono: "lluvia", temperatura: 21, estado: "lluvia" },
      { dia: "Día 6", icono: "parcial", temperatura: 25, estado: "parcial" },
      { dia: "Día 7", icono: "despejado", temperatura: 28, estado: "despejado" }
    ]
  }
];

document.addEventListener("click", e => {
  const btn = e.target.closest(".btn-detalle");
  if (!btn) return;

  const id = Number(btn.dataset.id);

  const ciudad = ciudades.find(c => c.id === id);

  if (!ciudad) return;

  // aquí ya tienes todo sin JSON.parse()
  cargarModal(ciudad);
});

function cargarModal(ciudad) {
  // 1. Modal estático
  document.querySelector('#detalleModalLabel').textContent = ciudad.nombre;
  document.querySelector('#modalTemp').textContent = `${ciudad.temp}°C`;
  document.querySelector('#modalEstado').textContent = ciudad.estado;

  // 2. Icono
  const icono = document.querySelector('#modalIcono');
  icono.className = `bi fs-1 ${ciudad.icono}`;

  // 3. Datos ampliados
  document.querySelector('#modalHumedad').textContent = ciudad.humedad;
  document.querySelector('#modalViento').textContent = ciudad.viento;

  // 4. Pronóstico semanal
  const contenedor = document.querySelector('#modalPronostico');
  contenedor.innerHTML = ""; // limpiar antes

  ciudad.pronosticoSemana.forEach(dia => {
    const item = document.createElement('div');
    item.className = "d-flex align-items-center justify-content-between border rounded p-2";

    item.innerHTML = `
      <span><strong>${dia.dia}</strong></span>
      <span><i class="bi ${dia.icono}"></i></span>
      <span>${dia.temp}°C</span>
      <span class="text-muted">${dia.estado}</span>
    `;

    contenedor.appendChild(item);
  });

  // 5. Abrir modal manualmente
  const modal = new bootstrap.Modal('#detalleModal');
  modal.show();
}



/* document.addEventListener("click", e => {
  const btn = e.target.closest(".btn-detalle");
  if (!btn) return;

  // Extraer datos del botón
  const {
    nombre,
    icono,
    estado,
    temp,
    humedad,
    viento,
    pronostico
  } = btn.dataset;

  const semana = JSON.parse(pronostico);

  // Llenar contenido principal
  document.querySelector("#detalleModalLabel").textContent = nombre;
  document.querySelector("#modalTemp").textContent = `${temp}°C`;
  document.querySelector("#modalEstado").textContent = estado;
  document.querySelector("#modalHumedad").textContent = `${humedad}%`;
  document.querySelector("#modalViento").textContent = `${viento} km/h`;

  const iconoElemento = document.querySelector("#modalIcono");
  iconoElemento.className = "bi fs-1 " + icono;

  // Limpiar pronóstico anterior
  const contenedorSemana = document.querySelector("#modalSemana");
  contenedorSemana.innerHTML = "";

  // Crear tarjetas del pronóstico semanal
  semana.forEach(dia => {
    const div = document.createElement("div");
    div.className = "col-6 col-md-4 text-center";

    div.innerHTML = `
      <div class="p-3 border rounded">
        <p class="fw-bold m-0">${dia.dia}</p>
        <i class="bi ${dia.icono} fs-3"></i>
        <p class="m-0">${dia.temp}°C</p>
        <p class="text-muted m-0">${dia.estado}</p>
      </div>
    `;

    contenedorSemana.appendChild(div);
  });

  // Abrir el modal manualmente
  const modal = new bootstrap.Modal(document.getElementById("detalleModal"));
  modal.show();
});
 */
