// console.log("Hola mundo")

// function suma (a,b){
//     return a + b
// }

// console.log(suma(2,8))

// const restar = (a,b) => a - b

// console.log(restar(5,1));

// const saludar = function (nombre){
//     console.log(`Hola ${nombre}`);
// }

// saludar("Fabio")

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre
//         this.edad = edad
//     }

//     saludar(){
//         console.log(`Hola ${this.nombre}`);
//     }
// }

// let persona1 = new Persona("Fabio", 34)
// console.log(persona1);

class Contador {
    static cuentaGlobal = 0
    constructor(responsable){
        this.responsable=responsable
        this.cuentaIndividual = 0
    }

    getResponsable (){
        return this.responsable
    }

    getCuentaIndividual(){
        return this.cuentaIndividual
    }
    static getCuentaGlobal (){
        return Contador.cuentaGlobal
    }

    contar(){
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }
}

const contador1 = new Contador("Fabio")
console.log(contador1.getResponsable());
contador1.contar();
contador1.contar();
contador1.contar();
console.log(contador1.getCuentaIndividual());
console.log(Contador.getCuentaGlobal());

