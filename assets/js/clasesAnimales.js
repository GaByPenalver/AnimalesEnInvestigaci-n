class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;

    }


    get Nombre() {
        return this._nombre;
    }

    get Edad() {
        return this._edad;
    }

    get Img() {
        return this._img;
    }

    set Comentarios(nuevosComentarios) {
        this._comentarios = nuevosComentarios;
    }

    get Sonido() {
        return this._sonido;
    }
}

class Leon extends Animal {
    Rugir() {
        console.log(`${this._nombre} está rugiendo: ${this._sonido}`);
    }
}

class Lobo extends Animal {
    Aullar() {
        console.log(`${this._nombre} está aullando: ${this._sonido}`);
    }
}

class Oso extends Animal {
    Gruñir() {
        console.log(`${this._nombre} está gruñendo: ${this._sonido}`);
    }
}

class Serpiente extends Animal {
    Sisear() {
        console.log(`${this._nombre} está siseando: ${this._sonido}`);
    }
}

class Aguila extends Animal {
    Chillar() {
        console.log(`${this._nombre} está chillando: ${this._sonido}`);
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };