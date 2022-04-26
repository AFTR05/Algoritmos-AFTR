// ejemplos del uso del DOM

//el getElementById sirve para llamar un elemento por Id
const lista = document.getElementById('lista');
const li = document.createElement('li');  //se encarga de crear un elemento 
li.innerHTML="Hola Maria"    //se encarga de escribir o rellenar la etiqueta, por otro lado tambien sirve para hacer etiquetas 
lista.appendChild(li);     //dirige el valor en el espacio que se quiere imprimir 

const p = document.getElementsByTagName('p');  //lo que hace getElementsByTagName es contar todos los tipos de etiquetas buscados que en este caso es <p>
console.log(p)

const creacion_class = document.getElementById('class'); 
console.log(creacion_class);
creacion_class.setAttribute("class","babybat"); // con .setAttribute se realiza o se agrega un atributo al elemento seleccionado
console.log(creacion_class.getAttribute("class"))  //getAttribute me devuelve el valor de el atributo que especifique que en este caso es babybat, si no hay valor especificado del atributo, se devolvera un null


setTimeout(function Maria() {//lo que hace esto es hacer la funcion despues de determinado rango de tiempo que en este caso es el console.log
    console.log("hola maria")
}, 2000);


Array=['maria fernanda hurtado gomez','juan andres posada aleans','andres felipe toro rendon']
Array.forEach(nombres => {    //lo que se encarga el for each, es de recorrer el arreglo, y mediante una variable va mostrando el valor de cada casilla 
    console.log(nombres); 
});


document.getElementById("titulo").style.left = "100px";  //.style es una forma de modificar los estilos desde js se manejan todas las propiedades, 
                                                        // en este caso se hace con left que lo que hace es desplazar una etiqueta con su devida position y demas. se mueve 100px a la derecha

  




function  saludar () {document.getElementById("demo").innerHTML += "Hello"};  //lo que se encarga el setInterval es de ejecutar una funcion cada tiempo de por medio, es decir deja como un espacio de tiempo entre accion y accion.que se mide en milisegundos, en este caso es 1000
setInterval(saludar,1000)


window.scrollTo(0, '500px');    //lo unico que se encarga es de mandar el scroll en el eje X y Y, en este caso es .scrollTo(scroll X, scroll Y) 


let boton=document.getElementById("boton1")  
boton.innerHTML='Presiona'
let precaucion=()=>{     //es una funcion flecha
    resultado=confirm('Si o no?');
    if (resultado==(true)) {
        alert('dijo si')
    } else {
        alert('dijo no')
    }
}
boton.addEventListener('click', precaucion)  //el .addEventListener, se encarga de generar una accion o suceso, y dependiendo el suceso hacer una accion que normalmente se encuentra en una función




