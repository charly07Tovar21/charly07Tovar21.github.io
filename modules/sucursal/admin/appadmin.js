//app.js
let moduloLoginCentral;

function adminSucursal() {
    fetch("adminSucursal/sucursal.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenidoAdmin").innerHTML = html;
                import("./adminSucursal/adminSucursal.js").then(
                        function (controller) {
                            moduloLogin1 = controller;
                        });
            });
}

function adminEmpleado() {
    fetch("./adminEmpleado/empleado.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenidoAdmin").innerHTML = html;
                import("./adminEmpleado/adminEmpleado.js").then(
                        function (controller) {
                            moduloLogin1 = controller;
                        });
            });
}

function adminProducto() {
     fetch("adminProducto/producto.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenidoAdmin").innerHTML = html;
                import("./adminProducto/adminProducto.js").then(
                        function (controller) {
                            moduloLogin1 = controller;
                        });
            });
}

function adminCliente() {
    fetch("adminCliente/cliente.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenidoAdmin").innerHTML = html;
                import("./adminCliente/adminCliente.js").then(
                        function (controller) {
                            moduloLogin1 = controller;
                        });
            });
}

function adminVenta() {
    fetch("adminVenta/venta.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenidoAdmin").innerHTML = html;
                import("./adminVenta/adminVenta.js").then(
                        function (controller) {
                            moduloLogin1 = controller;
                        });
            });
}