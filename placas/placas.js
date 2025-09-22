validarPlaca=function()
{
    let placa=document.getElementById("placa").value;
    let erroresEstructura=validarEstructura(placa);
    if (erroresEstructura==null)
    {
       mostrarTexto("lblError1","ESTRUCTURA VALIDA");
        mostrarTexto("lblError2","");
        let provincia=obtenerProvincia(placa);
        if(provincia==null)
        {
            mostrarTexto("lblError1","PROVINCIA INCORRECTA");
        }
        else
        {
            let mensaje2="PROVINCIA: "+provincia;
            mostrarTexto("lblError1",mensaje2);
        }

    }
    else
    {
        let mensaje="ESTRUCTURA INCORRECTA";
        mostrarTexto("lblError1",mensaje);

        
    }

}