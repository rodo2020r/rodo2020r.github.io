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