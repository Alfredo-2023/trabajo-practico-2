const contenedor2 = document.getElementById("detalles");

let productos = localStorage.getItem("productos");

productos = JSON.parse(productos);

let posicion = localStorage.getItem("posicion");
console.log(posicion);

const productoDetallado = (producto)=>{
  let detalles =
  `<h1>${producto.nombre}</h1>
  <h2>${producto.descripcion}</h2>
  <p>${producto.detalle}</p>
  <img src="${producto.imagen}" alt="${producto.imagen}"></img>
  <h3 id="centrado">$ ${producto.precio}</h3>
 <p id="color">${producto.puntuacion}</p>`;
  contenedor2.innerHTML+=detalles;
};

productoDetallado(productos[posicion]);