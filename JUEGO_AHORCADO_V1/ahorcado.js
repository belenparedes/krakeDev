//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta="";
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
