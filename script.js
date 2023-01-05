//Definición de variables
let textoRecibido;
let textoEncriptado;
let ocultarSpan = document.querySelector(".mensaje");
let escribirPantalla = document.querySelector(".mostrarMensaje");
let copiar = document.querySelector(".copiar");
let btnCopiar = document.querySelector(".btnCopiar");
let imagenLupa = document.querySelector(".persona-lupa");

//quita los acentos de un texto
const quitarAcentos = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 
//Lee el texto y lo trae para trabajar con el
function leerTexto(texto){
    textoRecibido = texto;
}

//Trae el texto recibido y lo encripta, si tiene acentos o mayúsculas se los quita
function encriptarTexto(){
    if(textoRecibido){
    textoEncriptado = textoRecibido.toLowerCase();
    textoEncriptado = quitarAcentos(textoRecibido);
    textoEncriptado = textoEncriptado.replaceAll("e","enter");
    textoEncriptado = textoEncriptado.replaceAll("i","imes");
    textoEncriptado = textoEncriptado.replaceAll("a","ai");
    textoEncriptado = textoEncriptado.replaceAll("o","ober");
    textoEncriptado = textoEncriptado.replaceAll("u","ufat");
    escribirPantalla.innerHTML=textoEncriptado;
    //Cambia los stylos de css para que sean dinámicos al dar click
    imagenLupa.setAttribute("style", "visibility: hidden; width: 0px; height: 0px; margin-top: 0;");
    escribirPantalla.setAttribute("style", "font-weight: lighter; padding:15px; visibility: visible;");
    escribirPantalla.setAttribute("rows", "15");
    ocultarSpan.setAttribute("style","visibility: hidden; height:0px");
    }else{
        alert("Por favor inserte un texto primero")
    }
}
//Trae el texto recibido y lo desencripta, si tiene acentos o mayúsculas se los quita
function desencriptarTexto(){
    if(textoRecibido){
    textoEncriptado = textoRecibido.toLowerCase();
    textoEncriptado = quitarAcentos(textoRecibido);
    textoEncriptado = textoEncriptado.replaceAll("enter","e");
    textoEncriptado = textoEncriptado.replaceAll("imes","i");
    textoEncriptado = textoEncriptado.replaceAll("ai","a");
    textoEncriptado = textoEncriptado.replaceAll("ober","o");
    textoEncriptado = textoEncriptado.replaceAll("ufat","u");
    escribirPantalla.innerHTML=textoEncriptado;
    //Cambia los stylos de css para que sean dinámicos al dar click
    imagenLupa.setAttribute("style", "visibility: hidden; width: 0px; height: 0px; margin-top: 0;");
    escribirPantalla.setAttribute("style", "font-weight: lighter; padding:15px; visibility: visible;");
    escribirPantalla.setAttribute("rows", "15");
    ocultarSpan.setAttribute("style","visibility: hidden; height:0px");
    }else{
        alert("Por favor inserte un texto primero")
    }
}

//Muestra el botón de copiado cuando  existe un texto recibido
function mostrarBtnCopia(){
    if(textoRecibido){
        btnCopiar.style.visibility = "visible";
    }
}

//Permite copiar al dar clic en el botón de Copia
btnCopiar.addEventListener('click', function(event){
    escribirPantalla.select(); //área que será copiada

    try{
        let copiado = document.execCommand('copy'); //Copia el área seleccionada al porta papeles
        if(copiado){
            alert("Se copió al portapapeles");
        }else{
            alert("Incapaz de copiar");
        }
    }catch (err){
        alert("El navegador no está soportado");    //En caso de que el navegador no soporte el execCommand
    }
})




