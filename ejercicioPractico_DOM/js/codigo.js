// Se tiene una tienda con un inventario de los siguientes productos:

// ● huevos (30 canastas)=15000 c/u
// ● leche (20 unidades) =3500 c/u
// ● pan (50 unidades)=2000 c/u
// ● fruta mix (50 unidades)=5000 c/u

// ● Al presionar un botón genere un bono de regalo utilizando un random
// (Math.random), indiquele al usuario el valor del bono generado.
// ● Solicite al usuario ingresar los productos que desea llevar, agregando uno a uno
// ● Al finalizar la compra debe indicarle al usuario el monto total de la compra, el
// descuento generado por el bono de regalo, y el monto final que deberá pagar.
const cantidadegg=document.getElementById('cantidadegg')
const cantidadfruit=document.getElementById('cantidadfruit')
const cantidadpan=document.getElementById('cantidadpan')
const cantidadmilk=document.getElementById('cantidadmilk')

let array_product;
let formulario=document.getElementById('formulario');
formulario.addEventListener("submit",conservar=(e)=>{
    e.preventDefault();
    console.log("funciona")
    array_product=[cantidadegg.value,cantidadmilk.value,cantidadpan.value,cantidadfruit.value]
    console.log(array_product)
    let impri=document.getElementById("espacioresul")
    console.log(resultado_descuento)
    function valor_total() {    //se encarga de hacer las operaciones 
        let valorhuevos=15000;
        let valorleche=3500;
        let valorpan=2000;
        let valorfruta=5000;
        let valor=[valorhuevos,valorleche,valorpan,valorfruta]        
        let resultadopago=[]
        for (let i = 0; i < 4; i++) {
        resultadopago[i]=parseInt(array_product[i]*valor[i])
        }
        for (let i = 0; i < 4; i++) {
        sumarreglo+=resultadopago[i];               
        } 
        let multides=parseInt(resultado_descuento*sumarreglo);
        console.log(multides)
        let pagodes=parseInt(sumarreglo-multides);
        console.log(pagodes)
        sumarreglo=0               
     impri.innerHTML=`El valor a pagar es $${pagodes}`
    }
    let boton2=document.getElementById("boton2")
    boton2.addEventListener('click',valor_total())
})

// let limit=[30,20,50,50]          posible estructura para limites para futuro 
// function limites(){
//     array_canti=[cantidadegg.value,cantidadmilk.value,cantidadpan.value,cantidadfruit.value]
//     for (let i = 0; i < 4; i++) {
//         limit[i]=limit[i]-array_canti[i];
//     }  
    
//     cantidadegg.setAttribute('max', limit[0])
//     cantidadegg.getAttribute('max')
//     cantidadmilk.setAttribute('max', limit[1])
//     cantidadpan.setAttribute('max', limit[2])
//     cantidadfruit.setAttribute('max', limit[3])
// }
//     boton2.addEventListener('click',limites())


let descuento=0
let band=false
let resultado_descuento=0
let sumarreglo=0
   //descuento
function creacion_descuento(){
    let descuento = parseInt(Math.random() * (100 - 1) + 1);
    console.log(band) ;
    if (band==false) {
        resultado_descuento=descuento/100;
        let espacio=document.getElementById('espacioimp')
        espacio.innerHTML=`Felicidades tiene un descuento de ${descuento}% que se hara efectivo en su compra `;
        band=true
        
    } else {
        alert(`Opa ya tienes un descuento, suerte en la proxima`)
    }
    console.log(resultado_descuento)
    }   
let boton=document.getElementById("boton")
boton.addEventListener('click',creacion_descuento)







