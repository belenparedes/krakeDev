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