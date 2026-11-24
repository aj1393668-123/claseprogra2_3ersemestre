//funciones con ciclos

//suma digitos
function sumaDigitos(n){
    let suma = 0;
    n = Math.abs(n);

    while( n>0){
        suma += n %10;
        n = Math.trunc (n/10);
    }
return suma; 
}

//mcd
function mcd(a,b){
    while( b !== 0){
        let temp = b;
        b= a % b;
        a = temp;
    }
    return a;
}

//años para duplicar
function aniosparaDuplicar(monto, tasa = 7){
    let objetivo = monto * 2;
    let actual = monto;
    let anios = 0;

    while(actual < objetivo){
        actual= actual * (1 + tasa / 100);
        anios++;
    }
    return anios; 
}

console.log(sumaDigitos(1234)); 
console.log(sumaDigitos(9));
console.log(mcd(48, 18)); 
console.log(mcd(7, 13)); 
console.log(aniosParaDuplicar(1000));
console.log(aniosParaDuplicar(500, 10)); 
