let frutas=[];

probarBusqueda=function()
{
    
    //console.log(frutas.length);
    frutas.push("A")
    frutas.push("B")
    frutas.push("C")
    frutas.push("D")
    frutas.push("E")
    console.log(frutas[0]);

    

}
buscar=function(fruta)
{
    let elemento;
    let frutaEncontrada= null;
    for(let i=0;i<frutas.length;i++)
    {
        elemento=frutas[i];
        if(fruta == elemento)
        {
            frutaEncontrada=i;
            break;
        }
    }
    return frutaEncontrada;
}
