//Definir la clase Persona 
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os. "));
    };
    return Persona;
}());
// Crear una instancia de la clase persona
var persona1 = new Persona('Juan', 30);
persona1.saludar();
