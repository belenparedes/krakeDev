calcularPromedioNotas=function()
{
    let nota1
    let nota2
    let nota3
    nota1=recuperarFloat("txtNota1");
    nota2=recuperarFloat("txtNota2");
    nota3=recuperarFloat("txtNota3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    let resultadoFormateado=promedio.toFixed(2);
     
    if (resultadoFormateado<5 && resultadoFormateado>0)
    {
         mostrarTexto("lblPromedio",resultadoFormateado)+" REPROBADO"; 
         mostrarImagen("imge","./imagenes/reprobado.gif");
    }
    else if(resultadoFormateado>=5 && resultadoFormateado<=8)
    {
         mostrarTexto("lblPromedio",resultadoFormateado+" BUEN TRABAJO"); 
         mostrarImagen("imge","./imagenes/buentrabajo.gif");
    }
    else if(resultadoFormateado>8 && resultadoFormateado<=10)
    {
         mostrarTexto("lblPromedio",resultadoFormateado+" EXCELENTE"); 
          mostrarImagen("imge","./imagenes/exelente.gif");
    }
     else 
     {
           mostrarTexto("lblPromedio","DATO INCORRECTO");
           mostrarImagen("imge","./imagenes/error.gif");
     }
}