function contarVocales(txt) {
    let limpio = txt.toLowerCase();//convierte todo a minusculas
    
    let vocales = limpio.split("").filter(letra => "aeiouáéíóúü".includes(letra));  // Incluimos las vocales con acento 
    
    return vocales.length;//devuelve el numero de vocales que le diste a la funcion

}

console.log(contarVocales("Murciélago"));
console.log(contarVocales("PRÓXIMO"));    
    

function esPalindromo(txt) {
    let limpio = txt.toLowerCase().replaceAll(" ", ""); //convierte a minusculas y quita espacios
    
    // Cambia vocales con acento a vocales normales
    limpio = limpio
        .replace(/[áäà]/g, "a")
        .replace(/[éëè]/g, "e")
        .replace(/[íïì]/g, "i")
        .replace(/[óöò]/g, "o")
        .replace(/[úüù]/g, "u");
    
    // invierte el texto
    let invertido = limpio.split("").reverse().join("");
    
    return limpio === invertido;} //compara


console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("Hola mundo"));         
