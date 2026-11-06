//agg y quitar elementos
const lista=["Antonio", "Leslie", "Paola", "Victor"];
console.log(lista);

let lista2 = lista.push()
console.log(lista2);

let lista3= lista.pop()
console.log(lista3);

let lista4= lista.unshift("Juan")
console.log(lista4);

let lista5= lista.shift("Luis")
console.log(lista5);

let resultado = lista.splice(2,4)
console.log(resultado)

//slice y splite
const b = [1,2,3,4,5];
// [2,3]
console.log(b.splice(1,2));
//[1,4,5]
console.log(b);
//[1,'x', 'y', 4, 5]
b.splice(1,0, "x","y");
//['x','y'] (b no cambia)
console.log(b);


console.log(b.slice(1, 3));

//buscar arreglo
const n = [5,12,8,130,44];
n.indexOf(8)
n.includes(130)
n.find((x)=> x>10)
n.findIndex((x)=>x>10)
n.find((x)=>x>1000)
n.some((x)=>x>100)
n.every((x)=>x>5)

console.log(n);

//map, filter y reduce
const precios = [100, 250, 80, 400]; 
precios.map((p)=>p+20) //  [120,270,100,420]
precios.filter((p)=>p>150) //   [250, 400]
precios.reduce((acum, p)=>acum + p, 0) //   830

//sort ordena como texto
const nums = [10, 9, 1, 100];
[...nums].sort()
//[1, 10, 100, 9]
(...nums).sort((a, b) => a-b)
//[1, 9, 10, 100]
(...nums).sort((a, b)=> b - a)
//[100,10,9,1]