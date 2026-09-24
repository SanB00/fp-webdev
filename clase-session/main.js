// La página debe tener:
// Nombre: [Maxi  ] [Agregar]
// 1. Presiono el botón Agregar
// 2. Leer el input (name:value) y tomar el valor
// 3. Agregar el nombre dentro de un array
// 4. Guardo dentro del localStorage ese array
// -------------------------------------------
const formulario = document.getElementById("formulario");
const txtNombre = document.querySelector("#txtNombre");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.dir(txtNombre);
  const formData = new FormData(formulario);
  const nombre = txtNombre.value.trim();

  if (!nombre) {
    alert("complete el nombre");
    return;
  }
  const nombres = JSON.parse(localStorage.getItem("nombres")) || [];

  nombres.push(nombre);

  localStorage.setItem("nombres", JSON.stringify(nombres));

  formulario.reset();

  console.log(`Se agregó "${nombre}" al listado de nombres...`);
});

// 0. set de un array vacío dentro del localStorage
// 1. Quieren agregar otro nombre
// 2. Presionar el botón (evento de submit)
// 3. Leo el valor del input
// 4. Leer el array que está dentro del localStorage
// 5. Agregar el nombre dentro de un array
// 6. Guardo dentro del localStorage ese array
// --------------------------------------------
