// lo que se busca hacer con eset ejercicio es pedir la cantidad de estudiantes, y deacuerdo a ello crear diferentes inputs para que el usuario los llene, y se logre adquirir los datos

let espaciomayor=document.getElementById('espaciomay')
let espacioprom=document.getElementById('espacioprom')
let espaciobusqueda=document.getElementById('espaciobusque')
let cantidad_estudiantes = parseInt(prompt('Digite la cantidad de estudiantes'))

for (let i = 0; i < cantidad_estudiantes; i++) {
    const estudiantes = document.getElementById('nombres');
    const notas = document.getElementById('notas');

    let inputestu = document.createElement('input')          //creacion de inputs
    inputestu.setAttribute('id', `estudiantes${i}`);
    inputestu.setAttribute('placeholder', `estudiante${i+1}`);
    inputestu.setAttribute('class', `inputXD`);
    //nota mental nunca puedes crear etiquetas y colocar atributos a las vez por que o si no, no toma como nodo la direccion
    let inputnot = document.createElement('input')
    inputnot.setAttribute('id', `notas${i}`);
    inputnot.setAttribute('placeholder', `nota ${i+1}`);
    inputnot.setAttribute('class', `inputXD`);
    estudiantes.appendChild(inputestu);                       //localizacion de inputs
    notas.appendChild(inputnot);
}
let array = [[],[]]
let formulario = document.getElementById('formulario');  
formulario.addEventListener("submit", conservar = (e) => {        //funcion de prevencion de envio servidor
    e.preventDefault();


    for (let j = 0; j < cantidad_estudiantes; j++) {             
        let ayudaestu = document.getElementById(`estudiantes${j}`)         //llenado de matriz
        let ayudanot = document.getElementById(`notas${j}`)
        array[0][j] = ayudaestu.value;
        array[1][j] = parseInt(ayudanot.value);
    }

    console.log(array[0][0])
    let mayorvar = false;

    botonbusque.addEventListener('click', busquedaestu)
    botonmay.addEventListener('click', mayor)
    botonprom.addEventListener('click', promedio)
    botontotal.addEventListener('click', total)

    
    function mayor() {       //funcion de mayor
        for (let j = 0; j < cantidad_estudiantes; j++) {
            if (mayorvar === false) {
                mayorvar=array[1][j];
                console.log('primera vuelta')
            } else if (mayorvar < (array[1][j])) {             //daba error por que el array lo tomaba antes cuando no estaba con parentesis como array [1]
                mayorvar=array[1][j];
                console.log('HOla')
            } 
            console.log(j)       
        }
        let estumayor = [];
        let corredor = 0
        for (let k = 0; k<cantidad_estudiantes; k++) {
            if (array[1][k] == mayorvar) {
                estumayor[corredor] = array[0][k]               // con .lenght ya tiene la frecuencia de personas que sacaron esta nota mayor
                corredor++;
            }
        }
        console.log(mayorvar)
        espaciomayor.innerHTML=`La nota mayor fue ${mayorvar} con una frecuencia total de ${estumayor.length}, los estudiantes que sacaron esta nota fueron ${estumayor}`
    }


    function busquedaestu() {
        let nombre = prompt("Digite el nombre del estudiante").toUpperCase();
        for (let j = 0; j < cantidad_estudiantes; j++) {
            if (nombre == (array[0][j].toUpperCase())) {
                espaciobusqueda.innerHTML=`El estudiante ${array[0][j]} tiene una nota de ${array[1][j]}`
                break;
            } else if (nombre !== array[0][j].toUpperCase() && j == cantidad_estudiantes - 1) {
                espaciobusqueda.innerHTML=`No se encuentra el estudiante de nombre: ${nombre}`
            }
        }
    }


    function promedio() {
        let sum=0;
        for (let j = 0; j < cantidad_estudiantes; j++) {
            sum = sum + array[1][j]
            console.log(sum)
        }

        let resultado = sum / cantidad_estudiantes;

        espacioprom.innerHTML=`El promedio de notas del curso es ${resultado}`
    }

const divtotal=document.getElementById('lucas')
    function total() {
        for (let j = 0; j < cantidad_estudiantes; j++) {
            let space=document.createElement('p')
            space.setAttribute('id',`tt${j}`)
            divtotal.appendChild(space)
            let SPACE=document.getElementById(`tt${j}`)
            SPACE.innerHTML=` <br> ${array[0][j]}---------${array[1][j]} <br>`
        }
    }
})




