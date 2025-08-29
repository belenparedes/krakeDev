recuperarTexto=function(idComponente)
{
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;    
    return valorIngresado;
}

recuperarInt=function(idComponente)
{
    let componente;
    let valorIngresado;
    let valorEntero;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value; 
    valorEntero=parseInt(valorIngresado);   
    return valorEntero;
}

recuperarFoat=function(idComponente)
{
    let componente;
    let valorIngresado;
    let valorFlotante;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value; 
    valorFlotante=parseFloat(valorIngresado);   
    return valorFlotante;
}

mostrarTexto=function(idComponente, mensaje)
{
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje; 
 
}
 mostrarImagen=function(idComponente, rutaImagen)
 {
    let componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
 }

 mostrarTextoEnCaja=function(idComponente, mensaje)
 {
    let componente=document.getElementById(idComponente);
    componente.value=mensaje;
 }