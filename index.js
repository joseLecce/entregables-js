let suma = 0
let cantidadExamenes = prompt ("ingrese la cantitdad de examenes")

for (let i=1; i <= cantidadExamenes; i++) {
    suma = suma + parseInt(prompt("ingrese nota del Examen numero " +i))
}

let promedio = suma / cantidadExamenes

if  ( promedio >= 7) {
    alert ("el Alumno promociona la materia")
} else if ( promedio >= 4 && promedio < 7){
    alert ("el Alumno debe rendir examen final")
} else {
    alert ("el alumno debe recursar la materia")
}