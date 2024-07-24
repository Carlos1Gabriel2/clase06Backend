/*
Ejercicio: Herencia con propiedades protegidas
Define dos clases, Empleado y Gerente, donde Gerente hereda de empleado y añade
una propiedad especifica. Ademas, se debe sobreescribir un metodo en la clase
derivada para incluir informacion adicional
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//protected: es un modificador de acceso que permite que las propiedades y métodos de una clase sean accesibles dentro de la propia clase y las clases derivadas.
var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    Empleado.prototype.obtenerDetalles = function () {
        console.log("Nombre del empleado: ".concat(this.nombre, ", Salario: ").concat(this.salario));
    };
    return Empleado;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nombre, salario, departamento) {
        var _this = _super.call(this, nombre, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    Gerente.prototype.obtenerDetalles = function () {
        _super.prototype.obtenerDetalles.call(this);
        console.log("Departamento: ".concat(this.departamento));
    };
    return Gerente;
}(Empleado));
var gerente = new Gerente('Carlos', 5000, 'Recursos Humanos');
gerente.obtenerDetalles();
