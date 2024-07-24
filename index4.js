/*
Define una clase base Gente con la propiedades nombre (string) y edad (number), y
un metodo presentarse que devuelva un string presentando a la persona.

Define una clase Estudiante que extienda de Gente y añade una propiedad al grado (string)

Sobreescribe el metodo presentarse en la clase Estudiante para incluir el grado en la presentacion.

Crea una instancia en la clase Estudiante y llama el motodo presentarse
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
var Gente = /** @class */ (function () {
    function Gente(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Gente.prototype.presentarse = function () {
        return "Hola, me llamo ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Gente;
}());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, edad, grado) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.grado = grado;
        return _this;
    }
    Estudiante.prototype.presentarse = function () {
        return "Hola, me llamo ".concat(this.nombre, " tengo ").concat(this.edad, " a\u00F1os y estoy en el grado ").concat(this.grado, ".");
    };
    return Estudiante;
}(Gente));
var estudiante = new Estudiante("Gabriel", 28, "1º de Ingeniería");
console.log(estudiante.presentarse());
