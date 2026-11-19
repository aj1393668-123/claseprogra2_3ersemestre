function crearCuentaBancaria(saldo) {
    function depositar(cantidad) {
        saldo = saldo + cantidad;
    }
    function retirar(cantidad) {
        if (cantidad > saldo) {
            console.log("Fondos insuficientes");
        } else {
            saldo = saldo - cantidad;
        }
    }
    function consultar() {
        return saldo;
    }
    return {
        depositar,
        retirar,
        consultar
    };
}
const c = crearCuentaBancaria(100);

c.depositar(50);
c.retirar(30);
c.retirar(500);

console.log(c.consultar());
console.log(c.saldo);

//reto: Componer(f, g)
function componer(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const h = componer(
    (x) => x * 2,
    (x) => x + 2
);

console.log(h(3));
