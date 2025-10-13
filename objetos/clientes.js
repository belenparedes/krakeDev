let clientes=[
    {cedula:"123456789",nombre:"Belen",edad:20},
    {cedula:"444444444",nombre:"Juan",edad:22},
    {cedula:"222222222",nombre:"Pedro",edad:30},
];

guardarCambios=function()
{

    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let datosCliente=
    {   }
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();

}


modificarCliente=function(cliente)
{
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if(clienteEncontrado!=null)
    {
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}

ejecutarBusqueda=function()
{
    let valorCedula=recuperarTexto("txtBuscar");
    let respuesta=buscarCliente(valorCedula);
    if(respuesta==null)
    {
        alert("cliente no encontrado");
    }else
    {
        mostrarTextoEnCaja("txtCedula",respuesta.cedula);
        mostrarTextoEnCaja("txtNombre",respuesta.nombre);
        mostrarTextoEnCaja("txtEdad",respuesta.edad);
    }
}

crearCliente=function()
{
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let nuevoCliente=
    {   }
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;
    agregarCliente(nuevoCliente);

}
agregarCliente=function(cliente)
{
    let resultado;
    resultado=buscarCliente(cliente.cedula);
if(resultado==null)
{
    clientes.push(cliente);
    alert("Cliente Agregado");
    mostrarClientes();
}
else
{
    alert("ya existe el cliente con lacedula:"+cliente.cedula);
}
    
}

buscarCliente=function(cedula)
{
    let elementoCliente;
    let elementoEncontrado=null;
    for(let i=0;i<clientes.length;i++)
    {
        elementoCliente=clientes[i];
        if(elementoCliente.cedula==cedula)
        {
            elementoEncontrado=elementoCliente;
            break;
        }
        
    }
    return elementoEncontrado
}


mostrarClientes=function()
{
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table> <tr>"+
    "<th> CEDULA</th>"+
    "<th> NOMBRE</th>"+
    "<th> EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0;i<clientes.length;i++)
    {
        elementoCliente=clientes[i];
        contenidoTabla+="<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}
