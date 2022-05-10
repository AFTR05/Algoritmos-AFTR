// lo que se busca hacer con eset ejercicio es pedir la cantidad de estudiantes, y deacuerdo a ello crear diferentes inputs para que el usuario los llene, y se logre adquirir los datos


let cantidad_estudiantes= parseInt(prompt('Digite la cantidad de estudiantes'))

for (let i = 0; i < cantidad_estudiantes; i++){
    const estudiantes=document.getElementById('nombres');
    const notas=document.getElementById('notas');

    let inputestu=document.createElement('input')
    inputestu.setAttribute('id',`estudiantes${i}`);   
                                                        //nota mental nunca puedes crear etiquetas y colocar atributos a las vez por que o si no, no toma como nodo la direccion
    let inputnot=document.createElement('input')
    inputnot.setAttribute ('id',`notas${i}`);
    estudiantes.appendChild(inputestu);
    notas.appendChild(inputnot);
}

let formulario= document.getElementById('formulario')