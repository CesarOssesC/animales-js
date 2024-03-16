//Importamos clase animal desde su archivo.
import Animal from "./Animal.js";

//Guardamos etiqueta de audio en una constante para posterior utilización.
const audioPlayer = document.getElementById("player");

//Creamos clases heredando desde animal con sus respectivos metodos de acuerdo a los requerimientos.
class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Rugir() {
    console.log(this.getSonido());
    //utilizamos audioPlayer para cambiar su atributo src (usando notación de punto)
    audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    //Al ser una etiqueta de audio podemos utilizar el metodo play para ejecutar el audio
    //de acuerdo a la documentacion HTMLAudioElement.
    audioPlayer.play();
  }
}
//Lo mismo para el resto de las clases
class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Aullar() {
    audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    audioPlayer.play();
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Gruñir() {
    audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    audioPlayer.play();
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Sisear() {
    audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    audioPlayer.play();
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Chillar() {
    audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    audioPlayer.play();
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
