window.onload = () => {
    document.getElementById("boton1").addEventListener("click", extraer);
    document.getElementById("boton2").addEventListener("click", colorear);

    function extraer() {

        let getName = document.getElementById("i1").value;
        let getCadena = getName.split(" ");
        let apaterno = document.getElementById("aPaterno").value = getCadena[0];
        let aMaterno = document.getElementById("aMaterno").value = getCadena[1];
        for (let i = 0; i < getCadena.length; i++) {
            if (i >= 2) {
                let nombre = document.getElementById("nombre").value += getCadena[i] + " ";
            }
        }
        document.getElementById("longitud").value = getCadena[0].length + getCadena[1].length;

        let f = new Date();
        f = document.getElementById("fecha").value;
        meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        let mes_name = f.split("-");
        let mes = parseInt(mes_name[1] - 1);

        document.getElementById("edad").value = `${calcularEdad(f) } años`;
        document.getElementById("mes").value = meses[mes];
    }

    calcularEdad = (fecha) => {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return edad;
    }






    function colorear() {


        if (document.getElementById("uno").style.backgroundColor === "blue") {
            document.getElementById("uno").style.backgroundColor = "red";
            document.getElementById("dos").style.backgroundColor = "red";
            document.getElementById("tres").style.backgroundColor = "red";
            document.getElementById("cuatro").style.backgroundColor = "red";
            document.getElementById("cinco").style.backgroundColor = "red";
            document.getElementById("seis").style.backgroundColor = "blue";
            document.getElementById("siete").style.backgroundColor = "blue";
            document.getElementById("ocho").style.backgroundColor = "blue";

        } else {
            document.getElementById("uno").style.backgroundColor = "blue";
            document.getElementById("dos").style.backgroundColor = "blue";
            document.getElementById("tres").style.backgroundColor = "blue";
            document.getElementById("cuatro").style.backgroundColor = "blue";
            document.getElementById("cinco").style.backgroundColor = "blue";
            document.getElementById("seis").style.backgroundColor = "red";
            document.getElementById("siete").style.backgroundColor = "red";
            document.getElementById("ocho").style.backgroundColor = "red";
        }
    }
}