aleatorio=function()
{
    let aleatorio
    let numeromultiplicado
    let numeroentero
    let valorAleatorio
   valorAleatorio = Math.floor(Math.random() * 100) + 1;//0 y 99
   // numeromultiplicado=aleatorio+1;
    //console.log(numeromultiplicado); //1 y 100
  //  numeroentero=parseInt(numeromultiplicado);
   // console.log("---->"+numeroentero);
   // valorAleatorio=numeroentero+1;
    console.log("-----------> "+valorAleatorio);
    return valorAleatorio; 
}
generarAleatorio=function()
{
    let aleatorios=[];
    let valorUsuario;
    valorUsuario=recuperarInt("txtNumero");
    if(valorUsuario>=5 && valorUsuario<=20)
    {
        for(let i=0;i<valorUsuario;i++)
        {
            aleatorios.push(i);
            console.log(i);
        }
    }
}