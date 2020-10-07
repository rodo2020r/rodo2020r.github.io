let contador = 0;
let fecha = new Date;

function lecturaActualizada() {
    if (contador == 0) {
        document.getElementById("cambio").innerHTML = "lectura completada";
        contador = 1;
    } else {
        document.getElementById("cambio").innerHTML = "lectura de 3 min";
        contador = 0;
    }
}

function ActualizarFotos() {
    var x = document.getElementById("ocultar");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("foto").style.display = "block";
    } else {
        x.style.display = "block";
        document.getElementById("foto").style.display = "none";
    }
}

function horaactual() {
    if (document.getElementById("hora").innerHTML === "") {
        document.getElementById("hora").innerHTML = fecha;;
    } else {
        document.getElementById("hora").innerHTML = "";
    }

}