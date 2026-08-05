const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formulario);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  for (const [key, value] of formData.entries()) {
    if (!value.toString().trim()) {
      //alert("mal");
    }
  }

  const smallErrores = document.querySelector("#smallErrores");
  smallErrores.innerHTML = "";

  const nombre = formData.get("nombre");
  const email = formData.get("email");
  const msjErrores = [];
  if (!nombre.toString().trim()) {
    msjErrores.push("El nombre es un campo obligatorio");
  }

  smallErrores.innerHTML = msjErrores;
  console.log("Formulario enviado");
});
