ejecutarPrueba1=function()
{
    let mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
    let inverso=recuperarTexto("txtCadena");
    invertirCadena(inverso)
}
ejecutarPrueba2=function()
{
    let inverso=recuperarTexto("txtCadena");
    invertirCadena(inverso)
}


recorrerCadena=function(cadena)
{
    let caracter
    for(let posicion=0;posicion<cadena.length;posicion++)
    {
        caracter=cadena.charAt(posicion);
        console.log("caracter "+caracter+" posicion "+posicion);

    }
    for(let posicion=0;posicion<=cadena.length-1;posicion++)// acceder a la posision de loss aracteres
    {
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" POSICION "+posicion);

    }
}
invertirCadena=function(cadena)
{
    let cadena1="";
    let caracter
    
    for(let posicion=cadena.length;posicion>=0;posicion--)
    {
        caracter=cadena.charAt(posicion);
        cadena1=cadena1+caracter
        mostrarTexto("cadena",cadena1);

    }

}