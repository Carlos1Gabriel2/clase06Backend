/*
EJERCICIO 01:
Define una clase Banco con una propiedad privada Saldo (number) y un método público
depositar que aumente el saldo.

Define otro método público retirar que disminuya el saldo solo si hay suficiente saldo disponible.

Define un método público consultarSaldo que devuelva el saldo actual.

Crear una instancia de la clase Banco y realizar algunas operaciones de déposito, retiro
y cuenta de saldo

EJERCICIO 02:
Crear una clase Producto con las siguientes propiedades privadas:

nombre: cadena
precio: número
stock: número

Añadir un constructor que acepte parámetros para las propiedades, y los asigne a
las propiedades correspondientes.

Añadir los siguientes métodos:

obtenerDetalles(): Método público que imprime los detalles del producto
vender(cantidad: number): Método público que decrementa el stock si la cantidad es menor
o igual al stock actual.
reabastecer(cantidad: number): Método público que incrementa el stock.
actualizarStock(nuevoStock: number): Método público que actualiza el stock


*/
/*EJERCICIO 01*/
var Banco = /** @class */ (function () {
    function Banco() {
        this.saldo = 0;
    }
    Banco.prototype.depositar = function (monto) {
        this.saldo += monto;
    };
    Banco.prototype.retirar = function (monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
        }
        else {
            console.log("Saldo insuficiente");
        }
    };
    Banco.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Banco;
}());
// Crear una instancia de la clase Banco
var miBanco = new Banco();
// Realizar algunas operaciones
miBanco.depositar(1000);
console.log(miBanco.consultarSaldo()); // Salida: 1000
miBanco.retirar(500);
console.log(miBanco.consultarSaldo()); // Salida: 500
miBanco.retirar(1000); // Salida: Saldo insuficiente
console.log(miBanco.consultarSaldo()); // Salida: 500
/*EJERCICIO 02*/
var Producto = /** @class */ (function () {
    function Producto(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    Producto.prototype.obtenerDetalles = function () {
        console.log("Nombre: ".concat(this.nombre, ", Precio: ").concat(this.precio, ", Stock: ").concat(this.stock));
    };
    Producto.prototype.vender = function (cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            console.log("Se vendieron ".concat(cantidad, " unidades de ").concat(this.nombre, ". Stock actual: ").concat(this.stock));
        }
        else {
            console.log("No hay suficiente stock para realizar la venta");
        }
    };
    Producto.prototype.reabastecer = function (cantidad) {
        this.stock += cantidad;
        console.log("Se reabasteci\u00F3 con ".concat(cantidad, " unidades de ").concat(this.nombre, ". Stock actual: ").concat(this.stock));
    };
    Producto.prototype.actualizarStock = function (nuevoStock) {
        this.stock = nuevoStock;
        console.log("Stock actualizado a ".concat(this.stock, " unidades de ").concat(this.nombre));
    };
    return Producto;
}());
// Crear una instancia de la clase Producto
var producto = new Producto("Auriculares", 100, 10);
// Probar los métodos
producto.obtenerDetalles();
producto.vender(3);
producto.reabastecer(5);
producto.actualizarStock(20);
