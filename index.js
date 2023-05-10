function encriptar() {
  var texto = document.getElementById("inputtexto").value;

  var textoCifrado = texto.replace(/e/gi, "enter");
  var textoCifrado = textoCifrado.replace(/i/gi, "imes");
  var textoCifrado = textoCifrado.replace(/a/gi, "ai");
  var textoCifrado = textoCifrado.replace(/o/gi, "ober");
  var textoCifrado = textoCifrado.replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("inftexto").style.display = "none";
    document.getElementById("resptext").style.display = "flex";
    document.getElementById("resptext").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "flex";
  } else {
    document.getElementById("imgDerecha").style.display = "flex";
    document.getElementById("inftexto").style.display = "flex";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("resptext").style.display = "none";
  }
}

function desencriptar() {
  var texto = document.getElementById("inputtexto").value;

  var textoCifrado = texto.replace(/enter/gi, "e");
  var textoCifrado = textoCifrado.replace(/imes/gi, "i");
  var textoCifrado = textoCifrado.replace(/ai/gi, "a");
  var textoCifrado = textoCifrado.replace(/ober/gi, "o");
  var textoCifrado = textoCifrado.replace(/ufat/gi, "u");
  
  if (texto.length != 0) {
    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("inftexto").style.display = "none";
    document.getElementById("resptext").style.display = "flex";
    document.getElementById("resptext").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "flex";
  } else {
    document.getElementById("imgDerecha").style.display = "flex";
    document.getElementById("inftexto").style.display = "flex";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("resptext").style.display = "none";
  }
}

function copiar() {
  var contenido = document.querySelector("#resptext");
  contenido.select();
  console.log(contenido)
  document.execCommand("copy");
  alert("Texto guardado en el portapapeles")
}