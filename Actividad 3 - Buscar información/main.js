//Buscar una asignatura y mostrar los estudiantes registrados
let asignaturas={
    profesor:"Monica",
    algoritmos:["Monica","Santiago","Nicolas"],
    programacion:["Monica","Alvaro","Maria Fernanda","Santiago J"],
    introduccion:["Monica","Juan Pablo", "Juan Camilo", "Juan Jose"]
}
const buscarInformacion=asignatura=>{
    if(asignaturas[asignatura]!==undefined){
        return asignaturas[asignatura];
    }
    else{
        return false;   
    }
}
/**
 * Imprimir en DOM la asignatura el profesor y los estudiantes
 */
const imprimir=()=>{
    let asignatura=prompt("Ingrese la asignatura a buscar");
    let busqueda=buscarInformacion(asignatura);
    console.log(asignaturas);
    if(busqueda!=false){
        //asumiendo que el primer dato corresponde con el profesor
        let professor= asignaturas["profesor"];
        document.write(`El profesor de ${asignatura} es: <b> ${professor} </b><br>`);
        document.write(`Los estudiantes de ${asignatura} son: ${asignaturas[asignatura]}`);
    }
    else{
        document.write("No se encuentra esa materia");
    }
}
//En qué materias está registrado un estudiante?

// console.log(asignaturas['algoritmos'].includes(elegir))
function busquedamatestu() {
    let elegir=prompt("Digite el estudiante"); 
    let pertenece=[]
    let i=0;
    if (asignaturas['algoritmos'].includes(elegir)==true) {
        pertenece[i]='algoritmos';
        i++;
    }

    if (asignaturas['programacion'].includes(elegir)==true) {
        pertenece[i]='programacion';
        i++
    }

    if (asignaturas['introduccion'].includes(elegir)==true) {
        pertenece[i]='introduccion';
        i++
    }
    
    for (let j = 0; j < pertenece.length; j++) {
        console.log(`El estudiante ${elegir} esta en:`)
        console.log(`${pertenece[j]}`)
    }
}

busquedamatestu();