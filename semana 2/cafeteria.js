const registro = " Café: 35.50; té verde : 28 ;Pan Dulce:18.5; CAFÉ:35.5;; galleta de avena: 22.10; Té Verde:28 ; Jugo de naranja: 40; pan dulce : 18.50; Café Americano: abc; galleta de avena:22.1; ;Jugo de Naranja:40 ; Sándwich:55.75; té verde: -10; :15; Pan dulce:18.5; Café :35.5 ; Sándwich : 55.75 ; galleta de avena:";

// 1. Limpiar Registro (Compacto)
function limpiarRegistro(texto) {
    return texto.split(';')
        .map(p => p.trim().split(':'))
        .filter(c => c.length === 2 && c[0].trim() && !isNaN(parseFloat(c[1])) && parseFloat(c[1]) > 0)
        .map(([prod, prec]) => ({
            producto: prod.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            precio: parseFloat(prec)
        }));
}

// 2. Sumar
const sumar = (...precios) => Number(precios.reduce((a, b) => a + b, 0).toFixed(2));

// 3. Resumen por Producto
const resumenPorProducto = (ventas) => {
    const mapa = {};
    ventas.forEach(v => {
        mapa[v.producto] = mapa[v.producto] || { vecesVendido: 0, ingresoTotal: 0 };
        mapa[v.producto].vecesVendido++;
        mapa[v.producto].ingresoTotal += v.precio;
    });

    return Object.entries(mapa)
        .map(([producto, info]) => ({ producto, vecesVendido: info.vecesVendido, ingresoTotal: Number(info.ingresoTotal.toFixed(2)) }))
        .sort((a, b) => b.ingresoTotal - a.ingresoTotal || a.producto.localeCompare(b.producto));
};

// 4. Descuento y Aplicar a Todos
const descuento = (precio, porc = 15) => Number((precio * (1 - porc / 100)).toFixed(2));
const aplicarATodos = (lista, fn) => lista.map(v => ({ ...v, precio: fn(v.precio) }));

// 5. Producto al Azar
const productoAlAzar = (ventas) => [...new Set(ventas.map(v => v.producto))][Math.floor(Math.random() * new Set(ventas.map(v => v.producto)).size)] || null;

// 6. Reporte Final
function reporteFinal(txt) {
    const vLimpias = limpiarRegistro(txt);
    const resumen = resumenPorProducto(vLimpias);
    
    console.log("--- REPORTE FINAL ---");
    resumen.forEach(i => console.log(`${i.producto}: $${i.ingresoTotal.toFixed(2)} (${i.vecesVendido} ventas)`));
    console.log(`TOTAL GENERAL: $${sumar(...vLimpias.map(v => v.precio))}`);
    console.log(`PROMOCIÓN DE HOY: ${productoAlAzar(vLimpias).toUpperCase()}`);
}

reporteFinal(registro);
