// Revisar actualizaciones de la libreria
// Documentacion:  http://izitoast.marcelodolce.com/#documentation
// Ejemplos: http://bestofcoder.000webhostapp.com/2017/08/best-notification-plugin-for-javascript-and-jquery-using-izitoast/
// No ha funcionado con FontAwesome 5

function colocar_notificacion(titulo, mensaje, imagen, funcion_activar, nombre_boton, evento){

  // Seleccion del color de fondo de la notificación
  if (evento == "success"){
    background1 = "#5ecf45";
  } else if (evento == "info"){
    background1 = "#3989da";
  } else if (evento == "warning"){
    background1 = "#ddcb27";
  } else if (evento == "danger"){
    background1 = "#f53535";
  } else {
    background1 = "#cf59d0";
    console.log("Evento incorrecto");
  }


  iziToast.show({
      theme: 'dark', // dark, light
      backgroundColor: background1,
      //icon: 'far fa-file-pdf',s
      title: titulo,
      message: mensaje,
      image: "public/img/" + imagen,
      position: 'bottomLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      timeout: 6000,
      balloon: true, // Mensaje tipo globo
      // rtl: true, // Cambia de posición la imagen
      progressBarColor: 'rgb(0, 255, 184)',
      buttons: [
          ['<button>' + nombre_boton + '</button>', function (instance, toast) {
            instance.hide({ transitionOut: 'fadeOutUp' }, toast); // Oculta la notificación actual
            self[funcion_activar]();
          }]/*,
          ['<button>Close</button>', function (instance, toast) {
              instance.hide({
                  transitionOut: 'fadeOutUp',
                  onClosing: function(instance, toast, closedBy){
                      console.info('closedBy: ' + closedBy); //btn2
                  }
              }, toast, 'close', 'btn2');
          }]*/
      ],
      onOpening: function(instance, toast){
          console.info('callback abriu!');
      },
      onClosing: function(instance, toast, closedBy){
          console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
      }
  });
}

function mensaje_en_consola(){
  console.log("Click en notificacion");
}
