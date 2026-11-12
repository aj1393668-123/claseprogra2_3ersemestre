function esPrimo(numero){
    if (numero< 2){
        return false;
    }
    for(let i = 2; i * i <= numero ; i++){
        if(numero%1 === 0){
            return false; 
        }
    }
    return true;
}
console.log(esPrimo(7)); // true
console.log(esPrimo(3)); // false



function convertirTemperatura(v, de, a) {
    let celsius;

    if (de === "C") {
        celsius = v;
    } else if (de === "F") {
        celsius = (v - 32) * 5 / 9;
    } else if (de === "K") {
        celsius = v - 273.15;
    }

    if (a === "C") {
        return celsius;
    } else if (a === "F") {
        return celsius * 9 / 5 + 32;
    } else if (a === "K") {
        return celsius + 273.15;
    }
}

console.log(convertirTemperatura(100, "C", "F")); // 212
console.log(convertirTemperatura(0, "C", "K")); // 273.15

let numeros = [];
for (let i = 1; i <= 50; i++) {
    numeros.push(i);
}

let primos = numeros.filter(esPrimo);
console.log(primos);