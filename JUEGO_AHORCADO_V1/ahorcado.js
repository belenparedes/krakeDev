//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta="";
let intentos=0;
let coincidencias=0;
let errores=0;
guardarPalabra=function()
{
    let palabra=recuperarTexto("txtSecreta"); 
    if (palabra.length==5)
    {
        let todasMayusculas=0;
        for(let i=0;i<palabra.length;i++)
        {
        let caracters=palabra.charAt(i);

         if(esMayuscula(caracters))
        {
            todasMayusculas++;
        }
        }
        if (todasMayusculas!=5)
        {
            alert("Debe ingresar una palabras de 5 letras mayusculas");
        }
            
        
        else 
        {
            
            palabraSecreta=palabra;
            console.log(palabraSecreta);
        }
        
    }  

    else 
    {
        alert("Debe ingresar una palabras de 5 letras mayusculas");
    }

}
esMayuscula=function(caracter)
{
    let mayuscula=false;
    let codigo=caracter.charCodeAt(0)
    if (codigo>=65 && codigo<=90)
    {
        mayuscula=true;
    }
    else 
    {
        mayuscula=false;
    }
    return mayuscula;
}
mostrarLetra=function(letra, posicion)
{


    if(posicion==0)
    {

    mostrarTexto("div0",letra);
    }
    if(posicion==1)
    {
        
    mostrarTexto("div1",letra);
    }
    if(posicion==2)
    {
        
    mostrarTexto("div2",letra);
    }
    if(posicion==3)
    {
        
    mostrarTexto("div3",letra);
    }
    if(posicion==4)
    {
        
    mostrarTexto("div4",letra);
    }
}
validar=function(letra)
{
    let letraEncontrada=0;
    let caracter;
    for(let i=0;i<palabraSecreta.length;i++)
    {
        caracter=palabraSecreta.charAt(i);
        if(caracter==letra)
        {
            letraEncontrada++;
            coincidencias++;
            mostrarLetra(letra,i);
            
        }
    }
    if(caracter!=letra)
    {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
    }
}
ingresarLetra=function()
    {
        intentos++;
        let letra;
        letra=recuperarTexto("txtLetra");
        if(esMayuscula(letra))
        {
            validar(letra);
            if(coincidencias==5)
            {
                alert("HA GANADO");

            }
            if(intentos==10)
            {
                alert("HA PERDIDO");
            }
        }
        else
        {
            alert("SOLO DE ACEPTAN MAYUSCULAS");
        }
    }
