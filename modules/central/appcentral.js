//app.js
let moduloLoginCentral;

function centralSucursal() {
    fetch("sucursal/sucursal.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenidoCentral").innerHTML = html;
                import("./sucursal/controllerSucursal.js").then(
                        function (controller) {
                            moduloLogin1 = controller;
                        });
            });
}

function centralEmpleado() {
    fetch("./empleado/empleado.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenidoCentral").innerHTML = html;
                import("./empleado/controllerEmpleado.js").then(
                        function (controller) {
                            moduloLogin1 = controller;
                        });
            });
}

function centralProducto() {
    fetch("producto/producto.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenidoCentral").innerHTML = html;
                import("./producto/controllerProducto.js").then(
                        function (controller) {
                            moduloLogin1 = controller;
                        });
            });
}

function centralPedido() {
    fetch("pedido/pedido.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenidoCentral").innerHTML = html;
                import("./pedido/controllerPedido.js").then(
                        function (controller) {
                            moduloLogin1 = controller;
                        });
            });
}

function centralInventario() {
    fetch("inventario/inventario.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenidoCentral").innerHTML = html;
                import("./inventario/controllerInventario.js").then(
                        function (controller) {
                            moduloLogin1 = controller;
                        });
            });
}