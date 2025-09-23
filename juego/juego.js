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

    }
    else
    {
        mostrarTexto("resultado","PERDISTE LA PARTIDA");
        mostrarImagen("imagen",generarRuta(elemento1));
    }
}