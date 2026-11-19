//A
let x = 1;
function f(){
    let x = 2; return x;
}
console.log(f(), x);

//prediccion: regresa el valor de 2
//ejecucion : regresa el valor de 2 y luego 1

//B
function g(){
    total = 5;
}
g();
console.log(total);

//prediccion: imprime el valor de 5
//ejecucion : si imprime el valor de 5

//C
const fs = [];
for(let i = 0; i<3; i++)
    fs.push(() => i * 10);
console.log(fs.map((f) => f()));
 //prediccion : arroja el arreglo ya modificado y con el incremento que se puso en el ciclo
 //arroja un arreglo [0, 10, 20]

 //D
 function crear() {
    let n = 10;
    return () => ++n;
 }
 const a = crear(), b = crear();
 console,log(a(), a(), b());

 //prediccion : arroja los numero 10, 20 , 30
 //ejecucion : no arrojo nada JAJA