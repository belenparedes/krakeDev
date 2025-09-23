validarPlaca=function()
{
    let placas=recuperarTexto("placa")
    let erroresEstructura=validarEstructura(placas);
    if (erroresEstructura==null)
    {
       mostrarTexto("lblError1","ESTRUCTURA VALIDA");
        mostrarTexto("lblError2","");
        let provincia=obtenerProvincia(placas);
        if(provincia==null)
        {
            mostrarTexto("lblError5","PROVINCIA INCORRECTA");
        }
        else
        {
            let mensaje2="PROVINCIA: "+provincia;
            mostrarTexto("lblError4",mensaje2);
        }
        let tipo=obtenerTipoDeVehiculo(placas);
        if(tipo==null)
        {
            mostrarTexto("lblError5","TIPO DE VEHICULO INCORRECTO");
        }
        else
        {
            let mensaje3="TIPO DE VEHICULO: "+tipo;
            mostrarTexto("lblError5",mensaje3);
        }
        let PicoPlaca=obtenerDiaPicoYPlaca(placas);
        mostrarTexto("lblPicoPlaca",PicoPlaca);


    }
    else
    {
        let mensaje="ESTRUCTURA INCORRECTA";
        mostrarTexto("lblError1",mensaje);

        
    }

}