//operar para ventas 

//total a pagar

//aumentar

//disminuir

//eliminar


 import { getInfo } from "./mostrar.js";
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