// salir o sltar una vuelta 

// break sale del ciclo de inmediato 
// continue salta  al asiguiente vuelta
//while(true) es un ciclo <<infinito>> controlado: la salida está adentro del cuerpo 

let i = 0;
const impares = [];
while (true) {
    i++;
    if (i > 10) break ; // sale 
    if (i % 2 === 0) continue; //salta
    impares.push(i); 
}
console.log(impares);
// -> [1, 3, 5, 7, 9]

//un valor, varios casos
function nombreDio(numero){
    switch(numero){
        case 1: 
        return "lunes";
        case 2: 
        return "martes";
        case 3: 
        return "miercoles";
        case 4: 
        return "jueves";
        case 5: 
        return "viernes";
        case 6:
        return "sabado";
        case 7: 
        return "domingo";
        default: 
        return "dia invalido";
    }
}

nombreDio(1)//lunes
nombreDio(2)//martes
nombreDio(3)//miercoles
nombreDio(4)//jueves
nombreDio(5)//viernes
nombreDio(6)//sabado
nombreDio(7)//domingo 

function ruido(animal) {
    switch (animal) {
        case "perro":
            console.log("guau");

        case "gato":
            console.log("miau");

        case "gallo":
            console.log("kikiriki");
            
        case "conejo":
            console.log("fshfshfsh");

        case "pollito":
            console.log("piopio");

        break;        
        default:
            console.log("xxx");

    }
}