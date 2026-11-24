//A
let n = 1;
while (n <= 3) n++;
console.log(n);
//prediccion: imprime numeros del 1 hasta llegar al 3
//ejecucion: 

//B
let k = 10, v = 0;
while (k< 5) {v++; k++;}
console.log(v, k);
//prediccion : imprime 0, 10 porque no cumple la condicion
//ejecucion : si imprime 0,10 

//C
let x = 10, y = 0;
do {x++; y++;} while (x < 5);
console.log(y, x);
//prediccion: imprime 1, 11
//ejecucion: si imprime 1, 11

//D
let t = 3;
while (t>0) {console.log(t); t--;}
console.log("fin");
//prediccion: imprime numeros del 3 hasta llegar a 0 y imprime fin
//ejecucion: si hace eso