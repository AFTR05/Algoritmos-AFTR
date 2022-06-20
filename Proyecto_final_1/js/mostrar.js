//mostrar por tablas 

//mostrar ventas

//mostrar 


//volver tabla a input para editar

import { url } from "./main.js";
export const getInfo=async(objeto)=>{
    const answer= await fetch(url+objeto);
    return answer.json();
}





const divimagenes=document.getElementById('divcom');
const espmispro=document.getElementById('tabla');
const espfactura=document.getElementById('factxd');
const espmissell=document.getElementById('tablasell')
const comprarbtn=document.getElementById('btncomprar')
const descartarbtn=document.getElementById('btndescartar')
const valortt=document.getElementById('btntt')
const totalnote=document.getElementById('totalnote')


window.onload=()=>{
    takeges()
    takedatos()
}


let productos;
let ventas;
let string;
let itt=0;
let ubications=[]

try {
    comprarbtn.addEventListener('click',()=>{
    for (let i = 0; i < ubications.length; i++) {
        cambiosarreglos(i,ubications[i])
    }
    btncomprar()
   swal({
        title: "Completado!",
        text: "Has completado tu compra",
        icon: "success",
        button: "Continuar",
      })
      setInterval(() => {
        location.reload()
      }, 3000);

})
} catch (error) {
    console.log(error)
}

try {
    descartarbtn.addEventListener('click',descartar)
} catch (error) {
    console.log(error)
}

try {
    valortt.addEventListener('click',()=>{
    valortotal()
    comprarbtn.removeAttribute('hidden')

})
} catch (error) {
    console.log(error)
}



async function takedatos() {
    productos=await getInfo('products')
    getproducts()

}

async function takeges() {
    ventas=await getInfo('ventas')
    productos=await getInfo('products')
    showsell()
    showInfo()

}

function getproducts(){
    for (let i = 0; i < productos.length; i++) {
        let divorden=document.createElement('div')
        divorden.setAttribute('id',`divorden${i}`)
        divorden.setAttribute('class','divorden')
        divimagenes.appendChild(divorden);
        let esporden=document.getElementById(`divorden${i}`);
        let div=document.createElement('div');
        div.setAttribute('id',`divimg${i}`);
        div.setAttribute('class','divimagenes');
        esporden.appendChild(div);
        let image=document.createElement('img');
        image.setAttribute('class', 'imagenespro');
        image.setAttribute('src', `${productos[i]['imagen']}`);
        let espdivimg=document.getElementById(`divimg${i}`);
        let nombre=document.createElement('h6');
        nombre.setAttribute('id',`nombreprod${i}`);
        nombre.innerHTML=`${productos[i]['nombre']}`;
        let boton=document.createElement('button');
        boton.setAttribute('class',`btn btn-outline-dark`);
        boton.setAttribute('id',`btnagregar${i}`)
        boton.setAttribute('style','width: 100px;');
        boton.innerHTML=`$${productos[i]['precio']}`;
        espdivimg.appendChild(image);
        espdivimg.appendChild(nombre);
        espdivimg.appendChild(boton);
        if (productos[i]['cantidad']==0 || productos[i]['cantidad']<0) {
            nombre.setAttribute('hidden');
            image.setAttribute('hidden');
            boton.setAttribute('hidden');
        }
    }
    let btnagregar=document.querySelectorAll(`.btn-outline-dark`)
    console.log(btnagregar)
    string=`<tr class="table-dark"><th>Nombre</th><th>Cantidad</th><th>Precio</th></tr>`
    btnagregar.forEach(element => {
    let ubicacion=element.id
    let iterador =ubicacion.substring(10)
    element.addEventListener('click',()=> {
    direccionfactura(parseInt(iterador))
    descartarbtn.removeAttribute('hidden')
    valortt.removeAttribute('hidden')
 })
});
}


function direccionfactura(ubication) {
     string=string+`<tr><td>${productos[ubication]['nombre']}</td><td><input type="number" placeholder="Cantidad" class="espcantidad" min=1  max='${productos[ubication]['cantidad']}' autocomplete="off"
     class="form-control" id="canti${itt}"></td><td class='esprec'>${parseInt(productos[ubication]['precio'])}</td></tr>`
     ubications.push(ubication)
     espfactura.innerHTML=`${string}`;
     itt=itt+1
     
}


function valortotal() {
    let cantidades=document.querySelectorAll(`.espcantidad`)
    let precios=document.querySelectorAll(`.esprec`)
    let preciototal=0;
    console.log(cantidades);
    console.log(precios);
    for (let i = 0; i < precios.length; i++) {
       preciototal=preciototal+(parseInt(cantidades[i].value)*parseInt(precios[i].innerText))
    }

    totalnote.innerHTML=`Valor total:$${preciototal}`
}


function cambiosarreglos(id,ubication) {
    let cantiinput=document.getElementById(`canti${id}`)
    console.log(cantiinput)
    console.log(ubications)
     ventas[parseInt(ubication)]['cantidad']=parseInt(ventas[parseInt(ubication)]['cantidad'])+parseInt(cantiinput.value)
     console.log(ventas[parseInt(ubication)]['cantidad'])
     productos[parseInt(ubication)]['cantidad']=parseInt(productos[parseInt(ubication)]['cantidad'])-parseInt(ventas[parseInt(ubication)]['cantidad'])
}

function btncomprar() {
  for (let i = 0; i < productos.length; i++) {
       let produ={
        'nombre':productos[i]['nombre'],
        'Tipo':productos[i]['Tipo'],
        'cantidad':productos[i]['cantidad'],
        'precio':productos[i]['precio'],
        'imagen':productos[i]['imagen'],
        'id':i+1
       }      
       putst(i+1,produ,'products')
  }
  for (let i = 0; i < ventas.length; i++) {
    let vent={
     'nombre':ventas[i]['nombre'],
     'Tipo':ventas[i]['Tipo'],
     'cantidad':ventas[i]['cantidad'],
     'precio':ventas[i]['precio'],
     'imagen':ventas[i]['imagen'],
     'id':i+1
    }      
    putst(i+1,vent,'ventas')
}
}

function putst(id,dato,resour) {
    fetch(url+`${resour}/`+id,{
        method:'PUT',
        body:JSON.stringify(dato),
        headers:{
        "Content-type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    
 }
//---------------------------------------------------------------------------------------------------------------------------------------------
//tabla de productos 

function showInfo(){
    let string=`<tr class="table-dark"><th>Nombre</th><th>Tipo</th><th>Cantidad</th><th>Precio</th></tr>`
    productos.forEach(element => {
        string=string+`<tr><td>${element.nombre}</td><td>${element.Tipo}</td><td>${element.cantidad}</td><td>${element.precio}</td></tr>`
    });
    espmispro.innerHTML=`${string}`;
}


//----------------------------------------------------------------------------------------------------------------------------------------
//tabla de ventas
 function showsell() {
    let string=`<tr class="table-dark"><th>Nombre</th><th>Tipo</th><th>Cantidad</th><th>Precio</th></tr>`
        ventas.forEach(element => {
        string=string+`<tr><td>${element.nombre}</td><td>${element.Tipo}</td><td>${element.cantidad}</td><td>${element.precio}</td></tr>`
    });
    espmissell.innerHTML=`${string}`;
 }


function descartar() {
    string=`<tr class="table-dark"><th>Nombre</th><th>Cantidad</th><th>Precio</th></tr>`
    espfactura.innerHTML=`${string}`
    totalnote.innerHTML=``;
    setInterval(() => {
        location.reload()
      }, 200); 
}