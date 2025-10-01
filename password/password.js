
ejecutarValidacion=function()
{
    let contrasena;
    contrasena=recuperarTexto("txtCadena");
    let validacion=validarPassword(contrasena);
    if(validacion==0)
    {
        mostrarTexto("cadena","Password Correcto");
    }
    else 
    {
        mostrarTexto("cadena",validacion)
    }
}
validarPassword=function(password)
{
    let errorLongitud="";
    let errorMayuscula="";
    let errorDigito="";
    let errorEspecial="";
    let tamano;
    let longitudCaracteres;
    let contadorM=0;
    let contadorD=0;
    let contadorE=0;
    let longitudes=0
    tamano=password.length;
    if(tamano<8 || tamano>16)
    {
        return "la contrasena debe tener entre 8 a 16 de longitud";
    }
    else
    {
        for(let longitud=0;longitud<tamano;longitud++)
    {
        longitudCaracteres=password.charAt(longitud);
         if(esMayuscula(longitudCaracteres))
        {
            contadorM++;
        }
        if(esDigito(longitudCaracteres))
        {
            contadorD++;
        }
        if(esCaracter(longitudCaracteres))
        {
            contadorE++;
        }
     }
     if(contadorM==0)
     {
        return "debe contar al menos con una letra mayuscula";
       
     }
     else
     {
        if(contadorD==0)
        {
            return "debe contar al menos con una digito";
              
        }
        else
        {
            if(contadorE==0)
            {
                return"debe contar al menos con un caracter especial";
                
            }
            else
            {
                return 0;
            }

        }
        
     }
     


        
    }
}











































