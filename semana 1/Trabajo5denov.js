let alumnos = [
    {nombre: "Ana", calificacion: 9},
    {nombre: "Beto", calificacion: 5},
    {nombre: "Carla", calificacion: 8},
    {nombre: "Dino",calificacion: 6.5},
]
let aprobados = alumnos.filter(alumno => alumno.calificacion >= 6)
let suma = aprobados.reduce((total, alumno) => total + alumno.calificacion, 0);
let promedio = suma / aprobados.length;

console.log("Promedio de aprobados:" , promedio.toFixed(2));