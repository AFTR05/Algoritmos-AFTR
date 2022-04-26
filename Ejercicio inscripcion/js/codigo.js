let pet=99999;
let cont=0;
while (pet!=0) {
    let resident=prompt("Donde vive?");
    let grade=prompt("En que grado escolar esta o alcanzo (solo digitar el numero)?");
    if ((resident=="Armenia" || resident=="armenia") && (grade==10 || grade==11)) {
        cont++;
        if (cont==1) {
            alert("Felicidades lograste inscribirte ademas de ello no tienes que pagar la inscripcion por que fuiste el primero en inscribirte");
            document.write("felicidades XD")
        } else {
            alert("Felicidades lograste aplicar para la inscripcion solo debes pagar 100000");
        }
    } else {
        alert("No aplica para inscribirse");
    }
   pet=prompt("desea continuar, si no es asi digite 0");
}