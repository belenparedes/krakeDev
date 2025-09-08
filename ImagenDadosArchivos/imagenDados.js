let puntos=0;
let lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
   mostrarCara(resultado);
   modificarPuntos(resultado);
   modificarLanzamientos();
    

    //si el jugador obtiene mas de 20 puntos mostrar un mensaje 
    //mostrar en pantala el mesaje ganaste!!
    //invocar a impiar 
}
modificarPuntos=function(numero)
{
    puntos=puntos+numero;
    cambiarTeSxto("lblPuntos",puntos);
   if(puntos>=20)
    {
         limpiar();
         let mensaje="Ganaste!!";
        cambiarTexto("lblMensaje",mensaje);
        
    }

}

//no recibe parametro y resta uno a los lanzamientos guarda resultados a 
//la misma variable y muestra en pantalla 
modificarLanzamientos=function()
{
    
   lanzamientos=lanzamientos-1;
   cambiarTexto("lblLanzamientos",lanzamientos);
    if (lanzamientos==0)
    {
        limpiar();
            let mensaje="Se acabaron los lanzamientos, Game Over";
         cambiarTexto("lblMensaje",mensaje);
        



    }
    
   //si lanzamientos llega a 0 mostrar en pantalla un mensaje de que se acabaron los lanzamientos game over

}
limpiar=function()
{   
    puntos=0;
    lanzamientos=5;     
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblLanzamientos",lanzamientos);
    cambiarTexto("lblMensaje"," ");
    cambiarImagen("imgDado",""); //quita la imagen del dado
    //colocar puntaje en cero y lanzamientos en 5
    //quitar la imagen del dado
}

//mostrar cara, recibe el numero que quiere mostrar muestra
//la imagen correspondiente
mostrarCara=function(numero)
{
    if(numero==1) // doble igua se compara con un igual se asigna
    {
        cambiarImagen("imgDado","dados1.png");
    }
    else if(numero==2)
    {
        cambiarImagen("imgDado","dados2.png");
    }
    else if(numero==3)
    {
        cambiarImagen("imgDado","dados3.png");
    }
    else if(numero==4)
    {
        cambiarImagen("imgDado","dados4.png");
    }
    else if(numero==5)
    {
        cambiarImagen("imgDado","dados5.png");
    }
    else if(numero==6)
    {
        cambiarImagen("imgDado","dados6.png");
    }
    
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}