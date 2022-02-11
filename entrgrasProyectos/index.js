
const productos = 
[{
    id      : 1,
    tintura : "loreal",
    numero : 7,
    img    : "./loreal.jpg",
    precio : 780,
    cantidad : 0,
},

  {
    id      : 2,
    tintura : "opcion",
    numero  : 11,
    img     : "./opcion5.jpg",
    precio : 280,
    cantidad : 0,

},
   {
    id      : 3,
    tintura : "issue",
    numero  : 10,
    img     :"./issue.jpg",
    precio : 190,
    cantidad : 0,

}, 

   {
    id      : 4,
    tintura : "otowil",
    numero  : 9,
    precio : 175,
    img : "./otowil3.jpg",
    cantidad : 0,

   
    
    
   },
   {
    
    id      : 5,
    tintura : "sistem3",
    numero  : 8,
    img     : "./sistem3.jpg",
    precio : 300,
    cantidad : 0,

   

}];

const  footer = document.getElementById('divFooter')

const carrito = [];
const badge = document.getElementById('badge')
const tableBody = document.getElementById('table-contenedor')
const seccion = document.getElementById('seccion')
let total = 0;














productos.forEach((item)=>{

  const mercaderia = document.createElement('div');
mercaderia.innerHTML = `<div class="card m-5 border border-3 shadow p-3 mb-5 bg-body rounded  " style="width: 14rem; " >
<img src="${item.img}" class="card-img-top"  alt="...">
<div class="card-body">
  <h5 class="card-title">${item.tintura}</h5>
  <p>Precio $ ${item.precio} </p>
  <div class = " container d-flex "> 
  <button   onclick = "agregarAlCarrito(${item.id})" class="btn btn-outline-info d-flex justify-content-center m-1"  class = " ">Agregar</button>
  <button   onclick ="borrarItemCarrito(${item.id})" class="btn btn-outline-info d-flex justify-content-center m-1"  class = " ">Quitar</button>
  </div>
  </div>
  </div>`


  seccion.appendChild(mercaderia)

})

  



function agregarAlCarrito (itemId){

let producto = productos.find((item) => item.id == itemId );
carrito.push(producto)
badge.innerHTML = carrito.length
 


renderizarCarrito()
guardarCarritoEnLocalStorage ()




}

 
 



function renderizarCarrito (){
tableBody.innerHTML = "";

carrito.forEach((item) =>{
  const tr = document.createElement("tr")
  tr.className = "table-primary";
  tr.innerHTML = `
          <th scope='row'>${item.id}</th>
          <td >${item.tintura}</td>
          <td >${item.cantidad}</td>
          
          <td >${item.precio}</td>

  
  
  `
  
  tableBody.appendChild(tr)
 
  
 
  
  
})

}

function borrarItemCarrito (itemId) {
  let producto = productos.find((item) => item.id == itemId );
  carrito.splice(0,1)
  badge.innerHTML = carrito.length

  renderizarCarrito()
}

 

function guardarCarritoEnLocalStorage (){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}


// function cargarCarritoEnLocalStorage (){
//   localStorage.getItem('carrito',JSON.parse(carrito))
// }

//  function SumaPrecios (){
//    for (let i = 0; i <= carrito.length; i++){
//      carrito = carrito[i];
//      suma += carrito;
//    }
//  }

//  function pintarFooter (){

//  footer.innerHTML = calcularTotal()


//  }


renderizarCarrito()
//cargarCarritoEnLocalStorage ()
// SumaPrecios ()
    

































































































































































