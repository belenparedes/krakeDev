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
    mostrarTexto("lblPromedio",resultadoFormateado);   
}