//operar para ventas 

//total a pagar

//aumentar

//disminuir

//eliminar


import { getInfo } from "./mostrar.js";
import { url } from "./main.js";



let productos;
let espedit= document.getElementById('divedicion')
const btnsave=document.getElementById('botonedit')
const btnadd=document.getElementById('botonadd')
btnsave.addEventListener('click',()=>{
    addchanges()
    addproduct()
    setInterval(() => {
        location.reload()
      }, 3000);
})
btnadd.addEventListener('click',addinputpro)
let itedicion=0


window.onload=()=>getdatos();


async function getdatos() {
    productos=await getInfo('products');
    creacion_divs()
    creacion_inputs()
}
//creacion divs---------------------------------------------------------------------------------------------------------------------------
function creacion_divs() {
    for (let i = 0; i < productos.length; i++) {
        let divcreator=document.createElement('div');
        divcreator.setAttribute('id',`div${i}`);
        divcreator.setAttribute('class','divinputs');
        espedit.appendChild(divcreator);
    }
 }



//creacion inputs ---------------------------------------------------------------------------------------------------------------------
function creacion_inputs() {

    for (let i = 0; i < productos.length; i++) {
        let divcontenedor=document.getElementById(`div${i}`)
        let inputname=document.createElement('input');
        let inputtipo=document.createElement('input');
        let inputcanti=document.createElement('input');
        let inputprecio=document.createElement('input');
        let inputimg=document.createElement('input')
        let botondele=document.createElement('button')
        botondele.setAttribute('class','btn-danger')
        botondele.setAttribute('id',`botondele${i}`)
        botondele.innerHTML=`-`
        inputcanti.setAttribute('id',`inputcanti${i}`)
        inputname.setAttribute('id',`inputname${i}`)
        inputprecio.setAttribute('id',`inputprecio${i}`)
        inputtipo.setAttribute('id',`inputtipo${i}`)
        inputimg.setAttribute('id',`inputimg${i}`)
        inputcanti.setAttribute('class','inputedit')
        inputname.setAttribute('class','inputedit')
        inputprecio.setAttribute('class','inputedit')
        inputtipo.setAttribute('class','inputedit')
        inputimg.setAttribute('class','inputedit')
        inputcanti.setAttribute('value',`${productos[i]['cantidad']}`)
        inputname.setAttribute('value',`${productos[i]['nombre']}`)
        inputprecio.setAttribute('value',`${productos[i]['precio']}`)
        inputtipo.setAttribute('value',`${productos[i]['Tipo']}`)
        inputimg.setAttribute('value',`${productos[i]['imagen']}`)
        inputcanti.setAttribute('type','number')
        inputname.setAttribute('type','text')
        inputprecio.setAttribute('type','number')
        inputtipo.setAttribute('type','text')
        inputimg.setAttribute('type','url')
        divcontenedor.appendChild(inputname)
        divcontenedor.appendChild(inputtipo)
        divcontenedor.appendChild(inputcanti)
        divcontenedor.appendChild(inputprecio)
        divcontenedor.appendChild(inputimg)
        divcontenedor.appendChild(botondele)
        
        
    }
    let btnelimi=document.querySelectorAll(`.btn-danger`)
        console.log(btnelimi)
        btnelimi.forEach(element => {
         let ubication=element.id
         let iterador =ubication.substring(9)
         element.addEventListener('click',()=> {
             elimi(parseInt(iterador)+1)
         })
     });
}


function addchanges(){
    try {
        for (let i = 0; i < 100 ; i++) {
            let inpname=document.getElementById(`inputname${i}`)
            let inptipo=document.getElementById(`inputtipo${i}`)
            let inpcanti=document.getElementById(`inputcanti${i}`)
            let inpprec=document.getElementById(`inputprecio${i}`)
            let inpimg=document.getElementById(`inputimg${i}`)
            if (inpname.value==""||inptipo.value==''||inpcanti.value==''||inpprec.value==''||inpimg.value=='' ) {
              continue;
            } 
            if (inpname.value==undefined||inptipo.value==undefined||inpcanti.value==undefined||inpprec.value==undefined||inpimg.value==undefined) {
              break;
            }
           let produ={
            'nombre':inpname.value,
            'Tipo':inptipo.value,
            'cantidad':inpcanti.value,
            'precio':inpprec.value,
            'imagen':inpimg.value,
            'id':i+1
           }      
           puts(i+1,produ)
           
        }
    } catch (error) {
        console.log(error)
    }
}

function addproduct() {
    let idnew=productos.length
    for (let i = 0; i < 100; i++) {
        let newinpname=document.getElementById(`inputnamenew${i}`)
        let newinptipo=document.getElementById(`inputtiponew${i}`)
        let newinpcanti=document.getElementById(`inputcantinew${i}`)
        let newinpprec=document.getElementById(`inputprecionew${i}`)
        let newinpimg=document.getElementById(`inputimgnew${i}`)
        if (newinpname.value==""||newinptipo.value==''||newinpcanti.value==''||newinpprec.value==''||newinpimg.value=='' ) {
            continue;
        } 
        if (newinpname.value==undefined||newinptipo.value==undefined||newinpcanti.value==undefined||newinpprec.value==undefined||newinpimg.value==undefined) {
            break;
        }
      let newprodu={
        'nombre':newinpname.value,
        'Tipo':newinptipo.value,
        'cantidad':newinpcanti.value,
        'precio':newinpprec.value,
        'imagen':newinpimg.value,
        'id':idnew
      }  
      posts(newprodu)
      idnew+=1
    }
}



function posts(dato) {
    fetch(url+"products",{
             method:'POST',
             body:JSON.stringify(dato),
             headers:{
                 "Content-type":"application/json"
             }
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    
 }


 function elimi(id) {
     fetch(url+"products/"+id,{
         method:'DELETE'
     })
     .then(resp=>resp.json())
     .then(data=>console.log(data))
     
 }

function puts(id,dato) {
    fetch(url+"products/"+id,{
        method:'PUT',
        body:JSON.stringify(dato),
        headers:{
        "Content-type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    
 }


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
    let inpimgnew=document.createElement('input')
    inpnamenew.setAttribute('id',`inputnamenew${itedicion}`)
    inptiponew.setAttribute('id',`inputtiponew${itedicion}`)
    inpcantinew.setAttribute('id',`inputcantinew${itedicion}`)
    inpprecnew.setAttribute('id',`inputprecionew${itedicion}`)
    inpimgnew.setAttribute('id',`inputimgnew${itedicion}`)
    inpnamenew.setAttribute('class','inputnew')
    inptiponew.setAttribute('class','inputnew')
    inpcantinew.setAttribute('class','inputnew')
    inpprecnew.setAttribute('class','inputnew')
    inpimgnew.setAttribute('class','inputnew')
    inpnamenew.setAttribute('type','text')
    inptiponew.setAttribute('type','text')
    inpcantinew.setAttribute('type','number')
    inpprecnew.setAttribute('type','number')
    inpimgnew.setAttribute('type','url')
    let diveditorcon=document.getElementById(`divedicion${itedicion}`)
    diveditorcon.appendChild(inpnamenew)    
    diveditorcon.appendChild(inptiponew)
    diveditorcon.appendChild(inpcantinew)
    diveditorcon.appendChild(inpprecnew)
    diveditorcon.appendChild(inpimgnew)
    itedicion=itedicion+1; 
 }

//--------------------------------------------------------------------------------------------------------------------------------







