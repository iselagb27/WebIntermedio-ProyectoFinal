document.getElementById('boton').onclick=function(){
  var nombre=prompt("Registra tu nombre: ");
  nombre=nombre.toUpperCase();
  document.getElementById('boton').innerHTML=nombre;
  document.getElementById("boton").classList.add('registro');
}




//slogan flotante
$( function() {
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
} );
