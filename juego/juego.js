let puntosUsuario=0;
let puntosComputador=0;

jugar=function(seleccionado)
{
    let elemento1=generarElemento();
    let elemento= generarRuta(elemento1);
    elemento=determinarGanador(elemento1,seleccionado);
    if(elemento=="0")
    {
        mostrarTexto("resultado","EMPATE");
    }
    else if(elemento=="1")
    {
        mostrarTexto("resultado","GANASTE LA PARTIDA");
        mostrarImagen("imagen",generarRuta(elemento1));
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("puntosUsuario",puntosUsuario);
        if(puntosUsuario==5)
        {
            mostrarTexto("ganador","FELICITACIONES, GANASTE EL JUEGO");
        }

    }
    else
    {
        mostrarTexto("resultado","PERDISTE LA PARTIDA");
        mostrarImagen("imagen",generarRuta(elemento1));
        puntosComputador=puntosComputador+1;
        mostrarTexto("puntosComputador",puntosComputador);
        if(puntosComputador==5)
        {
            mostrarTexto("ganador","EL COMPUTADOR TE HA VENCIDO");
        }
    }
}
