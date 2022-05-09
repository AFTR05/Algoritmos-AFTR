let cantidad_estudiantes= parseInt(prompt('Digite la cantidad de estudiantes'))

for (let i = 0; i < cantidad_estudiantes; i++){
    const estudiantes=document.getElementById('nombres');
    const notas=document.getElementById('notas');
    let inputestu=document.createElement('input').setAttribute('id',`estudiantes${i}`);
    let inputnot=document.createElement('input').setAttribute ('id',`notas${i}`);
    estudiantes.appendChild(inputestu);
    notas.appendChild(inputnot);
}