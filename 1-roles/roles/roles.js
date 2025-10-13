let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1850287424",nombre:"Belen",apellido:"Paredes",sueldo:800.0},
]
let esNuevo=false;

mostrarOpcionEmpleado=function()
{
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
} 
ejecutarNuevo=function() // reto 47_1 hasta el paso 4 funcionando correctamente 
{
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
}
mostrarOpcionRol=function()
{
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen=function()
{
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");   
}
mostrarEmpleado=function()
{
    let compTabla=document.getElementById("tablaEmpleados");
    let contTaabla="<table>"+
    "<tr><th>CEDULA</Th>"+
        "<th>NOMBRE</th>"+
        "<th>APELLIDO</th>"+
        "<th>SUELDO</th>"+
    "</tr>";
    let elemento;
    for(let i=0;i<empleados.length;i++)
    {
        elemento=empleados[i];
        contTaabla+="<tr><td>"+elemento.cedula+"</td>"+
                        "<td>"+elemento.nombre+"</td>"+
                        "<td>"+elemento.apellido+"</td>"+
                        "<td>"+elemento.sueldo+"</td>";
        contTaabla+="</tr>";
    }
    contTaabla+="</table>";
    compTabla.innerHTML=contTaabla;
}
