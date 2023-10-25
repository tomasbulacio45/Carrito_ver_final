// Agrego funcionalidad al boton Agregar al carrito

var botonesAgregarCarrito = document.getElementsByClassName("boton-item");
for(var i = 0; i<botonesAgregarCarrito.length; i++){
    var button= botonesAgregarCarrito[i];
    button.addEventListener("click", agregarCarritoClicked);
}

function agregarCarritoClicked(event){
    alert("Producto Agregado al Carrito!");
}

// Uso de API dolar

fetch('https://api.bluelytics.com.ar/v2/latest') 
 .then(response => response.json()) 
 .then(data => {
    console.log(data)
    
    cot = `<h2>Cotizacion del dolar y el euro</h2>

                <p class="api">Dolar Oficial: ${data.oficial.value_avg}</p>
                <p class="api">Dolar Blue: ${data.blue.value_avg}</p>

                <p class="api">Euro Oficial: ${data.oficial_euro.value_avg}</p>
                <p class="api">Euro Blue: ${data.blue_euro.value_avg}</p>

    `
    document.querySelector(".cotizacion").innerHTML=cot
 }
 );