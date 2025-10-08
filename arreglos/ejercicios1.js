let notas=[];
agregarElemento=function()
{
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo=function()
{
    let notaR;
    for(let indice=0;indice<notas.length;indice++)
    {
       notaR= notas[indice];
       console.log(notaR);
    }
}


probarAgregar=function()
{
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
agregarNota=function(nota)
{
    notas.push(nota);
    mostrarNotas();
}
calcularPromedio=function()
{
    let sumaNotas=0;
    let promedio;
    for(let indice=0;indice<notas.length;indice++)
    {
        sumaNotas=sumaNotas+notas[indice];
    }
    promedio=sumaNotas/notas.length;
    return promedio;
}
ejecutarPromedio=function()
{
   let promedioFinal=calcularPromedio();
   mostrarTexto("lblPromedios",promedioFinal);
}

generarTabla=function()
{
    let contenidoTabla="";
    let compTabla=document.getElementById("tabla");
    contenidoTabla+="<table><tr><td>UNO</td></tr>"+
                           "<tr><td>DOS</td></tr></table>";
    compTabla.innerHTML=contenidoTabla;
}
mostrarNotas=function()
{
     let compTabla=document.getElementById("tabla");
     let contenidoTabla="<table><tr><th>NOTAS</th></tr>";
     let miNota;
     for(let i=0;i<notas.length;i++)
     {
        miNota=notas[i];
        contenidoTabla+="<tr><td>"
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>";
        
     }
     contenidoTabla+="</table>";
     compTabla.innerHTML=contenidoTabla;
}