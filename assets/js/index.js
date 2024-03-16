//importamos las clases necesarias y los datos desde el json.
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Tipos.js";
import animalesData from "./Animales.js";

//iniciamos una variable animales con un array vacio para almacenar los objetos de animales.
let animales = [];

//Esta funcion se encargará de actualizar el div con id animales, 
//primero limpia los elementos y luego itera sobre el array con los objetos de animales
//para luego insertarlos en el div con el contenido solicitado dentro de las etiquetas 
//necesarias para mantener un estilo adecuado en la página. (recordar que utilizamos bootstrap y por eso algunas clases en las etiquetas.)
//finalmente agregamos tambien un evento click a cada boton dentro de los elementos para poder activar el sonido de los animales.
const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = "";
  animales.forEach((p, i) => {
    animalesTemplate.innerHTML += `
          <div class="px-3 pb-2">
            <div class="bg-dark text-white">
              <img
                height="200"
                src="${p.getImg()}"
                data-toggle="modal" data-target="#exampleModal"
                onclick="modalDetails('${i}')"
              />
              <div>
                <button onclick="playSound('${p.getNombre()}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
              </div>
            </div>
          </div>
    `;
  });
  document
    .querySelectorAll(".card-body button")
    .forEach((b) => b.addEventListener("click", activarHabiblidad));
};


//Esta funcion se llama cuando hacemos click en el boton de reproducción de sonido de las tarjetas de los animales.
//En este caso usamos window para convertir esta función en una global y poder accederla desde cualquier parte del código
//incluso tambien desde el html. (revisar web apis.)
//Si bien usar window no era absolutamente necesario, se agregó con fines pedagógicos y de investigación.
window.playSound = (nombre) => {
  const animal = animales.find((a) => a.getNombre() == nombre);
  console.log(animal);
  nombre == "Leon"
    ? animal.Rugir()
    : nombre == "Lobo"
    ? animal.Aullar()
    : nombre == "Oso"
    ? animal.Gruñir()
    : nombre == "Serpiente"
    ? animal.Sisear()
    : nombre == "Aguila"
    ? animal.Chillar()
    : undefined;
};

// Esta funcion se llamará al hacer click a un animal abriendo el modal.
// también usamos window por la misma razón anterior (aunque también no es estrictamente necesario.)
window.modalDetails = (i) => {
  const modalBody = document.getElementsByClassName("modal-body")[0];
  const animal = animales[i];
  modalBody.innerHTML = `
    <div class="px-3 pb-2">
    <div class="card w-50 m-auto bg-dark text-white border-0">
      <img
        src="${animal.getImg()}"
        class="d-block m-auto w-100"
      />
      <div class="card-body text-center">
        <h6 class="card-text ">${animal.getEdad()}</h6>
        <h6 class="card-text m-0">Comentarios</h6>
        <hr/>
        <p>${animal.getComentarios()}</p>
      </div>
    </div>
    </div>
    `;
};


//Este es el event listener para que cuando seleccionemos un animal en el dropdow, la imagen
//correspondiente al animal seleccionado aparezca en la seccion con el id preview.
//fijense que aquí estamos manipulando el css del archivo que tiene como fondo de imagene el dibujo del leon
//lo que hacemos entonces es usando el metodo style, cambiar el src del atributo background image.
//revisen el archivo css para entender este punto.
let imagenSrc;
let sonido;
document.getElementById("animal").addEventListener("change", async (e) => {
  const animalSelected = e.target.value;
  const animales = await animalesData.getData();
  const animalObject = animales.find((a) => a.name == animalSelected);
  imagenSrc = `./assets/imgs/${animalObject.imagen}`;
  sonido = animalObject.sonido;
  const preview = document.getElementById("preview");
  preview.parentElement.classList.remove("p-5");
  preview.style.backgroundImage = `url(${imagenSrc})`;
});


//Aqui generamos el event listener para que al momento de apretar el boton registrar 
//aparezcan los cambios en la sección principal con el animal seleccionado.
//aquí entonces es que en base a este event listener llamamos finalmente la funcion reload table
//que generamos anteriormente y si no llenamos los datos del formulario enviará una alerta.
document.getElementById("btnRegistrar").addEventListener("click", async (e) => {
  const nombreElement = document.getElementById("animal");
  const edadElement = document.getElementById("edad");
  const comentariosElement = document.getElementById("comentarios");
  const nombre = nombreElement.value;
  const edad = edadElement.value;
  const comentarios = comentariosElement.value;
  if (nombre && edad && comentarios) {
    let animal =
      nombre == "Leon"
        ? new Leon(nombre, edad, imagenSrc, comentarios, sonido)
        : nombre == "Lobo"
        ? new Lobo(nombre, edad, imagenSrc, comentarios, sonido)
        : nombre == "Oso"
        ? new Oso(nombre, edad, imagenSrc, comentarios, sonido)
        : nombre == "Serpiente"
        ? new Serpiente(nombre, edad, imagenSrc, comentarios, sonido)
        : nombre == "Aguila"
        ? new Aguila(nombre, edad, imagenSrc, comentarios, sonido)
        : undefined;

    nombreElement.selectedIndex = 0;
    edadElement.selectedIndex = 0;
    comentariosElement.value = "";
    document.getElementById("preview").style.backgroundImage =
      "url(assets/imgs/lion.svg)";
    animales.push(animal);
    reloadTable();
  } else {
    alert("Debe llenar todos los datos del formulario");
  }
});
