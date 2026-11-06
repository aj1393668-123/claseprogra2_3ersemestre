// redondeo
function redondear(n, decimales) {
    const texto = n.toFixed(decimales);
    const resultado = Number(texto);

  return resultado;
}

console.log(redondear(4.5689, 2)); // -> 4.57
console.log(typeof redondear(4.5689, 2)); // -> number


//promedio de un texto
function redondear(n, decimales) {
  return Number(n.toFixed(decimales));
}

function promedioTexto(texto) {
  const numeros = texto
    .split(",") // ["8", " 9.5", " x", " 7", " ", " 10"]
    .map(s => s.trim()) // ["8", "9.5", "x", "7", "", "10"]
    .filter(s => s !== "") // quita el espacio vacío
    .map(Number) // [8, 9.5, NaN, 7, 10]
    .filter(n => !Number.isNaN(n)); // quita la "x" -> [8, 9.5, 7, 10]

  if (numeros.length === 0) return 0;

  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return redondear(suma / numeros.length, 2);
}

// Pruebas
console.log(promedioTexto("8, 9.5, x, 7, , 10")); // -> 8.63
