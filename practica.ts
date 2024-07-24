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

class Banco {
    private saldo: number;
  
    constructor() {
        this.saldo = 0;
    }
  
    public depositar(monto: number): void {
        this.saldo += monto;
    }
  
    public retirar(monto: number): void {
        if (this.saldo >= monto) {
            this.saldo -= monto;
        } else {
            console.log("Saldo insuficiente");
        }
    }
  
    public consultarSaldo(): number {
        return this.saldo;
    }
  }
  
  // Crear una instancia de la clase Banco
  const miBanco = new Banco();
  
  // Realizar algunas operaciones
  miBanco.depositar(1000);
  console.log(miBanco.consultarSaldo()); // Salida: 1000
  
  miBanco.retirar(500);
  console.log(miBanco.consultarSaldo()); // Salida: 500
  
  miBanco.retirar(1000); // Salida: Saldo insuficiente
  console.log(miBanco.consultarSaldo()); // Salida: 500


/*EJERCICIO 02*/

class Producto {
    private nombre: string;
    private precio: number;
    private stock: number;
  
    constructor(nombre: string, precio: number, stock: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
  
    public obtenerDetalles(): void {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.stock}`);
    }
  
    public vender(cantidad: number): void {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            console.log(`Se vendieron ${cantidad} unidades de ${this.nombre}. Stock actual: ${this.stock}`);
        } else {
            console.log("No hay suficiente stock para realizar la venta");
        }
    }
  
    public reabastecer(cantidad: number): void {
        this.stock += cantidad;
        console.log(`Se reabasteció con ${cantidad} unidades de ${this.nombre}. Stock actual: ${this.stock}`);
    }
  
    public actualizarStock(nuevoStock: number): void {
        this.stock = nuevoStock;
        console.log(`Stock actualizado a ${this.stock} unidades de ${this.nombre}`);
    }
  }
  
  // Crear una instancia de la clase Producto
  const producto = new Producto("Auriculares", 100, 10);
  
  // Probar los métodos
  producto.obtenerDetalles();
  producto.vender(3);
  producto.reabastecer(5);
  producto.actualizarStock(20);