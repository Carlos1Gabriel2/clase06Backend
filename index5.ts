/*
Ejercicio: Herencia con propiedades protegidas
Define dos clases, Empleado y Gerente, donde Gerente hereda de empleado y añade
una propiedad especifica. Ademas, se debe sobreescribir un metodo en la clase
derivada para incluir informacion adicional
*/

//protected: es un modificador de acceso que permite que las propiedades y métodos de una clase sean accesibles dentro de la propia clase y las clases derivadas.

class Empleado {
    protected nombre: string;
    protected salario: number;

    constructor(nombre: string, salario: number){
        this.nombre = nombre;
        this.salario = salario;
    }

    obtenerDetalles(){
        console.log(`Nombre del empleado: ${this.nombre}, Salario: ${this.salario}`);
    }


}

class Gerente extends Empleado{
    private departamento: string;

    constructor(nombre: string, salario: number, departamento: string){
        super(nombre, salario);
        this.departamento = departamento;
    }

    obtenerDetalles() {
        super.obtenerDetalles();
        console.log(`Departamento: ${this.departamento}`);
    }

}

const gerente = new Gerente('Carlos', 5000, 'Recursos Humanos');
gerente.obtenerDetalles();