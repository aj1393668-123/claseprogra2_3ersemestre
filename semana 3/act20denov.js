//pedir numeros
function pedirNumero(respuestas) {
  let numero;

  do {
    const respuesta = respuestas.shift();
    numero = Number(respuesta);
    console.log(numero);
  } while (!Number.isInteger(numero) || numero < 1 || numero > 10);
  return numero;
}
console.log(pedirNumero["abc", "50", "0", "7"]);


// adivinar(numero secreto)
function adivinar(secreto) {
  let bajo = 1;
  let alto = 500;
  let intentos = 0;
  let intento = 0;

  while (intento != secreto) {
    intento = Math.floor((bajo + alto) / 2); // prueba al medio
    intentos++;

    if (intento < secreto) {
      console.log(`Intento ${intentos}: rango ${bajo}-${alto}, probó ${intento}`);
      bajo = intento + 1; // descarta la mitad de abajo
    } else if (intento > secreto) {
      console.log(`Intento ${intentos}: rango ${bajo}-${alto}, probó ${intento}`);
      alto = intento - 1; // descarta la mitad de arriba
    } else {
      console.log(`Intento ${intentos}: rango ${bajo}-${alto}, probó ${intento}`);
    }
  }

  return intentos;
}

console.log("Intentos:", adivinar(126));