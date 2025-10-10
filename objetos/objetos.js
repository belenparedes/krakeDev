probarAtributos=function()
{
    let persona=
    {
        nombre : "Belen", 
        apellido: "Paredes",
        edad: 24,
        vivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.vivo==false)
    {
        console.log("no esta vivo");
    }
    else
    {
         console.log("si esta vivo");
    }

}
crearProducto=function()
{
    let producto1=
    {
        nombre:"galletas",
        precio: 0.50,
        stock: 5,
    }
    let producto2=
    {
        nombre:"arroz",
        precio: 0.60,
        stock: 5,
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock>producto2.stock)
    {
        console.log("prducto 1 tiene mayor stock");
    }
    else if(producto1.stock<producto2.stock)
    {
        console.log("producto 1 tiene mayor stock");
    }
    else
    {
        console.log("ambos productos tienen el mismo stock");
    }
}
modificarAtributos=function()
{
    let cuenta=
    {
        numero: "123547",
        saldo:0.0,
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
crearCliente=function()
{
    let cliente=
    {
        cedula:"1850258742",
        nombre:"Juan"
    }
    let cliente1=
    {   }
    cliente1.nombre="Maria",
    cliente1.apellido="Morales",
    cliente1.cedula="12345589890"

}
probarIncrementoSaldo=function()
{
    let cta={
        numero :"1234567890", saldo: 34.2
    }
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}
probarDeterminarNayor=function()
{
    let per1={
        nombre:"Belen", edad: 12
    }
    let per2={
        nombre:"Maria", edad: 10
    }
    
    let mayor=determinarMayor(per1,per2);
    if(mayor!=null)
    {
        console.log("el mayor es"+mayor.nombre);
    }
}
incrementarSaldo=function(cuenta,monto)
{
 cuenta.saldo+=monto;   
}
determinarMayor=function(persona1,persona2)
{
    if(persona1.edad>persona2.edad)
    {
        return persona1;
    }
    else if(persona2.edad>persona1.edad)
    {
        return persona2;
    }
    else
    {
        return null;
    }
}