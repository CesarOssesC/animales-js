//Construcción clase padre Animal de acuerdo a diagrama de clases.
class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    let Nombre = nombre;
    this.getNombre = () => Nombre;

    let Edad = edad;
    this.getEdad = () => Edad;

    let Img = img;
    this.getImg = () => Img;

    let Comentarios = comentarios;
    this.getComentarios = () => Comentarios;

    let Sonido = sonido;
    this.getSonido = () => Sonido;
  }

  get Nombre() {
    return this.getNombre();
  }

  get Edad() {
    return this.getEdad();
  }
  get Img() {
    return this.getImg();
  }

  get Comentarios() {
    return this.getComentarios();
  }

  get Sonido() {
    return this.getSonido();
  }
}

export default Animal;
