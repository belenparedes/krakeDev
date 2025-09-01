jugar=function()
{
    let valorRecuperado
   valorRecuperado=lanzarDados();
   cambiarTexto("lblNumero",valorRecuperado);
    if(valorRecuperado>3)
    {
        cambiarTexto("lblNumero",valorRecuperado +" ES MAYOR A 3 GANASTE");
    
    }
    else
    
        {
            cambiarTexto("lblNumero",valorRecuperado +" ES MENOR A 3 PERDISTE");  
        }

}
//crear un funcion llamada lanzar dados, no recibe parmetros, retorna un nunero sleatorio entre 1 y 6
lanzarDados=function()
{
    let aleatorio
    let entero
    let numeroMultiplicado
    let valoDado
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6;
    entero=parseInt(numeroMultiplicado) //entre 0 y 5
    valoDado=entero+1;// valor entre 1 y 6
    return valoDado;
}