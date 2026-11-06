let lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let par = 0;
for(let i = 0; i<lista.length; i++)
{
    par = lista[i] % 2;
    if(par === 0){
        console.log(lista[i] + "Numero par!");
    }
}
parseInt("42px", 10);
parseInt("px42", 10);
parseFloat("3.5kg");
Number("3.5");
isNaN("abc");
Number.IsNaN("abc");
const t ="Hola Mundo";
t.toUpperCase();
console.log(t);
const mayus = t.toUpperCase();
console.log(mayus);
const s = "JavaScript";
console.log(s.length, s[0]);
console.log(s.at(-1));
const frase = "el perro el gato";
frase.indexOf("el")
frase.indexOf("el", 1)
frase.lastIndexOf("el");
frase.indexOf("zorro");
frase.includes("gato");
frase.startsWith("el");
frase.indexOf("perro");
const f = "2026-10-19"
f.slice(0,4)
f.slice(5,7)
f.slice(-2)
f.split("-")
"hola".trim()
"75".padStart(8,"a")
"a-b-c".replaceAll("-", "+")
"e">"z"
const L = ["b", "a", "a"];
L.sort()