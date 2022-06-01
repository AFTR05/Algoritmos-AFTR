var productos = []
let producto

var arreglo_productos

// falta vincular con las actividad la creacion del arreglo

// vamos aplicar los conocimientos en la tienda creada en la práctica anterior.
// Vamos actualizar nuestro código Javascript y vamos asegurarnos de utilizar 
// métodos: foreach, map, filter y reduce. Vamos a crear nuevas funcionalidades en la tienda para dar uso a estos métodos (en caso de que lo considere necesario).
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
botontotalcategoria.addEventListener('click', totalproduc_category)
botontotalproduct.addEventListener('click', total_product)
botonvalor.addEventListener('click', valor_totalproduct)
botondisminuir.addEventListener('click',disminuir)
botonaumentar.addEventListener('click',aumentar)
botonbusque.addEventListener('click',buscarproduct)
botoneliminar.addEventListener('click',eliminarproduct)
botonorden.addEventListener('click',ordinal)

// pensar como guardar los cambios que hace el usuario despues de cerrar o actualizar el buscador
// arreglar lo del espacio es decir colocar una etiqueta p 
let opciones="";
function agregar_datos() {
    const nombre = document.getElementById('espnombre').value;
    const precio = parseInt(document.getElementById('espprecio').value);
    const cantidad = document.getElementById('espcantidad').value;
    const categoria = document.getElementById('espcategoria').value;
    const lista= document.getElementById('anteriores')
    opciones=opciones+`<br><option value="${categoria}">`
    lista.innerHTML=`${opciones}`

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
function totalproduc_category() {  //esta mela 
    //filter por categoria
    arreglo_productos = JSON.parse(localStorage.productos)
    let cadena = "";
    let espaciocat = document.getElementById('espaciototalcat1')
    let preguntacat = (prompt('digite la categoria'))
    let productocat = arreglo_productos.filter(producto => producto.cate == preguntacat)           //uso filter
    console.log(productocat)
    console.log(arreglo_productos[0]['cate'])
    cadena = cadena + `En la categoria ${preguntacat} hay ${productocat.length} productos`
    productocat.forEach(produc => {                                                                  //uso forEach
        cadena=cadena + ` <br>${produc.nomb}`
    });
       espaciocat.innerHTML=`${cadena}`
}

function total_product() { //esta mela
    //lenght arreglo
    arreglo_productos = JSON.parse(localStorage.productos)
    let cadena=""
    let espacioproductos = document.getElementById('espaciototalproduct1')
    let nombresas=arreglo_productos.map(element=>{                                 //usa del map
        return element.nomb
    })
    cadena = `En la tienda actualmente hay ${nombresas.length} productos`
    console.log(nombresas.length)
    nombresas.forEach(element => {                                                          //uso forEach
        cadena=cadena + `<br> ${element}`
    });
    espacioproductos.innerHTML=`${cadena}`
}

function valor_totalproduct() {   //esta mela
    //sumar precios
    arreglo_productos = JSON.parse(localStorage.productos)
    let suma=arreglo_productos.reduce((acumulador, elemento)=>{                    //uso de reduce
        return acumulador+=elemento.prec;                           
      },0)
    let espaciovalor = document.getElementById('espaciovalor1');
    try {
        suma*2
    } catch (error) {                               //suo try and catch
        console.log(error)
    }
    espaciovalor.innerHTML = `La suma total de los precios de los productos es ${suma}`
}

function disminuir() { //esta melo
    arreglo_productos = JSON.parse(localStorage.productos)
    let espaciodisminuir = document.getElementById('espaciodisminuir1')
    let pregunta = prompt('digite el nombre del producto a disminuir su cantidad')
    let bus=arreglo_productos.find(ele => ele.nomb == pregunta)                                     //uso find
    if (bus==undefined) {
       espaciodisminuir.innerHTML=`<br> El producto a buscar no esta en la lista de productos`
   } else{
        let discanti = parseInt(prompt('ingrese la cantidad a aumentar de la cantidad'))
        bus.canti=parseInt(bus.canti)-parseInt(discanti)
        espaciodisminuir.innerHTML=`<br> Ahora la cantidad de ${pregunta} es de ${bus.canti} unidades `
   }
    productos=arreglo_productos
    console.log(productos)
    localStorage.productos = JSON.stringify(productos)
}

function aumentar() { //esta melo
    arreglo_productos = JSON.parse(localStorage.productos)
    let espacioaumentar = document.getElementById('espacioaumentar1')
    let pregunta = prompt('digite el nombre del producto a aumentar su cantidad')
    let bus=arreglo_productos.find(ele => ele.nomb == pregunta)                         //uso find
    if (bus==undefined) {
       espacioaumentar.innerHTML=`<br> El producto a buscar no esta en la lista de productos`
   } else{
        let subircanti = parseInt(prompt('ingrese la cantidad a aumentar de la cantidad'))
        bus.canti=parseInt(bus.canti)+parseInt(subircanti)
        espacioaumentar.innerHTML=`<br> Ahora la cantidad de ${pregunta} es de ${bus.canti} unidades `
   }
    productos=arreglo_productos
    console.log(productos)
    localStorage.productos = JSON.stringify(productos)
}

function buscarproduct() {    //esta melo
    arreglo_productos = JSON.parse(localStorage.productos)
    let espaciobusqueda=document.getElementById('espaciobusqueda1')
    let pregunta = prompt('digite el nombre del producto')
    let bus=arreglo_productos.find(ele => ele.nomb == pregunta)                                //uso find
     if (bus==undefined) {
        espaciobusqueda.innerHTML=`El producto a buscar no esta en la lista de productos`
    } else{
        espaciobusqueda.innerHTML=`El producto ${bus.nomb} tiene: <br> Categoria ${bus.cate}  <br> Precio ${bus.prec}  <br>Cantidad ${bus.canti}  <br>`
    }
}

function eliminarproduct() {    //esta good
    arreglo_productos = JSON.parse(localStorage.productos)
    let espacioeliminar=document.getElementById('espacioeliminar1')
    let pregunta = prompt('digite el nombre del producto')
    let noes
    for (let i = 0; i < arreglo_productos.length; i++) {
        if (arreglo_productos[i]['nomb'] == pregunta) {
            arreglo_productos.splice(i,1)
            espacioeliminar.innerHTML=`Ya fue eliminado el producto ${pregunta}`
            console.log(arreglo_productos)
            noes=false;
           break;
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
    arreglo_productos = JSON.parse(localStorage.productos)
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
    let esptabla= document.getElementById('tabla')
    let string=`<tr><th>Nombre</th><th>Categoria</th><th>Cantidad</th><th>Precio</th></tr>`
    arreglo_productos.forEach(element => {
        string=string+`<tr><td>${element.nomb}</td><td>${element.cate}</td><td>${element.canti}</td><td>${element.prec}</td></tr>`
    });
    esptabla.innerHTML=`${string}`
}