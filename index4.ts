/*
Define una clase base Gente con la propiedades nombre (string) y edad (number), y
un metodo presentarse que devuelva un string presentando a la persona.

Define una clase Estudiante que extienda de Gente y añade una propiedad al grado (string)

Sobreescribe el metodo presentarse en la clase Estudiante para incluir el grado en la presentacion.

Crea una instancia en la clase Estudiante y llama el motodo presentarse
*/

class Gente {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): string {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

class Estudiante extends Gente {
    grado: string;

    constructor(nombre: string, edad: number, grado: string) {
        super(nombre, edad);
        this.grado = grado;
    }

    presentarse(): string {
        return `Hola, me llamo ${this.nombre} tengo ${this.edad} años y estoy en el grado ${this.grado}.`;
    }
}


const estudiante = new Estudiante("Gabriel", 28, "1º de Ingeniería");
console.log(estudiante.presentarse());
