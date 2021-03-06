
let producto = 0;
let cantidadProducto = 0;
let precio = 0;
let carrito = [];
//CLASS PRODUCTO 
class Producto {
    constructor(id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    
}

class Pedido {
  constructor(producto, precio, cantidad) {
    (this.producto = producto),
      (this.precio = precio),
      (this.cantidad = cantidad),
      (this.envio = 0),
      (this.subTotal = 0),
      (this.total = 0);
  }

  calcularSubTotal() {
    this.subTotal = this.precio * this.cantidad;
  }

  calcularIva() {
     return this.subTotal * 0.21;
  }

  calcularEnvio() {
    if (this.subTotal >= 30000) {
      this.envio = 0;
    } else {
      this.envio = 2000;
    }
  }

  calcularTotal() {
    this.total = this.subTotal + this.envio + this.calcularIva();
  }
}
//AGREGUE PRODUCTOS
let productos = [];

productos.push(new Producto("1", "Samsung s22", 200000 ,"Celulares"));
productos.push(new Producto("2", "Iphone 13", 250000,"Celulares"));
productos.push(new Producto("3", "Motorola Edge 20", 100000,"Celulares"));
productos.push(new Producto("4", "Xiamomi Mi 10 Pro", 110000,"Celulares"));
productos.push(new Producto("5", "Samsung Galaxy Z Flip3 s22", 160000,"Celulares"));
productos.push(new Producto("6", "Apple iPhone SE s22", 140000,"Celulares"));
productos.push(new Producto("7", "Moto G200", 100000,"Celulares"));
productos.push(new Producto("8", "Nokia 1100 2023", 85000,"Celulares"));
productos.push(new Producto("9", "Mac Book PRO", 300000,"Computadoras"));
productos.push(new Producto("10", "Lenovo i3", 120000,"Computadoras"));
productos.push(new Producto("11", "HP 240 G7", 50000,"Computadoras"));
productos.push(new Producto("12", "Razer Blade 15", 400000,"Computadoras"));
productos.push(new Producto("13", "Asus ZenBook ", 120000,"Computadoras"));
/***DOM Y EVENTOS */

let botonMostrar = document.getElementById("botonMostrar");
let productosDisponibles = document.getElementById("productosDisponibles");

botonMostrar.addEventListener('click', () => {
  productos.forEach((producto,index) => {
    productosDisponibles.innerHTML += `
      <div class="card mb-3 bg-dark text-white card border-light" id="${index}" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="img/tecnoAR.png" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">Precio:$${producto.precio}</p>
              <p class="card-text"><small class="text-muted">${producto.categoria}</small></p>
              <button class="btn btn-warning">Agregar Al Carrito</button>
            </div>
          </div>
        </div>
      </div>

    `
    
  });
});
//MOSTRAR PRODUCTOS

function mostrarProductos(){
    let mostrar = prompt("Desea Conocer nuestra lista de Productos disponibles? SI/NO").toLocaleUpperCase();
    alert("Tambien haciendo Click al Boton en pantalla,Podras ver nuestros productos disponibles")
    if(mostrar == "SI" ){
      productos.forEach(function(lista){
          console.log(lista)
      })
        
}else if (mostrar == "NO"){
    alert("No hay Problema.Vuelvas prontos")
}else{
    alert("Verifique si escribio bien las opciones")
    mostrar = prompt("Desea Conocer nuestra lista de Productos disponibles? SI/NO").toLocaleUpperCase();}
}
function filtrarPorCategorias(){
    let opcion = parseInt(prompt("Si desea Filtrar por categoria Celulares ingrese : 1\nSi desea Filtrar por categoria Computadoras disponibles ingrese : 2"))
    if(opcion === 1){
        let categoriaCelulares = productos.filter(marca => marca.categoria === "Celulares");
        console.log(categoriaCelulares)
    }
    else if(opcion === 2){
        let categoriaComputadoras = productos.filter(marca => marca.categoria === "Computadoras");
        console.log(categoriaComputadoras)
    }
else{
    alert("Corrobore ingresar la opcion correcta")
}

}
function ordernarProducto (){

    let orden = prompt("??Quiere ordenar los productos del m??s caro al m??s barato? SI / NO")
    let ordenar = orden.toUpperCase()
    
    if(ordenar == "NO"){
    
        productos.sort((a, b) => {
        if(a.precio < b.precio) {
            return -1;
        }
    
        if(a.precio > b.precio){
            return 1;
        }
        return 0;
    })}else{
        
        productos.sort((a, b) => {
            if(a.precio < b.precio) {
                return 1;
            }
        
            if(a.precio > b.precio){
                return -1;
            }
            return 0;
        })
    }
    
    console.log(productos)}
/*REALIZAR PEDIDO */
function pedidoProducto() {
  while (!producto || producto == 0 || producto > 15) {
    producto = parseInt(
      prompt(
        "??Qu?? producto desea comprar?:\n 1: Samsung s22 ($200000)\n 2: Iphone 13 ($250000)\n 3: Motorola Edge 20 ($100000)\n 4: Xiamomi Mi 10 Pro ($110000)\n 5: Samsung Galaxy Z Flip3 ($160000)\n 6: iPhone SE ($140000)\n 7: Moto G200 ($100000)\n 8: Nokia 1100 2023($85000)\n 9: Mac Book PRO ($300000)\n 10: Lenovo i3 ($120000)\n 11: HP 240 G7 ($50000)\n 12: Razer Blade 15 ($400000)\n 13: Asus ZenBook ($120000)"
      )
    );
  }

  switch (producto) {
    case 1:
        producto = "Samsung s22";
        precio = 200000;
        break;
    case 2:
        producto = "Iphone 13";
        precio = 250000;
        break;
    case 3:
        producto = "Motorola Edge 20";
        precio = 100000;
        break;
    case 4:
        producto = "Xiamomi Mi 10 Pro";
        precio = 110000;
        break;
    case 5:
        producto = "Samsung Galaxy Z Flip3";
        precio = 160000;
        break;
    case 6:
        producto = "iPhone SE";
        precio = 140000;
        break;
    case 7:
        producto = "Moto G200";
        precio = 100000;
        break;
    case 8:
        producto = "Nokia 1100 2023";
        precio = 85000;
        break;
    case 9:
        producto = "Mac Book PRO";
        precio = 300000;
        break;
    case 10:
        producto = "Lenovo i3";
        precio = 120000;
        break;
    case 11:
        producto = "HP 240 G7";
        precio = 50000;
        break;
    case 12:
        producto = "Razer Blade 15";
        precio = 400000;
        break;
    case 13:
        producto = "Asus ZenBook";
        precio = 120000;
        break;
  }

  while (!cantidadProducto || cantidadProducto == 0) {
    cantidadProducto = parseInt(
      prompt(`Producto seleccionado : ${producto}\n Introducir la cantidad `,0)
    );
  }

  return new Pedido(producto, precio, cantidadProducto);
}
function mostrarCarrito() {
    for (let i = 0; i < carrito.length; i++) {
      return alert(
        "Detalle del pedido:\n" +
          "- " +
          carrito[i].producto +
          " x " +
          carrito[i].cantidad +
          ": $" +
          carrito[i].precio * carrito[i].cantidad +
          "\n" +
          "- IVA 21%: $" +
          carrito[i].calcularIva() +
          "\n" +
          "- Costo de env??o: $" +
          carrito[i].envio +
          "\n" +
          "Total = $" +
          carrito[i].total
      );
    }
  }

alert("Bienvenida/o a TecnoAR");
mostrarProductos();
ordernarProducto();
filtrarPorCategorias();
const pedido = pedidoProducto();
carrito.push(pedido);
console.log(carrito)
pedido.calcularSubTotal();
pedido.calcularIva();
pedido.calcularEnvio();
pedido.calcularTotal();
mostrarCarrito();



