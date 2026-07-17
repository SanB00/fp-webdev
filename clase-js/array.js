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
