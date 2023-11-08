let indexEmpleadoSeleccionado;
let empleados = [];

fetch("empleado/dataEmpleados.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            empleados = jsondata;
            console.log(empleados);
            loadTabla();
        }
        );

export function addEmpleado() {
    let     nombre,
            apellidos,
            fecha_nacimiento,
            curp,
            rfc,
            genero,
            generoSelected,
            direccion,
            telefono,
            correo_electronico,
            sucursal,
            sucursalSelected,
            fecha,
            puesto,
            puestoSelected,
            codigo;


    nombre = document.getElementById("txtNombre").value;
    apellidos = document.getElementById("txtApellidos").value;
    fecha_nacimiento = document.getElementById("dateBirth").value;
    curp = document.getElementById("txtCURP").value;

    genero = document.getElementById("txtGenero").value;
    generoSelected = "";

    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            generoSelected = genero[i].value;
            break;
        }
    }

    direccion = document.getElementById("txtDireccion").value;
    telefono = document.getElementById("txtTelefono").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRFC").value;

    sucursal = document.getElementById("txtSucursal").value;
    sucursalSelected = "";

    for (let i = 0; i < sucursal.length; i++) {
        if (sucursal[i].checked) {
            sucursalSelected = sucursal[i].value;
            break;
        }
    }

    fecha = document.getElementById("dateIngreso").value;

    puesto = document.getElementById("txtPuesto").value;
    puestoSelected = "";

    for (let i = 0; i < puesto.length; i++) {
        if (puesto[i].checked) {
            puestoSelected = puesto[i].value;
            break;
        }
    }

    codigo = document.getElementById("txtCodigo").value;
    

    ;

    let empleado = {};
    empleado.nombre = nombre;
    empleado.apellidos = apellidos;
    empleado.fecha_nacimiento = fecha_nacimiento;
    empleado.curp = curp;
    empleado.genero = genero;
    empleado.direccion = direccion;
    empleado.telefono = telefono;
    empleado.correo_electronico = correo_electronico;
    empleado.rfc = rfc;
    empleado.sucursal = sucursal;
    empleado.fecha = fecha;
    empleado.puesto = puesto;
    empleado.estatus = "Activo";
    empleado.codigo = empleados.length + 1;
    empleados.push(empleado);
    clean();
    loadTabla();
}

export function loadTabla() {
    let cuerpo = "";
    empleados.forEach(function (empleado) {
        let registro =
                '<tr onclick="moduloLogin1.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.codigo + '</td>' +
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apellidos + '</td>' +
                '<td>' + empleado.sucursal + '</td>' +
                '<td>' + empleado.puesto + '</td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblEmpleados").innerHTML = cuerpo;

}

export function selectEmpleado(index) {
    document.getElementById("txtNombre").value = empleados[index].nombre;
    document.getElementById("txtApellidos").value = empleados[index].apellidos;
    document.getElementById("dateBirth").value = empleados [index].fecha_nacimiento;
    document.getElementById("txtCURP").value = empleados [index].curp;
    document.getElementById("txtRFC").value = empleados [index].rfc;
    document.getElementById("txtGenero").value = empleados [index].genero;
    document.getElementById("txtDireccion").value = empleados [index].direccion;
    document.getElementById("txtTelefono").value = empleados [index].telefono;
    document.getElementById("txtCorreo").value = empleados [index].correo_electronico;
    document.getElementById("txtSucursal").value = empleados [index].sucursal;
    document.getElementById("dateIngreso").value = empleados [index].fecha;
    document.getElementById("txtPuesto").value = empleados [index].puesto;
    document.getElementById("txtCodigo").value = empleados [index].codigo;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexEmpleadoSeleccionado = index;
}

export function clean() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellidos").value = "";
    document.getElementById("dateBirth").value = "";
    document.getElementById("txtCURP").value = "";
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtDireccion").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtSucursal").value = "";
    document.getElementById("dateIngreso").value = "";
    document.getElementById("txtPuesto").value = "";
    document.getElementById("txtCodigo").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexEmpleadoSeleccionado = 0;
}

export function updateEmpleado() {
    let     nombre,
            apellidos,
            fecha_nacimiento,
            curp,
            rfc,
            genero,
            generoSelected,
            direccion,
            telefono,
            correo_electronico,
            sucursal,
            sucursalSelected,
            fecha,
            puesto,
            puestoSelected,
            codigo;


    nombre = document.getElementById("txtNombre").value;
    apellidos = document.getElementById("txtApellidos").value;
    fecha_nacimiento = document.getElementById("dateBirth").value;
    curp = document.getElementById("txtCURP").value;

    genero = document.getElementById("txtGenero").value;
    generoSelected = "";

    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            generoSelected = genero[i].value;
            break;
        }
    }

    direccion = document.getElementById("txtDireccion").value;
    telefono = document.getElementById("txtTelefono").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRFC").value;

    sucursal = document.getElementById("txtSucursal").value;
    sucursalSelected = "";

    for (let i = 0; i < sucursal.length; i++) {
        if (sucursal[i].checked) {
            sucursalSelected = sucursal[i].value;
            break;
        }
    }

    fecha = document.getElementById("dateIngreso").value;

    puesto = document.getElementById("txtPuesto").value;
    puestoSelected = "";

    for (let i = 0; i < puesto.length; i++) {
        if (puesto[i].checked) {
            puestoSelected = puesto[i].value;
            break;
        }
    }

    codigo = document.getElementById("txtCodigo").value;

    ;


    let empleado = {};
    empleado.nombre = nombre;
    empleado.apellidos = apellidos;
    empleado.fecha_nacimiento = fecha_nacimiento;
    empleado.curp = curp;
    empleado.genero = genero;
    empleado.direccion = direccion;
    empleado.telefono = telefono;
    empleado.correo_electronico = correo_electronico;
    empleado.rfc = rfc;
    empleado.sucursal = sucursal;
    empleado.fecha = fecha;
    empleado.puesto = puesto;
    empleado.estatus = "Activo";
    empleado.codigo = codigo;
    empleados[indexEmpleadoSeleccionado] = empleado;
    clean();
    loadTabla();
}

export function deleteEmpleado() {
    empleados[indexEmpleadoSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}


document.getElementById("buscarEmpleado").addEventListener("keyup", searchEmpleado);
document.getElementById("btnBuscar").addEventListener("click", searchEmpleado);

export function searchEmpleado() {
    const searchEmp = document.getElementById("buscarEmpleado").value.toLowerCase();
    const filteredEmployees = empleados.filter(empleado =>
                empleado.nombre.toLowerCase().includes(searchEmp) ||
                empleado.apellidos.toLowerCase().includes(searchEmp) ||
                empleado.sucursal.toLowerCase().includes(searchEmp) ||
                empleado.puesto.toLowerCase().includes(searchEmp) ||
                empleado.estatus.toLowerCase().includes(searchEmp)
    );

    loadTablas(filteredEmployees);
}

export function loadTablas(empleadosData) {
    const tablaBody = document.getElementById("tblEmpleados");
    let cuerpo = "";

    empleadosData.forEach((empleado, index) => {
        const registro = `
            <tr onclick="moduloLogin1.selectEmpleado(${index});">
                <td>${empleado.codigo}</td>
                <td>${empleado.nombre}</td>
                <td>${empleado.apellidos}</td>
                <td>${empleado.sucursal}</td>
                <td>${empleado.puesto}</td>
                <td>${empleado.estatus}</td>
            </tr>`;
        cuerpo += registro;
    });

    tablaBody.innerHTML = cuerpo;
}