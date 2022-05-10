let array=[[],[]];
let botonenvio= document.getElementById('boton');
let estudiantes=document.getElementById('nombre');
let notas=document.getElementById('nota');
let botonbusque=document.getElementById('botonbusque')
let botonprom=document.getElementById('botonprom')
let botonmay=document.getElementById('botonmay')
let botontotal=document.getElementById('botontotal')
let cantidad=0;

function llenado_array() {
    array[0][cantidad]=estudiantes.value;
    console.log(array[0][cantidad])
    array[1][cantidad]=notas.value;
    console.log(array[1][cantidad])
    cantidad++;
    console.log(cantidad)
}


console.log(cantidad)
console.log(array[1][cantidad])

function mayor() {
    let mayor = false;
    for (let j = 0;  j<cantidad+1 ; j++) {
        if (mayor == false) {
            mayor = array[1][j];
        } else if (mayor < array[1][j]) {
            mayor = array[1][j];
        }
        console.log(array[1][j])
    }
    let frecmay = 0
    let estumayor = [];
    let L = 0

    for (let k = 0; k < cantidad+1; k++) {
        if (array[1][k] == mayor) {
            estumayor[L] = array[0][k]
            frecmay++;
            L++;
        }
    }
}

function busquedaestu() {
    let nombre = prompt("Digite el nombre del estudiante").toUpperCase;
    for (let j = 0; j < cantidad+1; j++) {
        if (nombre == (array[0][j].toUpperCase())) {
            alert(`El estudiante ${array[0][j]} tiene una nota de ${array_notas[1][j]} <br>`)
            break;
        } else if (nombre!==array[0][j].toUpperCase() && j==cantidad) {
            alert(`No se encuentra el estudiante de nombre: ${nombre}`)
        }       
    }
}

function promedio() {
    let sum;
    for (let j = 0; j <= cantidad+1; j++) {
        sum = sum + parseInt(array[1][j]);
        console.log(sum)
    }

    let resultado = sum/array[1].length;

    alert(`El promedio de notas del curso es ${resultado}`)
}

function total() {
    for (let j = 0; j < cantidad+1; j++) {
        alert(`${array[0][j]}---------${array[1][j]}`) 
    }
}

botonenvio.addEventListener('click',llenado_array)
botonbusque.addEventListener('click',busquedaestu)
botonmay.addEventListener('click',mayor)
botonprom.addEventListener('click',promedio)
botontotal.addEventListener('click',total)