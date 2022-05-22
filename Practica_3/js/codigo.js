// Se desea crear una Aplicación para manejar la información de una tienda.
// En la tienda se venden diferentes productos, cada producto tiene un nombre, una categoría, un precio y una cantidad en existencia.

// Utilizando objetos y guardando datos en localstorage, la aplicación debe permitir:

// agregar un nuevo producto al final de la lista  .

// agregar un nuevo producto al inicio de la lista  .

// Informar cuántos productos hay por categoría

// Informar la cantidad total de productos

// Informar el valor total de todos los productos que hay en la tienda

// Disminuir existencias de un producto

// Aumentar existencias de un producto

// buscar un producto por nombre

// eliminar un producto

// listar los productos en orden alfabético

var productos = []
let producto

let prueba = [1,2,3,5,45,54,15]
prueba.splice(2,1)
console.log(prueba)



var arreglo_productos

// falta vincular con las actividad la creacion del arreglo

function creacion_arreglo() {
    arreglo_productos = JSON.parse(localStorage.productos)
}

function iniciar_datos() {

}
// inicio de eventos
const botoninicio = document.getElementById('Envioini');
const botonfinal = document.getElementById('enviofin');
const botontotalcategoria = document.getElementById('totalcategoria')
const botontotalproduct = document.getElementById('totalproduct')
const botonvalor = document.getElementById('valorproduct')
const botondisminuir = document.getElementById('disminuir')
const botonaumentar = document.getElementById('aumentar')
const botonbusque = document.getElementById('busqueproduct')
const botoneliminar = document.getElementById('elimiproduct')
const botonorden = document.getElementById('orden_ordinal')



//llamado de eventos
botoninicio.addEventListener('click', agregar_datos);
botoninicio.addEventListener('click', agregar_inicio);
botonfinal.addEventListener('click', agregar_datos);
botonfinal.addEventListener('click', agregar_final);

//funcionalidad
botontotalcategoria.addEventListener('click', creacion_arreglo)
botontotalcategoria.addEventListener('click', totalproduc_category)


botontotalproduct.addEventListener('click', creacion_arreglo)
botontotalproduct.addEventListener('click', total_product)

botonvalor.addEventListener('click', creacion_arreglo)
botonvalor.addEventListener('click', valor_totalproduct)

botondisminuir.addEventListener('click', creacion_arreglo)
botondisminuir.addEventListener('click',disminuir)

botonaumentar.addEventListener('click',creacion_arreglo)
botonaumentar.addEventListener('click',aumentar)

botonbusque.addEventListener('click',creacion_arreglo)
botonbusque.addEventListener('click',buscarproduct)

botoneliminar.addEventListener('click',creacion_arreglo)
botoneliminar.addEventListener('click',eliminarproduct)

botonorden.addEventListener('click',creacion_arreglo)
botonorden.addEventListener('click',ordinal)

// pensar como guardar los cambios que hace el usuario despues de cerrar o actualizar el buscador
// arreglar lo del espacio es decir colocar una etiqueta p 
function agregar_datos() {
    const nombre = document.getElementById('espnombre').value;
    const precio = parseInt(document.getElementById('espprecio').value);
    const cantidad = document.getElementById('espcantidad').value;
    const categoria = document.getElementById('espcategoria').value;


    producto = {
        "cate": categoria,
        "nomb": nombre,
        "prec": precio,
        "canti": cantidad
    }
    console.log(productos)
}



function agregar_inicio() {
    productos.unshift(producto)
    console.log(producto)
    localStorage.productos = JSON.stringify(productos)
    document.getElementById('espnombre').value='';
    document.getElementById('espprecio').value='';
    document.getElementById('espcantidad').value='';
    document.getElementById('espcategoria').value='';
}


function agregar_final() {
    productos.push(producto)
    console.log(producto)
    localStorage.productos = JSON.stringify(productos)
    document.getElementById('espnombre').value='';
    document.getElementById('espprecio').value='';
    document.getElementById('espcantidad').value='';
    document.getElementById('espcategoria').value='';
}


var arreglo_productos

// falta vincular con las actividad la creacion del arreglo

function creacion_arreglo() {
    arreglo_productos = JSON.parse(localStorage.productos)
}


function totalproduc_category() {  //esta mela 
    //filter por categoria
    let cadena = "";
    let espaciocat = document.getElementById('espaciototalcat1')
    let preguntacat = (prompt('digite la categoria'))
    let productocat = arreglo_productos.filter(producto => producto.cate == preguntacat)
    console.log(productocat)
    console.log(arreglo_productos[0]['cate'])
    cadena = cadena + `En la categoria ${preguntacat} hay ${productocat.length} productos`
    for (let i = 0; i < productocat.length; i++) {
        cadena=cadena + ` <br>${i+1}) ${productocat[i]["nomb"]} `
        
    }
       espaciocat.innerHTML=`${cadena}`
}

function total_product() { //esta mela
    //lenght arreglo
    let cadena=""
    let espacioproductos = document.getElementById('espaciototalproduct1')
    cadena = `En la tienda actualmente hay ${arreglo_productos.length} productos`
    console.log(arreglo_productos.length)
    for (let i = 0; i < arreglo_productos.length; i++) {
        cadena=cadena + `<br>${i+1}) ${arreglo_productos[i]["nomb"]}`
    }
    espacioproductos.innerHTML=`${cadena}`
}

function valor_totalproduct() {   //esta mela
    //sumar precios
    let suma = 0;
    let espaciovalor = document.getElementById('espaciovalor1');
    for (let i = 0; i < arreglo_productos.length; i++) {
        console.log(arreglo_productos[i]['prec'])
        suma += parseInt(arreglo_productos[i]['prec']);
        console.log(suma)
    }
    console.log(suma)
    espaciovalor.innerHTML = `La suma total de los precios de los productos es ${suma}`

    
}

function disminuir() { //esta melo
    let espaciodisminuir = document.getElementById('espaciodisminuir1')
    let pregunta = prompt('digite el nombre del producto a disminuir su cantidad')
    let noes

    for (let i = 0; i < arreglo_productos.length; i++) {
        let condicion = arreglo_productos[i]['nomb'].includes(pregunta)
        if (condicion) {
            if (arreglo_productos[i]['nomb'] == pregunta) {
                let bajarcanti = prompt('ingrese la cantidad a disminuir de la cantidad')
                arreglo_productos[i]['canti']=arreglo_productos[i]['canti']-bajarcanti
                espaciodisminuir.innerHTML=`Ahora la cantidad de ${pregunta} es de ${arreglo_productos[i]['canti']} unidades <br>`
                noes='hola';
                break;
            }
        } else {
            noes="No existe"
        }
    }    
    if (noes=="No existe") {
        espaciodisminuir.innerHTML=`El producto a buscar no esta en la lista de productos <br>`
    }
    productos=arreglo_productos
    console.log(productos)
    localStorage.productos = JSON.stringify(productos)
}

function aumentar() { //esta melo
    let espacioaumentar = document.getElementById('espacioaumentar1')
    let pregunta = prompt('digite el nombre del producto a aumentar su cantidad')
    let noes

    for (let i = 0; i < arreglo_productos.length; i++) {
        let condicion = arreglo_productos[i]['nomb'].includes(pregunta) 
        if (condicion) {
            if (arreglo_productos[i]['nomb'] == pregunta) {
                let bajarcanti = prompt('ingrese la cantidad a aumentar de la cantidad')
                arreglo_productos[i]['canti']=parseInt(arreglo_productos[i]['canti'])+ parseInt(bajarcanti)
                espacioaumentar.innerHTML=`Ahora la cantidad de ${pregunta} es de ${arreglo_productos[i]['canti']} unidades <br>`
                noes=false;
                break;
            }
        } else {
            noes="No existe"
        }
    } 
        
    if (noes=="No existe") {
        espacioaumentar.innerHTML=`El producto a buscar no esta en la lista de productos  <br>`
    }
    productos=arreglo_productos
    console.log(productos)
    localStorage.productos = JSON.stringify(productos)
}

function buscarproduct() {    //esta melo
    let espaciobusqueda=document.getElementById('espaciobusqueda1')
    let pregunta = prompt('digite el nombre del producto')
    let noes

    for (let i = 0; i < arreglo_productos.length; i++) {
        let condicion = arreglo_productos[i]['nomb'].includes(pregunta)
        if (condicion) {
            if (arreglo_productos[i]['nomb'] == pregunta) {  //listo este es para imprimir 
                espaciobusqueda.innerHTML=`El producto ${arreglo_productos[i]['nomb']} tiene: <br> Categoria ${arreglo_productos[i]['cate']}  <br> Precio ${arreglo_productos[i]['prec']}  <br>Cantidad ${arreglo_productos[i]['canti']}  <br>`
                noes=false;
                break;
            }
        } else {
            noes="No existe"
        }
    }    
    if (noes=="No existe") {
        espaciobusqueda.innerHTML=`El producto a buscar no esta en la lista de productos`
    }
}

function eliminarproduct() {    //esta good
    let espacioeliminar=document.getElementById('espacioeliminar1')
    let pregunta = prompt('digite el nombre del producto')
    let noes
    for (let i = 0; i < arreglo_productos.length; i++) {
        let condicion = arreglo_productos[i]['nomb'].includes(pregunta)
        if (condicion) {
            if (arreglo_productos[i]['nomb'] == pregunta) {
                arreglo_productos.splice(i,1)
                espacioeliminar.innerHTML=`Ya fue eliminado el producto ${pregunta}`
                console.log(arreglo_productos)
                noes=false;
                break;
            }
        } else {
            noes="No existe"
        }
    }    
    if (noes=="No existe") {
        espacioeliminar.innerHTML=`El producto a buscar no esta en la lista de productos`
    }
    productos=arreglo_productos
    console.log(productos)
    localStorage.productos = JSON.stringify(productos)
}

function ordinal() {    // esta melo
    let espacioordinal=document.getElementById('espacioorden1')
    let cadena=""
    arreglo_productos.sort((a,b) => {
        const nombreA = a.nomb.toLowerCase() 
        const nombreB =b.nomb.toLowerCase()
        if (nombreA < nombreB) {
            return -1;
        }

        if (nombreA > nombreB) {
            return 1;
        }

        return 0;
    })
    console.log(arreglo_productos)

    for (let i = 0; i < arreglo_productos.length; i++) {
        cadena=cadena+JSON.stringify(arreglo_productos[i])+`<br>`
    }
    espacioordinal.innerHTML=`${cadena}`
}