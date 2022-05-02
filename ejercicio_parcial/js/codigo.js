// 1. Identifique la nota más alta y la frecuencia de esta nota en el arreglo de
// estudiantes, imprima en pantalla el resultado, siguiendo este patrón:
// La nota más alta es ###, y la nota fue obtenida ## veces por los estudiantes
// @@@, del curso. (1 punto)
// 2. Buscar un estudiante por nombre, la función debe retornar una cadena de
// texto así: (0,5 puntos)
// Encontrado: nombre: @@ y su nota es: ##
// No se encuentra el estudiante de nombre: @@@
// 3. Promedio de notas del curso, la función debe retornar una cadena indicando
// el promedio de notas del curso. (0,5)
// 4. Mostrar los estudiantes del curso y sus notas asociadas, la función debe
// retornar una cadena de texto con los nombres de los estudiantes y la nota
// asociada.(0,5)

let array_estudiantes = [];
let array_notas = [];
let i = 0;
let option;
while (option !== 0) {
    let estudiante = prompt("Digite el nombre del estudiante");
    let nota = prompt("Digite la nota del estudiante");
    option = parseInt(prompt("Quiere continuar si la respuesta es negativa digite 0"));
    array_estudiantes[i] = estudiante;
    array_notas[i] = nota;
}

let p;
whi:
while (p != 0) {
    let p = parseInt(prompt(`Digite una opcion
    1:mayor de estudiantes
    2: busqueda nombre
    3:promedio
    4: datos totales
    0:Salir menu`))
    switch (p) {
        case 1:
            mayor();
            break;
        case 2:
            busqueda();
            break;
        case 3:
            promedio();
            break;
        case 4:
            total();
            break;

        case 0:
            break whi;    
        default:
            break;
    }
}


function mayor() {
    alert('MAyor')
    let mayor = false;
    for (let i = 0; i <= array_notas.length; i++) {

        if (mayor == false) {
            mayor = array_notas[i];
        } else if (mayor < array_notas) {
            mayor = array_notas[i];
        }
        console.log(array_notas[i])
    }
    let frecmay = 0
    let estumayor = [];
    let j = 0

    for (let i = 0; i <= array_notas.length; i++) {
        if (array_notas[i] == mayor) {
            estumayor[j] = array_estudiantes[i]
            frecmay++;
            j++;
        }
    }

    document.write(`la nota mayor es ${mayor} la nota due obtenida ${frecmay} por los estudiantes ${estumayor}`)
}



function busqueda() {
    let option2
    alert("Pregunta por nombre para saber nota")

    while (option2 != 0) {

        let nombre = prompt("Digite el nombre del estudiante").toUpperCase;
        if (nombre == array_estudiantes[i].toUpperCase) {
            for (let i = 0; i <= array_estudiantes.length; i++) {
                if (nombre == array_estudiantes[i].toUpperCase) {
                    document.write(`El estudiante ${array_estudiantes[i]} tiene una nota de ${array_notas[i]} <br>`)

                }
            }
        } else {
            document.write(`No se encuentra el estudiante de nombre: ${nombre}`)
            console.log(hola)
        }

        option2 = prompt("Quiere continuar si la respuesta es negativa digite 0")

    }
}

function promedio() {
    let sum;
    for (let i = 0; i <= array_notas.length; i++) {
        sum = sum + parseInt(array_notas[i]);
        console.log(sum)
    }

    let resultado = sum / array_notas.length + 1;

    document.write(`El promedio de notas del curso es ${resultado}`)
}


function total() {
    let k = 0
    for (const student of array_estudiantes) {
        console.log(student)
        console.log(array_notas[k])

        document.write(`${student}---------${array_notas[k]}`)
        k++
    }
}

