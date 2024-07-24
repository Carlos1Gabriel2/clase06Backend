/*
Define una clase Auto con las propiedades marca(string), modelo (string) y
año (number).

Define un metodo en la clase Auto llamado "descripcion" que devuelva un string
con la descripcion del auto

Crear una instancia de la clase auto y llamar el metodo "descripcion".
*/
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    Auto.prototype.descripcion = function () {
        return "Este auto es un ".concat(this.marca, " ").concat(this.modelo, " del a\u00F1o ").concat(this.año, ".");
    };
    return Auto;
}());
var miAuto = new Auto("Hyundai", "i20", 2023);
console.log(miAuto.descripcion());
