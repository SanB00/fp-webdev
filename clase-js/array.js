//import './style.css'

console.log("------------------------------------------------------");

const clientes = [
  { id: 1, nombre: "Ana", edad: 22, activo: true },
  { id: 2, nombre: "Sabrina", edad: 30, activo: true },
  { id: 3, nombre: "Andres", edad: 17, activo: false },
  { id: 4, nombre: "Levi", edad: 28, activo: false },
  { id: 5, nombre: "Laura", edad: 27, activo: true },
];

//console.warn('Métodos find() - findIndex()')

console.log("Clientes iniciales");
// Devuelve el primer elemento que coincide con la condición

console.log(clientes);

/* const clienteId3 = clientes.find(c => {
    //console.log(c)
    if ( c.id === 4 ) {
        return c
    }
}) }
    
const clienteId3 = clientes.find(c => c.id === 3)
console.log(clienteId3)
*/
/*
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);
console.log("Contar clientes activos");
console.log(clientes);
const cantidad = clientes.reduce((acc, cliente) => {
  //console.log(cliente)
  //console.log(acc)
  if (cliente.activo === true) {
    //console.log(cliente)
    return acc + 1;
  } else {
    return acc;
  }
}, 0);
console.log(cantidad); // 2

*/

console.log("\n\n------------------------------------------------------");
console.log("SPLICE(desdeDondeComienza, cuantosEliminar, elementosPorAgregar)");
const clientesNuevos = [
  { id: 7, nombre: "Li", edad: 27, activo: true },
  { id: 8, nombre: "Caro", edad: 25, activo: false },
];
// Con los tres puntos (...), "sacamos" los objetos del array clientesNuevos
// y los insertamos uno por uno en la posición 2 del array clientes
// clientes.splice(2, 0, ...clientesNuevos);
clientes.splice(5, 0, { id: 6, nombre: "Seis", edad: 27, activo: true });
clientes.splice(6, 0, ...clientesNuevos);
console.log("Clientes iniciales + Nuevos");
console.log(clientes);
