// Objetos literales

const personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.036,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
};

// console.log({ personaje });
// console.log("Ultimo traje", personaje.trajes[personaje.trajes.length - 1]);

// Mas detalles

// eliminar propiedad de un objeto

delete personaje.edad;
// console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);

// console.log(entriesPares);
console.log(personaje);

// Bloquear edicion del Objeto, no nos permite modificar las propiedades

Object.freeze(personaje);

personaje.dinero = 520000000;

// Propiedades y valores

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log({ propiedades });
console.log({ valores });
