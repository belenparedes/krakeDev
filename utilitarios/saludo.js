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
    mostrarTextoEnCaja("txtNombre","");
}
