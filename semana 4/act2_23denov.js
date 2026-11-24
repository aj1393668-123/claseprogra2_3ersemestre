function diasDelMes(mes, anio = 2026) {
  mes = Number(mes); // <-- esto es lo que faltaba
  anio = Number(anio);

  switch (mes) {
    case 4: case 6: case 9: case 11:
      return 30;
    case 2:
      if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    default:
      return 31;
  }
}

console.log(diasDelMes(2, 2024)); // 29
console.log(diasDelMes(2, 1900)); // 28
console.log(diasDelMes(4)); // 30
console.log(diasDelMes("2", "2024")); // 29, ya jala con texto también

//calcular
const operaciones={
    "+": (a, b) => a+b,
    "-": (a, b) => a-b,
    "*": (a, b) => a*b,
    "/": (a, b) => (b === 0? "division entre cero" : a/b),
};
function calcular (a, op, b){
    const fn = operaciones[op];
    return fn ? fn (a, b) : "operador desconocido";
}
 console.log(calcular( 8, "*", 5));
 console.log(calcular( 8, "/", 0));
 console.log(calcular( 8, "**", 2));

 //letra(nota)
 function letra(nota) {
  if (nota >= 90) {
    return 'A';
  } else if (nota >= 80) {
    return 'B';
  } else if (nota >= 70) {
    return 'C';
  } else {
    return 'F';
  }
}

console.log(letra(85)); // B
console.log(letra(90)); // A
console.log(letra(69.9)); // F
