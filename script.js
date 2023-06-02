// Primero, define los colores que te gustaría usar en un arreglo.
var colores = ["red", "blue", "green", "yellow", "pink", "purple"];

// Obtén el botón usando su ID. Asegúrate de tener un botón en tu HTML con este ID.
var boton = document.getElementById("cambiarColor");

// Añade un Event Listener al botón para cambiar el color del fondo cuando se haga clic en él.
boton.addEventListener("click", function() {
    // Genera un número aleatorio entre 0 y la longitud de tu arreglo de colores.
    var indiceAleatorio = Math.floor(Math.random() * colores.length);
  
    // Usa el número aleatorio para obtener un color de tu arreglo de colores.
    var colorAleatorio = colores[indiceAleatorio];
  
    // Cambia el color del fondo a tu color aleatorio.
    document.body.style.backgroundColor = colorAleatorio;
});
