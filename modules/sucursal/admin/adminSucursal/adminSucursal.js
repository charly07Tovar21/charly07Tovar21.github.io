let sucursales = [];

fetch("adminSucursal/dataAdminSucursal.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            sucursales = jsondata;
            console.log(sucursales);
            loadTabla();
        }
        );

export function loadTabla() {
    let cuerpo = "";
    sucursales.forEach(function (sucursal) {
        let registro =
                '<tr onclick="moduloLogin1.selectSucursal(' + sucursales.indexOf(sucursal) + ');">' +
                '<td>' + sucursal.codigo + '</td>' +
                '<td>' + sucursal.nombre_suc + '</td>' +
                '<td>' + sucursal.nombre_tit + '</td>' +
                '<td>' + sucursal.direccion + '</td>' +
                '<td>' + sucursal.telefono + '</td>' +
                '<td>' + sucursal.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblSucursales").innerHTML = cuerpo;

}

document.getElementById("buscarSucursal").addEventListener("keyup", searchSucursal);
document.getElementById("btnBuscar").addEventListener("click", searchSucursal);

export function searchSucursal() {
    const searchSuc = document.getElementById("buscarSucursal").value.toLowerCase();
    const filteredSucursales = sucursales.filter(sucursal =>
        sucursal.nombre_suc.toLowerCase().includes(searchSuc) ||
                sucursal.nombre_tit.toLowerCase().includes(searchSuc) ||
                sucursal.direccion.toLowerCase().includes(searchSuc) ||
                sucursal.telefono.toLowerCase().includes(searchSuc) ||
                sucursal.estatus.toLowerCase().includes(searchSuc)
    );

    loadTablas(filteredSucursales);
}

export function loadTablas(sucursalesData) {
    const tablaBody = document.getElementById("tblSucursales");
    let cuerpo = "";

    sucursalesData.forEach((sucursal, index) => {
        const registro = `
            <tr onclick="moduloLogin1.selectSucursal(${index});">
               <td>${sucursal.codigo}</td> 
                <td>${sucursal.nombre_suc}</td>
                <td>${sucursal.nombre_tit}</td>
                <td>${sucursal.direccion}</td>
                <td>${sucursal.telefono}</td>
                <td>${sucursal.estatus}</td>
            </tr>`;
        cuerpo += registro;
    });

    tablaBody.innerHTML = cuerpo;
}