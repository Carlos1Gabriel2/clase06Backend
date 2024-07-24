/*
Define una clase Auto con las propiedades marca(string), modelo (string) y
año (number).

Define un metodo en la clase Auto llamado "descripcion" que devuelva un string
con la descripcion del auto

Crear una instancia de la clase auto y llamar el metodo "descripcion".
*/

class Auto {
    marca: string;
    modelo: string;
    año: number;

    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    descripcion(): string {
        return `Este auto es un ${this.marca} ${this.modelo} del año ${this.año}.`;
    }
}

const miAuto = new Auto("Hyundai", "i20", 2023);

console.log(miAuto.descripcion());
