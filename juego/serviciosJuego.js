obtenerAleatorio=function()
{
    let aleatorio
    let entero
    let numeroMultiplicado
    let valoDado
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*3;
    entero=parseInt(numeroMultiplicado) //entre 0 y 2
    valoDado=entero+1;// valor entre 1 y 3
    return valoDado;
}
generarElemento=function()
{
    let numeroAleatorio
    numeroAleatorio=obtenerAleatorio();
    if(numeroAleatorio==1)
    {
        return "piedra";
    }
    else if(numeroAleatorio==2)
    {
        return "papel";
    }
    else
    {
        return "tijera";
    }   
}
determinarGanador=function(eleccionJugador1,eleccionJugador2)
{
    let ganador
    if(eleccionJugador1==eleccionJugador2)
    {
        ganador="0";
    }      
    else if((eleccionJugador1=="piedra" && eleccionJugador2=="tijera") || (eleccionJugador1=="tijera" && eleccionJugador2=="papel") || (eleccionJugador1=="papel" && eleccionJugador2=="piedra"))
    {
        ganador="1";
    }   
    else
    {
        ganador="2";
    } 
    return ganador;
}
generarRuta=function(nombre)
{
    let ruta
     nombre=generarElemento();
   if(nombre=="piedra")
    {
        ruta="./imagenes/piedra.png";
    }
    else if(nombre=="papel")
    {
        ruta="./imagenes/papel.png";
    }
    else
    {
        ruta="./imagenes/tijera.png";
    }
    return ruta;
}
    