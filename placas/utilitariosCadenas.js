esMayuscula=function(caracter)
{
    let mayuscula=false;
    let codigo=caracter.charCodeAt(0)
    if (codigo>=65 && codigo<=90)
    {
        mayuscula=true;
    }
    return mayuscula;
}
esDigito=function(caracter)
{
    let digito=false;
    let codigo=caracter.charCodeAt(0)
    if (codigo>=48 && codigo<=57)
    {
        digito=true;
    }
    return digito;
}
esGuion=function(caracter)
{
    let guion=false;
    let codigo=caracter.charCodeAt(0)
    if (codigo==45)
    {
        guion=true;
    }
    return guion;

}
validarEstructura=function(placa)
{
    let estructuraCorrecta
    let longitud=placa.length;
    if (longitud>=7 && longitud<=8)
    {
       mostrarTexto ("lblError","");
        let caracter1=placa.charAt(0);
        let caracter2=placa.charAt(1);
        let caracter3=placa.charAt(2);
        let caracter4=placa.charAt(3);
        let caracter5=placa.charAt(4);
        let caracter6=placa.charAt(5);
        let caracter7=placa.charAt(6);
        let caracter8=placa.charAt(7);

        if (esMayuscula(caracter1) && esMayuscula(caracter2) && esMayuscula(caracter3) )
        {
           if ( esGuion(caracter4) ==true)
           {
            if ( esDigito(caracter5)==true && esDigito(caracter6)==true && esDigito(caracter7)==true)
            {
                 estructuraCorrecta=null;
                  if (esDigito(caracter8)==true || esDigito(caracter8)==" ")
                    {
                         estructuraCorrecta=null;
                    }
                    else
                    {
                        let menssaje4="el octavo caracter debe ser digito ";
                        mostrarTexto("lblError2",menssaje4);
                        estructuraCorrecta=false;
                    }
            }
            else 
            {
                let menssaje3="el quinto, sexto y septimo caracter deben ser digitos ";
                mostrarTexto("lblError2",menssaje3);
                estructuraCorrecta=false;
            }

           }
           else
        {
            let menssaje2="el cuarto caracter debe ser un guion ";
            mostrarTexto("lblError2",menssaje2);
            estructuraCorrecta=false;
        }

        }
        else
        {
            let menssaje1="  los tres primeros caracteres deben ser letras mayusculas";
            mostrarTexto("lblError2",menssaje1);
            estructuraCorrecta=false;
        }
   
      

    }
    else
    {
        mostrarTexto ("lblError","La placa debe tener 7 u 8 caracteres");
         estructuraCorrecta=false;


    }
    return estructuraCorrecta;
}
