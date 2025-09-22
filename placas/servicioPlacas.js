obtenerProvincia=function(placa)
{
    let provincia;
    let codigoProvincia=recuperarTexto("placa");
    provincia=codigoProvincia.charCodeAt(0);
        
    if(provincia==65)
    {
        provincia="AZUAY";
    }
    else if(provincia==66)
    {
        provincia="BOLIVAR";
    }
    else if(provincia==85)
    {
        provincia="CANAR";
    }   
    else if(provincia==67)
    {
        provincia="CARCHI";
    }
    else if(provincia==88)
    {
        provincia="COTOPAXI";
    }
    else if(provincia==72)
    {
        provincia="El CHIMBORAZO";
    }
    else if(provincia==79)
    {
        provincia="EL ORO";
    }   
    else if(provincia==69)
    {
        provincia="ESMERALDAS";
    }
    else if(provincia==87)
    {
        provincia="GALAPAGOS";
    }       
    else if(provincia==71)
    {
        provincia="GUAYAS";
    }               
    else if(provincia==73)
    {
        provincia="IMBABURA";
    }   
    else if(provincia==76)
    {
        provincia="LOJA";
    }
    else if(provincia==82)
    {
        provincia="LOS RIOS";
    }   
    else if(provincia==77)
    {
        provincia="MANABI";
    }   
    else if(provincia==86)
    {
        provincia="MORONA SANTIAGO";
    }   
    else if(provincia==78)
    {
        provincia="NAPO";
    }
    else if(provincia==83)
    {
        provincia="PASTAZA";
    }
    else if(provincia==80)
    {
        provincia="PICHINCHA";
    }
    else if(provincia==75)
    {
        provincia="SUCUMBIOS";
    }
    else if(provincia==81)
    {
        provincia="ORELLANA";
    }
    else if(provincia==84)
    {
        provincia="TUNGURAHUA";
    }
    else if(provincia==90)
    {
        provincia="ZAMORA CHINCHIPE";
    }
    else if(provincia==89)
    {
        provincia="SANTA ELENA";
    }
    else
    {
        provincia=null;
    }
    return provincia;
}