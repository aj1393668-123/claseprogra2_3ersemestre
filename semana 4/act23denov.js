//A
switch (2){
    case 1: console.log("a");
    case 2: console.log("b");
    case 3: console.log("c"); break;
}
//prediccion:arroja a, b, c 
//ejecucion:arroja b, c

//B
const valor = "5";
switch(valor){
    case 5: console.log("numero"); break;
    default: console.log("otro");
}
//prediccion:arroja el numero 5
//ejecucuion: arroja la palabra otro.

//C
switch(9){
    default: console.log("d");
    case 1: console.log("u"); break;
    case 2: console.log("x");
}
//prediccion:arroja u y x.
//ejecucion: arroja d, u

//D
const n = 90;
switch (true){
    case n >= 80: console.log("B"); break;
    case n >= 90: console.log("A"); break;
}
//prediccion:si el valor de n es mayor o igual a 80 arroja B pero si es mayor o igual a 90 es A.
//ejecucion: Arroja B




