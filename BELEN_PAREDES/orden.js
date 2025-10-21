let personas=
[
    {nombre:"Marcos", edad:18},
    {nombre:"Roberto", edad:15},
    {nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},
    {nombre:"Benja", edad:5},
];
agregarPersona=function()
{
    let nombre=recuperarTexto("txtNombre");
    let edad=recuperarInt("txtEdad");
    if(nombre.length>=3)
    {
            if(edad>=0 && edad<=100)
            {
                let nuevaPersona=[];
                nuevaPersona.nombre=nombre;
                nuevaPersona.edad=edad;
                personas.push(nuevaPersona);
                alert("Persona agregada correctamente");
                mostrarTabla();
            }
            else
            {
                mostrarTextoEnCaja("lblError1","La edad debe estar entre 0 y 100  y ser un número entero");
            }
    }
    else
    {
        mostrarTextoEnCaja("lblError","El nombre debe tener al menos 3 caracteres");
    }
}
mostrarTabla=function()
{
    let contenedorTabla=document.getElementById("mostrarTabla");
    let tabla="<table>"+
    "<tr><th>EDAD</th>"+
        "<th>NOMBRE</th></tr>";
    for(let i=0;i<personas.length;i++)
    {
        tabla+="<tr><td>"+personas[i].edad+"</td>"+
                    "<td>"+personas[i].nombre+"</td>"+
               "</tr>";
    }
    tabla+="</table>";
    contenedorTabla.innerHTML=tabla;
}
encontarMayor=function()
{
    let personaMayor=personas[0];
     
    for(let i=1;i<personas.length;i++)
    {
        let elementoPersona;
        elementoPersona=personas[i];
        if(personaMayor.edad<elementoPersona.edad)
        {
           
            personaMayor=elementoPersona;
        }
    }
    return personaMayor;
}
determinarMayor=function()
{
    let mayor=encontarMayor();
    let contenedorTabla=document.getElementById("mostrarTabla");
    let comTabla="<table>"+
                        "<tr><th>EDAD</th><th>NOMBRE</th></tr>";
        comTabla+="<tr><td>"+mayor.edad+"</td>"+
                    "<td>"+mayor.nombre+"</td>"+
               "</tr>";
    comTabla+="</table>";
    contenedorTabla.innerHTML=comTabla;
}

encontarMenor=function()
{
    let personaMenor=personas[0];
    
    for(let i=1;i<personas.length;i++)
    {
        let elementoPersonaM;
        elementoPersonaM=personas[i];
        if(personaMenor.edad>elementoPersonaM.edad)
        {
           
            personaMenor=elementoPersonaM;
        }
    }
    return personaMenor;
}
determinarMenor=function()
{
    let mayor=encontarMenor();
    let contenedorTabla=document.getElementById("mostrarTabla");
    let comTabla="<table>"+
                        "<tr><th>EDAD</th><th>NOMBRE</th></tr>";
        comTabla+="<tr><td>"+mayor.edad+"</td>"+
                    "<td>"+mayor.nombre+"</td>"+
               "</tr>";
    comTabla+="</table>";
    contenedorTabla.innerHTML=comTabla;
}