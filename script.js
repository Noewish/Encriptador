function encriptar() {
    var texto = document.getElementById("input-text").value.toLocaleLowerCase();
   //i es para que afecte tanto mayusculas como mnusculas
   //g es para toda la linea u oracion
   //m es para que afecte a multiplea lineas o parrafos
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text-right").style.display = "none";
    document.getElementById("text2-right").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("input-text").value.toLocaleLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text-right").style.display = "none";
    document.getElementById("text2-right").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#text2-right");
    contenido.select();
    document.execCommand("copy");
}