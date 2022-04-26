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
let formulario=document.getElementById('formulario');
console.log(document.getElementById('cantidadegg').value)
array_product=[document.getElementById("cantidadegg"),document.getElementById("cantidadmilk"),document.getElementById("cantidadpan"),document.getElementById("cantidadfruit")
]

console.log(array_product[0].value)

let valorhuevos=15000;
let valorleche=3500;
let valorpan=2000;
let valorfruta=5000;



for (let i = 0; i < 4; i++) {
    
}


let i = parseInt(Math.random() * (100 - 1) + 1);
console.log(i) 

