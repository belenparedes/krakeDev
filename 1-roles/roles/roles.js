let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1850287424",nombre:"Belen",apellido:"Paredes",sueldo:800.0},
]
let esNuevo=true;
let roles=[];
roles.cedula;
roles.nombre;
roles.sueldo;
roles.valorAPagar;
roles.aporteEmpleado;
roles.aporteEmpleador;


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
    deshabilitarComponente("botonRol");
}
mostrarOpcionResumen=function()
{
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");   
}
mostrarcajaEditado=function()
{
    
    deshabilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    
}
mostrarCajaDesabilitada=function()
{
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
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
buscarEmpleado=function(cedula)// reto 47_1 funcionando hasta el ultimopaso que es crear la funcion buscar Empleado
{
    let elementoEmpeado;
    let empleadoEncontrado=null;
    for(let i=0;i<empleados.length;i++)
    {
        elementoEmpeado=empleados[i];
        if(elementoEmpeado.cedula==cedula)
        {
             empleadoEncontrado=elementoEmpeado;
            break;
        }
        
    }
    return empleadoEncontrado;
    


}
agregarEmpleado=function(empleado)
{
    let resultadoBusqueda;
    let agregardoEmpleado=false;
    resultadoBusqueda=buscarEmpleado(empleado.cedula);
    if(resultadoBusqueda==null)
    {
        empleados.push(empleado);
        agregardoEmpleado=true;
    }
    return agregardoEmpleado;
}
guardar=function()
{
    let modificado;
   let cedula=recuperarTexto("txtCedula"); 
   let nombre=recuperarTexto("txtNombre");
   let apellido=recuperarTexto("txtApellido");
   let sueldo=recuperarFloat("txtSueldo");
   let digito=esDigito(cedula);
   if((cedula.length==10)&&(digito==true))
    {
        let mayusculaNom=esMayuscula(nombre);
       if((nombre.length>=3)&&(mayusculaNom==true) )
        {
            let mayusculaApell=esMayuscula(apellido);
            if((apellido.length>=3)&&(mayusculaApell==true))
            {
                if(sueldo>=400 && sueldo<=5000)
                {
                    
                    if(esNuevo==true)
                    {

                            let resultadoBusqieda;
                            let empleado={};
                            empleado.cedula=cedula;
                            empleado.nombre=nombre;
                            empleado.apellido=apellido;
                            empleado.sueldo=sueldo;
                            let agregad0=agregarEmpleado(empleado);
                            if(agregad0==true)
                            {
                                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                                mostrarEmpleado();
                                mostrarOpcionEmpleado();
                                esNuevo=false;
                            }
                            else
                            {
                                alert("YA EXISTE UN EMPLEADO CON LA CEDULA:"+empleado.cedula);
                                resultadoBusqieda=buscarEmpleado(empleado.cedula);
                                ejecutarBusqueda();
                                
                            }

                    }
                    else
                    {
                        
                        for(let i=0;i<empleados.length;i++)
                        {
                            
                            if(empleados[i].cedula==cedula)
                            {
                                empleados[i]=
                                {
                                    cedula:cedula,
                                    nombre:nombre,
                                    apellido:apellido,
                                    sueldo:sueldo
                                };

                                modificado=true;
                            }
                        }
                    }
                    if(modificado==true)
                    {
                        alert("EMPLEADO MODIFICADO CORRECTAMENTE");
                        mostrarEmpleado();
                        mostrarOpcionEmpleado();
                    }
                }
                else
                {
                    mostrarTexto("lblErrorSueldo","Debe estar entre 400 y 5000");
                }
            }
            else
            {
                mostrarTexto("lblErrorApellido","Debe tener minimo 3 catacteres y todas mayusculas");
            }
        }
        else
        {
            mostrarTexto("lblErrorNombre","Debe tener minimo 3 catacteres y todas mayusculas");
            estructura=false;
         } 
    }
    else
    {
        mostrarTexto("lblErrorCedula","Debe tener exactamente 10 y deben ser digitos")
        estructura=false;
    }
}
ejecutarBusqueda=function()
{
    let busqueda=recuperarTexto("txtBusquedaCedula");
    let encontrado=buscarEmpleado(busqueda);
    if(encontrado==null)
    {
        alert("EMPLEADO NO EXISTE");
    }else
    {
        mostrarTextoEnCaja("txtCedula",encontrado.cedula);
        mostrarTextoEnCaja("txtNombre",encontrado.nombre);
        mostrarTextoEnCaja("txtApellido",encontrado.apellido);
        mostrarTextoEnCaja("txtSueldo",encontrado.sueldo);
        mostrarcajaEditado();
        esNuevo=false;

    }

    
}
limpiar=function()
{
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    esNuevo=false;
    mostrarCajaDesabilitada();


}

buscarPorRoles=function()   
{
    let rol=recuperarTexto("txtBusquedaCedulaRol");
   let buscador=buscarEmpleado(rol);
    if(buscador!=null)
    {
        mostrarTexto("infoCedula",buscador.cedula);
        mostrarTexto("infoNombre",buscador.nombre+" "+buscador.apellido);
        mostrarTexto("infoSueldo",buscador.sueldo);
    }
    else
    {
        alert("EMPLEADO NO EXISTE");
    }
}
calcularAporteEmpleado=function(sueldo)
{
    let calculo=sueldo*9.45;
    calculo=calculo/100;
    habilitarComponente("botonRol");
    return calculo;
}
calcularValorAPagar=function(sueldo,aporteIess,descuento)
{
    let total=sueldo-aporteIess-descuento;
    return total;
}

calcularRol=function()
{
    let sueldo=recuperarFloatDiv("infoSueldo");
    let flotante=esFloat("txtDescuentos");
    if(flotante==true)
    {
        if(flotante>=0&&flotante<=sueldo)
        {
            let sueldoAporte=calcularAporteEmpleado(sueldo);
            mostrarTexto("infoIESS",sueldoAporte);
        }
    }
    else
    {
        alert("INGRESE UN VALOR VALIDO");
    }
}
buscarRol=function(cedula)
{
    let elementoRol;
    let rolEncontrado=null;
    for(let i=0;i<roles.length;i++)
    {
        elementoRol=roles[i];
        if(elementoRol.cedula==cedula)  
        {
                rolEncontrado=elementoRol;
                break;
        }
    }
    return rolEncontrado;
}
AgregarRol=function(rol)
{
    let resultadoBusqueda;
    let agregardoRol=false;
    resultadoBusqueda=buscarRol(rol.cedula);
    if(resultadoBusqueda==null)
    {   
        roles.push(rol);
        agregardoRol=true;
    }   
    return agregardoRol;
}
calcularAporteEmpleador=function(sueldo)
{
    let calculo=sueldo*11.15;
    calculo=calculo/100;
    return calculo;
}
guardarRol=function()
{
    let cedula=recuerarTextDiv("infoCedula");
    let nombre=recuerarTextDiv("infoNombre");
    let sueldo=recuperarFloatDiv("infoSueldo");
    let aporteEmpleado=recuperarFloatDiv("infoIESS");
    let aporteEmpleador=calcularAporteEmpleador(sueldo);
    let rol={};
    rol.cedula=cedula;
    rol.nombre=nombre;
    rol.sueldo=sueldo;              
    rol.aporteEmpleado=aporteEmpleado;
    rol.aporteEmpleador=aporteEmpleador;
    let guardado=AgregarRol(rol);
    if(guardado==true)
    { 
        alert("ROL GUARDADO CORRECTAMENTE");
        mostrarOpcionResumen();
        deshabilitarComponente("botonRol");
    }
    else
    {
        alert("YA EXISTE UN ROL PARA LA CEDULA:"+rol.cedula);
    }
}