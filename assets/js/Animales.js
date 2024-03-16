//Creamos una iife para obtener los datos desde el archivo json
//con el fin de que los datos estén disponibles al cargar la página.
let animales = (() => {
  // const url = "http://localhost:5500/animales.json";
  const url = "./animales.json";
  const getData = async () => {
    const res = await fetch(url);
    const { animales } = await res.json();
    return animales;
  };
  return { getData };
})();

// si quisieramos ver si funciona en consola primero
// animales.getData().then(animales => {
//   console.log('Animales obtenidos:', animales);
// }).catch(error => {
//   console.error('Error al obtener animales:', error);
// });

export default animales;
