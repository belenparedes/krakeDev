let aleatorios=[];
let valorUsuario;
Aleatorio = function()
{

    let valorAleatorio
   valorAleatorio = Math.floor(Math.random() * 100) + 1;//1 y 100
    console.log("-----------> "+valorAleatorio);
    return valorAleatorio; 
}
generarAleatorio=function()
{
    
    let valAleatorio;
    valorUsuario=recuperarInt("txtNumero");
    if(valorUsuario>=5 && valorUsuario<=20)
    {
        for(let i=0;i<valorUsuario;i++)
        {
            valAleatorio= Aleatorio(); 
            aleatorios.push(valAleatorio);           
            console.log(valAleatorio);
            
        }
        mostrarResultado(aleatorios);
    }
}
mostrarResultado=function(arregloNumeros)
{
    let compTabla=document.getElementById("tabla");
    let contenidoTabla="<table border=2><tr><th>ALEATORIO</th></tr>";
     for(let i=0;i<arregloNumeros.length;i++)
     {
        contenidoTabla+="<tr><td>"
        contenidoTabla+=arregloNumeros[i];
        contenidoTabla+="</tr></td>";
     }

     contenidoTabla += "</table>";
    compTabla.innerHTML = contenidoTabla;
}