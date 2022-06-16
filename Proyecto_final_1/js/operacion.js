//operar para ventas 

//total a pagar

//aumentar

//disminuir

//eliminar


import { getInfo } from "./mostrar.js";
import { url } from "./main.js";




let productos
//creacion divs---------------------------------------------------------------------------------------------------------------------------
 async function creacion_divs() {
    productos=await getInfo("products");
    console.log('productos')
    for (let i = 0; i < productos.length; i++) {
        let divcreator=document.createElement('div')
        divcreator.setAttribute('id',`div${i}`)
        divcreator.setAttribute('class','divinputs')
        espedit.appendChild(divcreator);
    }
 }
creacion_divs()
console.log(productos)
let espedit= document.getElementById('divedicion')

//creacion inputs ---------------------------------------------------------------------------------------------------------------------
async function creacion_inputs() {
    productos=await getInfo('products');
    for (let i = 0; i < productos.length; i++) {
        let divcontenedor=document.getElementById(`div${i}`)
        let inputname=document.createElement('input');
        let inputtipo=document.createElement('input');
        let inputcanti=document.createElement('input');
        let inputprecio=document.createElement('input');
        let botondele=document.createElement('button')
        botondele.setAttribute('class','btn-danger')
        botondele.setAttribute('id',`botondele${i}`)
        botondele.innerHTML=`-`
        inputcanti.setAttribute('id',`inputcanti${i}`)
        inputname.setAttribute('id',`inputname${i}`)
        inputprecio.setAttribute('id',`inputprecio${i}`)
        inputtipo.setAttribute('id',`inputtipo${i}`)
        inputcanti.setAttribute('class','inputedit')
        inputname.setAttribute('class','inputedit')
        inputprecio.setAttribute('class','inputedit')
        inputtipo.setAttribute('class','inputedit')
        inputcanti.setAttribute('value',`${productos[i]['cantidad']}`)
        inputname.setAttribute('value',`${productos[i]['nombre']}`)
        inputprecio.setAttribute('value',`${productos[i]['precio']}`)
        inputtipo.setAttribute('value',`${productos[i]['Tipo']}`)
        divcontenedor.appendChild(inputname)
        divcontenedor.appendChild(inputtipo)
        divcontenedor.appendChild(inputcanti)
        divcontenedor.appendChild(inputprecio)
        divcontenedor.appendChild(botondele)
    }
}

creacion_inputs()

const btnsave=document.getElementById('botonedit')
const btnadd=document.getElementById('botonadd')

btnsave.addEventListener('click',addUser)
btnadd.addEventListener('click',addinputpro)


async function addUser(){
     productos=await getInfo('products');
     for (let i = 0; i < productos.length; i++) {
        let j=i+1
        elimi(j)
     }


      for (let i = 0; i < 100 ; i++) {
          let inpname=document.getElementById(`inputname${i}`)
          let inptipo=document.getElementById(`inputtipo${i}`)
          let inpcanti=document.getElementById(`inputcanti${i}`)
          let inpprec=document.getElementById(`inputprecio${i}`)
          if (inpname.value==""||inptipo.value==''||inpcanti.value==''||inpprec.value=='' ) {
            continue;
          } 
          if (inpname.value==undefined||inptipo.value==undefined||inpcanti.value==undefined||inpprec.value==undefined) {
            break;
          }
         let producto={
          'name':inpname.value,
          'Tipo':inptipo.value,
          'cantidad':inpcanti.value,
          'precio':inpprec.value,
         }        
         savechanges(producto)
      }
 }



function savechanges(dato) {
    fetch(url+"p",{
             method:'POST',
             body:JSON.stringify(dato),
             headers:{
                 "Content-type":"application/json"
             }
    })
 }


 function elimi(id) {
     fetch(url+"p/"+id,{
         method:'DELETE'
     })
     .then(response=>response.json());
 }

var itedicion=0

function addinputpro() {
    let espnewinput=document.getElementById('espnewinput')
    let diveditor=document.createElement('div')
    diveditor.setAttribute('id',`divedicion${itedicion}`)
    diveditor.setAttribute('class','divinputs')
    espnewinput.appendChild(diveditor);
    let inpnamenew=document.createElement('input')
    let inptiponew=document.createElement('input')
    let inpcantinew=document.createElement('input')
    let inpprecnew=document.createElement('input')
    inpnamenew.setAttribute('id',`inputnamenew${itedicion}`)
    inptiponew.setAttribute('id',`inputtiponew${itedicion}`)
    inpcantinew.setAttribute('id',`inputcantinew${itedicion}`)
    inpprecnew.setAttribute('id',`inputprecionew${itedicion}`)
    inpnamenew.setAttribute('class','inputnew')
    inptiponew.setAttribute('class','inputnew')
    inpcantinew.setAttribute('class','inputnew')
    inpprecnew.setAttribute('class','inputnew')
    let diveditorcon=document.getElementById(`divedicion${itedicion}`)
    diveditorcon.appendChild(inpnamenew)    
    diveditorcon.appendChild(inptiponew)
    diveditorcon.appendChild(inpcantinew)
    diveditorcon.appendChild(inpprecnew)
    itedicion=itedicion+1;
 }















