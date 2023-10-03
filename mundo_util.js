 
const tabla = document.getElementById("datos");
  
const cargarProductos = async () => {
  
localStorage.clear();

let productos = localStorage.getItem("productos");
  
if (productos === null) {
  const Obj_res = await fetch("productos.json");
  productos = await Obj_res.json();
}
  
localStorage.setItem("productos", JSON.stringify(productos));
  
if (typeof productos == "string") {
productos = JSON.parse(productos);
}  

productos.forEach(mostrarProductos);


};

const mostrarProductos = (producto,index) =>{
  let nombre_descrip= "";
  nombre_descrip += `<tr>
  <th>${producto.nombre}</th>
  <td>${producto.descripcion}</td>
  <td data-id="${index}" class="boton">Ver producto</td>
  </tr>`;
  tabla.innerHTML+=nombre_descrip;
}



cargarProductos();

tabla.addEventListener("click", (event) => {
  if(event.target.className==="boton") {
    let posicion = event.target.dataset.id;
    localStorage.setItem("posicion",posicion);
    window.location.href = "articulo.html";
  }
});