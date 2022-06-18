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
const espfactura=document.getElementById('factura');
const espmissell=document.getElementById('tablasell')
let productos;
let ventas;

window.onload=takedatos()
window.onload=takeges()
async function takedatos() {
    productos=await getInfo('products');
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
        boton.setAttribute('class', 'botonagre');
        boton.setAttribute('id',`agregar${i}`);
        boton.setAttribute('style','width: 100px;');
        boton.innerHTML=`${productos[i]['precio']}`;
        espdivimg.appendChild(image);
        espdivimg.appendChild(nombre);
        espdivimg.appendChild(boton);
        if (productos[i]['cantidad']==0 || productos[i]['cantidad']<0) {
            nombre.setAttribute('hidden');
            image.setAttribute('hidden');
            boton.setAttribute('hidden');
        }
    }
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

//funcion de facturacion o tabulacion del momento de agregar productos 

//creacion de arreglo con las ubicaciones de los botones de agregar

//creacion en un ciclo de los eventos 

// function addshop() {
//     let ubibtn=[]
//     for (let i = 0; i < productos.length; i++) {
//         let ubi=document.getElementById(`agregar${i}`)
//         console.log(ubi.id)
//         ubibtn.push(ubi)
//     }
//     ubibtn.forEach(element => {
//         element.addEventListener('click',eventos(element))
//     });
// }


// function eventos(ubicacion) { //funcion
//     let id=ubicacion.id;
//     let iterador=id.substr(7)
//     console.log(iterador);
//     let string=`<tr class="table-dark"><th>Nombre</th><th>Tipo</th><th>Cantidad</th><th>Precio</th></tr>`
//     string=string+`<tr><td>${productos[iterador]['nombre']}</td><td>${productos[iterador]['Tipo']}</td><td>${productos[iterador]['cantidad']}</td><td>${productos[iterador]['precio']}</td></tr>`
//     espfactura.innerHTML=`${string}`;
// }

