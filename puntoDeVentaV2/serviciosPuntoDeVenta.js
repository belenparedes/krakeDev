calcularValorDescuento=function(monto, porcentajeDescuento)
{
    let valorDescuento=monto *porcentajeDescuento /100;
    return valorDescuento;
}
calcularIva=function(monto)
{
    let valorIVA=monto*12/100; 
    return valorIVA;
}
calcularSubtotal=function(precio,cantidad)
{
   let totalPagar=precio*cantidad;
    return totalPagar;
}
calcularTotal=function(subtotal,descuento,iva)
{
    let valorTotal=subtotal-descuento+iva;
    return valorTotal;
}
calcularDescuentoPorVolumen=function(cantidad, subtotal)
{
    let descuento=0;
    if(cantidad<3)
    {
        descuento=0;
    }
    else if(cantidad>=3&&cantidad<=5)
    {
        descuento=subtotal*3/100;
    }
    else if(cantidad>=6 && cantidad<=11)
    {
        descuento=subtotal*4/100;
    }
    else if(cantidad>=12)
    {
        descuento=subtotal*5/100;
    }
    return descuento;
}
esProductoValido=function(producto,idComponenteError)
{
    let hayErrores=false;       
    if(producto.length==0)
    {
        mostrarTexto(idComponenteError,"* CAMPO OBLIGATORIO");
        hayErrores=true;
    } 
    if(producto.length<10)
    {
        mostrarTexto(idComponenteError,"el nombre del producto debe tener mas de  10 caracteres");
        hayErrores=true;
     }  
    if(hayErrores==false)
    {
        mostrarTexto(idComponenteError,"");
    }
    return hayErrores;

}

esCantidadValida=function(cantidad,idComponenteError)
{
    let hayErrores=false;       
    if(isNaN(cantidad))
    {
        mostrarTexto(idComponenteError,"debe ingresar un numero");
        hayErrores=true;
    }   
    if(cantidad<0 ||cantidad>100)
    {            
        mostrarTexto(idComponenteError,"el numero debe estar entre 0 y 100");
        hayErrores=true;
    }
    if(hayErrores==false)
    {
        mostrarTexto(idComponenteError,"");
    }
    return hayErrores;  
}

esPrecioValido=function(precio,idComponenteError)       
{
    let hayErrores=false;
    if(isNaN(precio))
    {   
        mostrarTexto(idComponenteError,"debe ingresar un numero");
        hayErrores=true;
    }
    if(precio<0 || precio>50)
    {            
        mostrarTexto(idComponenteError,"el numero debe estar entre 0 y 50");
        hayErrores=true;
    }
    if(hayErrores==false)
    {
        mostrarTexto(idComponenteError,"");
    }   
    return hayErrores;

}   
