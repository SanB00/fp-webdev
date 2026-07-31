function fueAlCumple({ fue = true }) {
  return new Promise((resolve, reject) => {
    if (fue) {
      resolve("¡Fue al cumple!");
    } else {
      reject("No fue al cumple.");
    }
  });
}

const promesa = fueAlCumple({ fue: true });

promesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promesa finalizada.");
  });

//fetch("https://jsonplaceholder.typicode.com/posts/1")

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
