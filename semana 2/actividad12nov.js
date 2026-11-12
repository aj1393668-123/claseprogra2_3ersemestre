let altura = Number(prompt("Ingresa tu altura en metros (ejemplo: 1.70):"));
let peso = Number(prompt("Ingresa tu peso en kg:"));

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function clasificarIMC(imc) {
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc < 25) {
    return "Normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidad";
  }
}

function pesoIdeal(altura) {
  let minimo = 18.5 * altura * altura;
  let maximo = 24.9 * altura * altura;
  return "El rango de peso saludable es entre " +
    minimo.toFixed(2) + " kg y " + maximo.toFixed(2) + " kg.";
}

console.log("Tu IMC es: " + calcularIMC(peso, altura).toFixed(2));
console.log("Tu clasificación es: " + clasificarIMC(calcularIMC(peso, altura)));
console.log(pesoIdeal(altura));
