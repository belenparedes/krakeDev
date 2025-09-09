
calcularTasaInteres=function(ingresosAnuales)
{
    let TasaInteres
    if(ingresosAnuales <300000)
    {
        TasaInteres=TasaInteres*16/100;
    }
    else if(ingresosAnuales>=300000 && ingresosAnuales<500000)
    {
        TasaInteres=TasaInteres*15/100;
    }
    else if(ingresosAnuales>=500000 && ingresosAnuales<1000000)
    {
        TasaInteres=TasaInteres*14/100;
    }
    else if(ingresosAnuales>=1000000 && ingresosAnuales<2000000)
    {
        TasaInteres=TasaInteres*13/100;
    }
    else if(ingresosAnuales>=2000000)
    {
        TasaInteres=TasaInteres*12/100;
    }
    return TasaInteres;
}
calcularCapacidadPago=function(edad, ingresos,egresos)
{
    let capacidadPago;
    if(edad > 50)
    {
        capacidadPago = ingresos - egresos;
        capacidadPago= capacidadPago * 30/ 100;
    }
   else if(edad <= 50)
   {
        capacidadPago = ingresos - egresos;
        capacidadPago = capacidadPago * 40 / 100;
    }
    return capacidadPago;
}
calcularDescuento=function(precio,cantidad)
{
    let descuento;
    if(cantidad>3)
    {
        descuento= precio * 0.0;
    }
    else if(cantidad>=3 && cantidad<=5)
    {
        descuento= precio *2/100;
    }
    else if(cantidad>=6 && cantidad<=11)
    {
        descuento= precio * 3/100;
    }
    else if(cantidad>=12)
    {
        descuento= precio * 4/100;
    }
    return descuento;
}

determinarColesterolLDL=function(nivelColesterol)
{
    if (nivelColesterol < 100) 
    {
        resultado = "Óptimo";
    } 
    else if (nivelColesterol >= 100 && nivelColesterol <= 129) 
    {
        resultado = "Casi óptimo";
    }
     else if (nivelColesterol >= 130 && nivelColesterol <= 159) 
    {
        resultado = "Límite alto";
    } 
    else if (nivelColesterol >= 160 && nivelColesterol <= 189) 
    {
        resultado = "Alto";
    }
     else if (nivelColesterol >= 190) 
    {
        resultado = "Muy alto";
    } 
    else 
    {
        resultado = "Valor no válido";
    }
    return resultado;
}
validarClave=function(clave)
{
    let tamanio= clave.length;
    if(tamanio < 8 && tamanio > 16) {
        return true;
    }
    else {
       return false;
    }
}
esMayuscula=function(caracter)
{
    let cadena= caracter.charCodeAt(0);
    if(cadena >= 65 && ccadena <= 90) {
        return true;
    } else {
        return false;
    }
}

esMinuscula=function(caracter)
{
    let cadena= caracter.charCodeAt(0);
    if(cadena >= 97 && ccadena <= 122) {
        return true;
    } else {
        return false;
    }
}
esDigito=function(caracter)
{
    let cadena= caracter.charCodeAt(0);
    if(cadena >= 48 && ccadena <= 57) {
        return true;
    } else {
        return false;
    }
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria)
{
    if(notaFisica>90|| notaMatematica>90 || notaGeometria>90)
    {
        return true;
    }
    else
    {
        return false;
    }
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria)
{
    if((notaFisica>90 || notaMatematica>90) && notaGeometria>80)
    {
        return true;
    } 
    else
    {
        return false;
    }
}
dejarSalir(notaMatematica,notaFisica,notaGeometria)
{
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90)
    {
        elseif(notaFisica > notaMatematica)
        {
            return true;
        }
    }
    else 
    {
        return false;
    }
}