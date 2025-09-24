mostrarNumeros=function()
{
    console.log("antes de for")
    for(let i=0;i<4;i++)
    {
        console.log(i);
    }
    console.log("despues de for")
}

mostrarNumeros2=function()
{
    console.log("antes de for")
    for(let j=1;j<=5;j++)
    {
        console.log(j);
    }
    console.log("despues de for")
}
mostrarPares=function()
{
     console.log("antes de for")
    for(let x=2;x<=10; x+=2)
    {
        console.log(x);
    }
     console.log("despues de for")
}
mostrarInverso=function()
{
        console.log("antes de for")
        for(let i=10;i>0;i--)
        {
            console.log(i);
        }
        console.log("despues de for")

}
hakearNasaPelis=function()
{
    //hakeando nada 0% ...100%
    for (let porcentaje=0;porcentaje<=100;porcentaje+=10)
    {
       console.log("hakeando nasa "+porcentaje+"%"); 
    }
    console.log("La nasa ha sido hakeada XD");
}
mostrarImpares=function()
{
    console.log("antes de for")
    for(let impar=1;impar<=21;impar+=2)
    {
       console.log(impar); 
    }
    console.log("despues de for")
}