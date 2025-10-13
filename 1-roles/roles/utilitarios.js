
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}
esMayuscula=function(caracter)
{
    let mayuscula=false;
    let codigo;
    for(let i=0;i<caracter.length;i++)
    {
        let codigo1=caracter.charCodeAt(i);
         if (codigo1>=65 && codigo1<=90)
            {
                mayuscula=true;
            }
    }
           
    return mayuscula;
}
esDigito=function(caracter)
{
    let mayuscula=false;
    for(let i=0;i<caracter.length;i++)
    {
        let codigo1=caracter.charCodeAt(i);
         if (codigo1>=48 && codigo1<=57)
            {
                mayuscula=true;
            }
    }
           
    return mayuscula;
}
