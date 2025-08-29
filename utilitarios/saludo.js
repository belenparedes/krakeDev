saludar=function()
{
        //recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    // recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido"); 
    // recuperar el valor de la caja de texto txtEdad
    let edad=recuperarInt("txtEdad");   
    //recuperar el valor de la caja de texto txtEstatura
    let estatura=recuperarFoat("txtEstatura");
    //mostrar el mensaje en el componente lblSaludo
    let mensaje="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensaje);
    //mostrar la imagen en el componente imgFoto
    mostrarImagen("imgSaludo","./imagenes/saludo1.gif")
}



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